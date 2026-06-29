"use client";

export interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

/**
 * /api/chat'ten token token akış okur, her parçayı onToken ile verir.
 * Dönüş: { ok } — false ise (key yok, network, upstream hatası) client mock'a düşmeli.
 * gotAnyToken: en az bir token geldiyse true (kısmi akışta fallback'i engellemek için).
 */
export async function streamBotReply(
  message: string,
  history: ChatTurn[],
  onToken: (chunk: string) => void
): Promise<{ ok: boolean; gotAnyToken: boolean }> {
  let gotAnyToken = false;
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });

    if (!res.ok || !res.body) return { ok: false, gotAnyToken };

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      if (chunk) {
        gotAnyToken = true;
        onToken(chunk);
      }
    }
    return { ok: true, gotAnyToken };
  } catch {
    return { ok: false, gotAnyToken };
  }
}
