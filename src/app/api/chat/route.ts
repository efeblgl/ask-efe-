import { NextRequest } from "next/server";
import { EFEBOT_SYSTEM_PROMPT } from "@/lib/systemPrompt";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  // Key yoksa 503 dön -> client mock'a düşer (hibrit davranış)
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "no_api_key" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  let message = "";
  let history: ChatTurn[] = [];
  try {
    const body = await req.json();
    message = String(body.message ?? "").slice(0, 2000);
    if (Array.isArray(body.history)) history = body.history.slice(-8);
  } catch {
    return new Response(JSON.stringify({ error: "bad_request" }), { status: 400 });
  }

  if (!message.trim()) {
    return new Response(JSON.stringify({ error: "empty_message" }), { status: 400 });
  }

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      stream: true,
      temperature: 0.8,
      max_tokens: 400,
      messages: [
        { role: "system", content: EFEBOT_SYSTEM_PROMPT },
        ...history,
        { role: "user", content: message },
      ],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const errBody = await upstream.text().catch(() => "no body");
    console.error("OpenAI error:", upstream.status, errBody);
    return new Response(JSON.stringify({ error: "upstream_error", detail: errBody }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  // OpenAI SSE -> düz token akışına çevir (client basitçe text okur)
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const token = json.choices?.[0]?.delta?.content;
              if (token) controller.enqueue(encoder.encode(token));
            } catch {
              /* yarım JSON parçası — yoksay */
            }
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
