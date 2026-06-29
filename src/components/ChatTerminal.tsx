"use client";

import { useEffect, useRef, useState } from "react";
import { streamBotReply, type ChatTurn } from "@/lib/chat";
import { getMockReply } from "@/lib/efebot";
import { suggestedQuestions } from "@/data/suggestedQuestions";
import { statusMessages, coreMessages } from "@/data/statusMessages";
import type { ChatMessage as Msg } from "@/types";

const uid = () => Math.random().toString(36).slice(2, 9);

export default function ChatTerminal() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: uid(), role: "bot", text: "Merhaba. Efe hakkında ne öğrenmek istiyorsun?" },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [typing, setTyping] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [tokens, setTokens] = useState(0);

  const streamRef = useRef<HTMLDivElement>(null);

  // Dönen status (botStatus + coreStatus)
  useEffect(() => {
    const t = setInterval(() => setStatusIndex((i) => (i + 1) % statusMessages.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Token sayacı (dekoratif)
  useEffect(() => {
    const t = setInterval(() => setTokens((v) => v + Math.floor(Math.random() * 18) + 7), 260);
    return () => clearInterval(t);
  }, []);

  // Yeni mesaj/typing'de en alta kaydır
  useEffect(() => {
    streamRef.current?.scrollTo({ top: streamRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;

    setMessages((m) => [...m, { id: uid(), role: "user", text }]);
    setInput("");
    setBusy(true);
    setTyping(true);

    const history: ChatTurn[] = messages.slice(-8).map((m) => ({
      role: m.role === "bot" ? "assistant" : "user",
      content: m.text,
    }));

    const botId = uid();
    let started = false;

    const { ok, gotAnyToken } = await streamBotReply(text, history, (chunk) => {
      if (!started) {
        started = true;
        setTyping(false);
        setMessages((m) => [...m, { id: botId, role: "bot", text: chunk }]);
      } else {
        setMessages((m) => m.map((msg) => (msg.id === botId ? { ...msg, text: msg.text + chunk } : msg)));
      }
    });

    if (!ok && !gotAnyToken) {
      setTyping(false);
      setMessages((m) => [...m, { id: botId, role: "bot", text: getMockReply(text) }]);
    }

    setBusy(false);
  };

  return (
    <aside className="side-panel reveal">
      <div className="terminal-top">
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-dot" />
        <span>efe.system / local-llm-interface</span>
      </div>

      <div className="terminal-body">
        {/* Model core (dekoratif) */}
        <div className="ai-core">
          <div className="ai-core-head">
            <span>MODEL CORE</span>
            <span>{coreMessages[statusIndex]}</span>
          </div>
          <div className="brain-wrap">
            <div className="ring">
              <span className="node n1" />
              <span className="node n2" />
              <span className="node n3" />
            </div>
            <div className="ring two" />
            <div className="brain-orb" />
          </div>
          <div className="core-stats">
            <div><strong>{tokens.toLocaleString("tr-TR")}</strong><span>tokens</span></div>
            <div><strong>24k</strong><span>context</span></div>
            <div><strong>97%</strong><span>match</span></div>
          </div>
        </div>

        {/* Gerçek chat */}
        <div className="chat-preview">
          <div className="chat-head">
            <span className="status">
              <span className="pulse-dot" />
              EfeBot çevrimiçi
            </span>
            <span>{statusMessages[statusIndex]}</span>
          </div>

          <div className="chat-stream" ref={streamRef}>
            {messages.map((m) => (
              <div key={m.id} className={`msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="thinking">
                <i /><i /><i /> düşünüyor
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="chips">
              {suggestedQuestions.map((q) => (
                <button key={q} className="chip" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Efe'ye bir şey sor..."
            />
            <button className="send-btn" onClick={() => send(input)} disabled={!input.trim() || busy}>
              ↵
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
