import { timeline } from "@/data/content";

export default function TimelineSection() {
  return (
    <section className="section shell" id="timeline">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">timeline</div>
          <h2 className="section-title">Gelişim çizgisi.</h2>
        </div>
      </div>
      <div className="timeline reveal">
        {timeline.map((t) => (
          <div key={t.year} className="tl-entry">
            <div className="tl-card">
              <div className="tl-year">{t.year}</div>
              <p>{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
