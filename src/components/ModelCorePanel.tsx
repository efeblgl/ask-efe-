"use client";

import { useEffect, useState } from "react";
import { coreStats, systemSignals, securityRows } from "@/data/console";

export default function ModelCorePanel() {
  const [tokens, setTokens] = useState(1139);
  useEffect(() => {
    const t = setInterval(() => setTokens((v) => v + Math.floor(Math.random() * 12) + 3), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="core-panel">
      <div className="core-box">
        <div className="core-box-title">▦ Model Core</div>
        <div className="core-orb-wrap">
          <div className="ring" />
          <div className="ring two" />
          <div className="brain-orb" />
          <span className="node n1" />
          <span className="node n2" />
          <span className="node n3" />
        </div>
        <div className="core-name">ASK-EFE CORE v1.0</div>
        <div className="core-sub">gpt-4o · local embeddings <span className="live-dot" /> online</div>
      </div>

      <div className="core-box">
        {coreStats.map((s) => (
          <div key={s.k} className="stat-row">
            <span className="sk">{s.k}</span>
            <span className="sv">{s.dyn ? tokens.toLocaleString("tr-TR") : s.v}</span>
          </div>
        ))}
      </div>

      <div className="core-box">
        <div className="core-box-title">⊚ Sistem Sinyalleri</div>
        {systemSignals.map((s) => (
          <div key={s.k} className="signal-row">
            <span className="sk">{s.k}</span>
            <span className="sv">{s.v} <span className="live-dot" /></span>
          </div>
        ))}
      </div>

      <div className="core-box">
        <div className="core-box-title">Güvenlik</div>
        {securityRows.map((s) => (
          <div key={s.k} className="signal-row">
            <span className="sk">{s.k}</span>
            <span className="sv" style={{ color: "var(--muted-2)" }}>{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
