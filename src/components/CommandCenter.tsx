"use client";

import { useEffect, useRef, useState } from "react";
import { streamBotReply, type ChatTurn } from "@/lib/chat";
import { getMockReply } from "@/lib/efebot";
import type { ChatMessage as Msg } from "@/types";

const uid = () => Math.random().toString(36).slice(2, 9);
const now = () =>
  new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });

const quickPrompts = [
  { label: "Efe ne yapar?", q: "Efe ne yapar?" },
  { label: "Projeleri özetle", q: "Projelerini özetle" },
  { label: "Neden çalışmalıyız?", q: "Neden Efe ile çalışmalıyız?" },
  { label: "Teknik stack", q: "Teknik stack neler?" },
  { label: "Yerel işler", q: "Yerel işletmelere ne yapıyor?" },
];

const navItems = [
  { label: "Genel Bakış", href: "#top" },
  { label: "AI Sohbet", href: "#console", badge: "Yeni", active: true },
  { label: "Projeler", href: "#projects" },
  { label: "Model Stack", href: "#stack" },
  { label: "Proof", href: "#proof" },
  { label: "Case Studies", href: "#cases" },
  { label: "Hizmetler", href: "#services" },
  { label: "İletişim", href: "#contact" },
];

interface CCMsg extends Msg {
  time: string;
}

export default function CommandCenter() {
  const [messages, setMessages] = useState<CCMsg[]>([
    { id: uid(), role: "bot", text: "Merhaba. Efe hakkında ne öğrenmek istiyorsun?", time: now() },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [typing, setTyping] = useState(false);
  const [tokens, setTokens] = useState(1139);

  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setTokens((v) => v + Math.floor(Math.random() * 14) + 4), 320);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    streamRef.current?.scrollTo({ top: streamRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;

    setMessages((m) => [...m, { id: uid(), role: "user", text, time: now() }]);
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
        setMessages((m) => [...m, { id: botId, role: "bot", text: chunk, time: now() }]);
      } else {
        setMessages((m) => m.map((msg) => (msg.id === botId ? { ...msg, text: msg.text + chunk } : msg)));
      }
    });

    if (!ok && !gotAnyToken) {
      setTyping(false);
      setMessages((m) => [...m, { id: botId, role: "bot", text: getMockReply(text), time: now() }]);
    }
    setBusy(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <section className="shell" id="console">
      <div className="console-wrap">
        {/* SOL SIDEBAR */}
        <aside className="cc-sidebar">
          <div className="cc-side-brand">
            <span className="brand-mark">EF</span>
            <strong style={{ letterSpacing: "-0.04em" }}>Ask Efe</strong>
          </div>
          <div className="cc-search">
            Ara... <span className="kbd">⌘K</span>
          </div>
          <div className="cc-nav-label">menü</div>
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className={`cc-nav-item ${n.active ? "active" : ""}`}>
              <span className="ico">▣</span>
              {n.label}
              {n.badge && <span className="badge">{n.badge}</span>}
            </a>
          ))}
          <div className="cc-side-user">
            <span className="av">EF</span>
            <div>
              <div className="nm">Efe Baloğlu</div>
              <div className="rl">AI Developer</div>
            </div>
          </div>
        </aside>

        {/* ORTA CONSOLE */}
        <div className="cc-console">
          <div className="cc-head">
            <span className="mark">
              <span className="cc-wave"><i /><i /><i /><i /><i /></span>
              ASK-EFE
            </span>
            <span className="cc-meta">
              <span className="cc-live"><span className="cc-dot" /> live</span>
              <span className="sep">|</span>
              <span className="hide-sm">local context active</span>
              <span className="sep hide-sm">|</span>
              <span className="hide-sm">portfolio memory online</span>
            </span>
            <span className="right">▦ 9 projects loaded</span>
          </div>

          <div className="cc-chips">
            <span className="cc-chip"><b>projects.loaded</b> <span className="val">9/9</span></span>
            <span className="cc-chip"><b>skills.indexed</b> <span className="val">42</span></span>
            <span className="cc-chip"><b>local.workflows</b> <span className="val">active</span></span>
            <span className="cc-chip"><b>ai.mode</b> <span className="val">precise</span></span>
          </div>

          <div className="cc-stream" ref={streamRef}>
            {messages.map((m, i) => (
              <div key={m.id}>
                <div className={`cc-msg ${m.role}`}>
                  <span className="who">{m.role === "bot" ? "ASK-EFE" : "SEN"}</span>
                  <div className="cc-bubble">{m.text}</div>
                  <span className="cc-time">{m.time}</span>
                </div>
                {m.role === "bot" && i > 0 && (
                  <div className="cc-sysline" style={{ marginTop: 8 }}>&gt; response.mode: concise</div>
                )}
              </div>
            ))}
            {typing && (
              <div className="cc-typing">
                <span className="who">ASK-EFE</span>
                <div className="bubble"><i /><i /><i /> cevap hazırlanıyor</div>
              </div>
            )}
          </div>

          <div className="cc-foot">
            <div className="cc-quick">
              {quickPrompts.map((p) => (
                <button key={p.label} onClick={() => send(p.q)}>{p.label}</button>
              ))}
            </div>
            <div className="cc-dock">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Efe hakkında bir şey sor..."
              />
              <button className="send" onClick={() => send(input)} disabled={!input.trim() || busy}>↑</button>
            </div>
            <div className="cc-hint">↑ göndermek için Enter, yeni satır için Shift + Enter</div>
          </div>
        </div>

        {/* SAĞ MODEL CORE */}
        <aside className="cc-core">
          <div className="cc-panel">
            <div className="cc-panel-head"><span>▦ MODEL CORE</span></div>
            <div className="cc-orb-wrap">
              <div className="ring"><span className="node n1" /><span className="node n2" /><span className="node n3" /></div>
              <div className="ring two" />
              <div className="brain-orb" />
            </div>
            <div className="cc-core-info">
              <div className="v">ASK-EFE CORE v1.0</div>
              <div className="s">gpt-4o · local embeddings <span className="cc-dot" /> online</div>
            </div>
          </div>

          <div className="cc-panel">
            <div className="cc-stat-list">
              <div className="cc-stat"><span className="k">tokens</span><span className="v">{tokens.toLocaleString("tr-TR")}</span></div>
              <div className="cc-stat"><span className="k">context</span><span className="v">24k</span></div>
              <div className="cc-stat"><span className="k">match rate</span><span className="v">97%</span></div>
              <div className="cc-stat"><span className="k">response mode</span><span className="v">concise</span></div>
              <div className="cc-stat"><span className="k">latency</span><span className="v">0.42s</span></div>
            </div>
          </div>

          <div className="cc-panel">
            <div className="cc-panel-head"><span>◉ SİSTEM SİNYALLERİ</span></div>
            <div className="cc-signal"><span className="k">Local Context</span><span className="v">active <span className="cc-dot" /></span></div>
            <div className="cc-signal"><span className="k">Portfolio Memory</span><span className="v">online <span className="cc-dot" /></span></div>
            <div className="cc-signal"><span className="k">Project Index</span><span className="v">9/9 <span className="cc-dot" /></span></div>
            <div className="cc-signal"><span className="k">Skills Index</span><span className="v">42 <span className="cc-dot" /></span></div>
            <div className="cc-signal"><span className="k">Workflow Engine</span><span className="v">ready <span className="cc-dot" /></span></div>
          </div>

          <div className="cc-panel">
            <div className="cc-panel-head"><span>GÜVENLİK</span></div>
            <div className="cc-signal"><span className="k">Veri işleme</span><span className="v">yerel</span></div>
            <div className="cc-signal"><span className="k">Bağlantı</span><span className="v">şifreli</span></div>
            <div className="cc-signal"><span className="k">Erişim modu</span><span className="v">özel</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
