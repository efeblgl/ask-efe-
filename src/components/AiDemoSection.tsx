"use client";

import { useState } from "react";
import { demoOptions } from "@/data/content";

export default function AiDemoSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section shell" id="demo">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">ai workflow demo</div>
          <h2 className="section-title">İhtiyacını seç, sistem önersin.</h2>
        </div>
        <p className="section-text">
          Küçük bir LLM demosu. Bir senaryo seç, Ask Efe sana uygun dijital sistem kurgusunu
          önersin.
        </p>
      </div>

      <div className="demo-wrap reveal">
        <div className="demo-options">
          {demoOptions.map((o, i) => (
            <button
              key={i}
              className={`demo-btn ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {o.q}
            </button>
          ))}
        </div>

        <div className="demo-output">
          <span className="label">ask_efe → öneri</span>
          {active === null ? (
            <span className="placeholder">Yukarıdan bir senaryo seç, öneri burada görünsün.</span>
          ) : (
            <span className="text" key={active}>{demoOptions[active].a}</span>
          )}
        </div>
      </div>
    </section>
  );
}
