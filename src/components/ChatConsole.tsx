"use client";

import { useEffect, useRef, useState } from "react";
import { streamBotReply, type ChatTurn } from "@/lib/chat";
import { getMockReply } from "@/lib/efebot";
import Icon from "./Icon";
import ModelCorePanel from "./ModelCorePanel";
import { contextChips, quickPrompts, systemLines } from "@/data/console";

interface Turn {
  id: string;
  role: "user" | "bot";
  text: string;
  ts: string;
  showSys?: boolean;
}

const uid = () => Math.random().toString(36).slice(2, 9);
const now = () =>
  new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });

export default function ChatConsole() {
  const [turns, setTurns] = useState<Turn[]>([
    {
      id: uid(),
      role: "bot",
      text: "Merhaba. Ben ASK-EFE. Efe'nin projeleri, yetenekleri ve çalışma tarzı hakkında soru sorabilirsin.",
      ts: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [typing, setTyping] = useState(false);
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    streamRef.current?.scrollTo({ top: streamRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, typing]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;

    setTurns((t) => [...t, { id: uid(), role: "user", text, ts: now() }]);
    setInput("");
    setBusy(true);
    setTyping(true);

    const history: ChatTurn[] = turns.slice(-8).map((t) => ({
      role: t.role === "bot" ? "assistant" : "user",
      content: t.text,
    }));

    const botId = uid();
    let started = false;

    const { ok, gotAnyToken } = await streamBotReply(text, history, (chunk) => {
      if (!started) {
        started = true;
        setTyping(false);
        setTurns((t) => [...t, { id: botId, role: "bot", text: chunk, ts: now(), showSys: true }]);
      } else {
        setTurns((t) => t.map((m) => (m.id === botId ? { ...m, text: m.text + chunk } : m)));
      }
    });

    if (!ok && !gotAnyToken) {
      setTyping(false);
      setTurns((t) => [...t, { id: botId, role: "bot", text: getMockReply(text), ts: now(), showSys: true }]);
    }
    setBusy(false);
  };

  const reset = () =>
    setTurns([{ id: uid(), role: "bot", text: "Sıfırlandı. Yeni bir soru sorabilirsin.", ts: now() }]);

  return (
    <div className="console-grid">
      <div className="console" id="console">
        {/* header */}
        <div className="console-head">
          <span className="console-mark">⩕</span>
          <span className="console-name">ASK-EFE</span>
          <span className="console-meta">
            <span className="live-dot" /> live
            <span className="sep">|</span>
            <span>local context active</span>
            <span className="sep hide-sm">|</span>
            <span className="hide-sm">portfolio memory online</span>
          </span>
          <span className="console-loaded">
            <Icon name="layers" className="ico" /> 9 projects loaded
          </span>
        </div>

        {/* context chips */}
        <div className="chip-row">
          {contextChips.map((c) => (
            <span key={c.k} className="ctx-chip">
              {c.k} <span className="cv">{c.v}</span>
            </span>
          ))}
        </div>

        {/* message stream */}
        <div className="console-stream" ref={streamRef}>
          {turns.map((t) => (
            <div key={t.id}>
              <div className={`turn ${t.role}`}>
                {t.role === "bot" && <span className="turn-label">ASK-EFE</span>}
                <div className="bubble">
                  {t.text}
                  <span className="ts">{t.ts}</span>
                </div>
              </div>
              {t.role === "bot" && t.showSys && (
                <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 10 }}>
                  {systemLines.map((l) => (
                    <span key={l} className="sys-line">{l}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="typing">
              <span className="turn-label">ASK-EFE</span>
              <div className="typing-box">
                cevap hazırlanıyor <i /><i /><i />
              </div>
            </div>
          )}
        </div>

        {/* quick prompts */}
        <div className="quick-row">
          {quickPrompts.map((q) => (
            <button key={q} className="quick-chip" onClick={() => send(q)}>{q}</button>
          ))}
          <button className="quick-refresh" onClick={reset} title="Sıfırla">
            <Icon name="refresh" className="ico" />
          </button>
        </div>

        {/* command dock */}
        <div className="dock">
          <div className="dock-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Efe hakkında bir şey sor..."
            />
            <button className="dock-send" onClick={() => send(input)} disabled={!input.trim() || busy}>
              <Icon name="send" className="ico" />
            </button>
          </div>
          <div className="dock-hint">↑ göndermek için Enter, yeni satır için Shift + Enter</div>
        </div>
      </div>

      <ModelCorePanel />
    </div>
  );
}
