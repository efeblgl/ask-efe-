import { proofCards } from "@/data/content";

export default function ProofSection() {
  return (
    <section className="section shell" id="proof">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">proof layer</div>
          <h2 className="section-title">Gerçek işlere dokunan dijital üretim.</h2>
        </div>
        <p className="section-text">
          Burada amaç iddia değil; Efe&apos;nin gerçek işletmelere, kurumlara ve projelere
          dokunmuş tarafını göstermek.
        </p>
      </div>
      <div className="grid cases">
        {proofCards.map((c) => (
          <article key={c.title} className="case-card reveal">
            <span className="project-label">{c.tag}</span>
            <h3 style={{ marginTop: 8 }}>{c.title}</h3>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
