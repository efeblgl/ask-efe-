import { beforeItems, afterItems } from "@/data/content";

export default function BeforeAfterSection() {
  return (
    <section className="section shell" id="ba">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">before / after</div>
          <h2 className="section-title">Efe neyi değiştirir?</h2>
        </div>
      </div>
      <div className="grid ba-grid">
        <div className="ba-panel reveal">
          <div className="ba-title">before</div>
          <div className="ba-list">
            {beforeItems.map((b) => <span key={b}>{b}</span>)}
          </div>
        </div>
        <div className="ba-panel after reveal">
          <div className="ba-title">after</div>
          <div className="ba-list">
            {afterItems.map((a) => <span key={a}>{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
