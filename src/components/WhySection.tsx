import { whyCards } from "@/data/content";

export default function WhySection() {
  return (
    <section className="section shell" id="why">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">why call efe</div>
          <h2 className="section-title">Efe&apos;yi ne zaman ararsın?</h2>
        </div>
      </div>
      <div className="grid why-grid">
        {whyCards.map((w) => (
          <div key={w.title} className="why-card reveal">
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
