import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="section shell" id="projects">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">retrieved projects</div>
          <h2 className="section-title">Modelin öne çıkardığı işler.</h2>
        </div>
        <p className="section-text">
          Burada amaç sadece liste göstermek değil; Efe&apos;nin gerçek hayatta ne ürettiğini,
          hangi problemleri çözdüğünü ve teknolojiyle nasıl değer oluşturduğunu göstermek.
        </p>
      </div>

      <div className="grid projects">
        {projects.map((p) => (
          <article key={p.id} className={`card reveal ${p.large ? "large" : ""}`}>
            <span className="project-label">
              {p.large && <span className="pulse-dot" />} {p.label}
            </span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <span className="card-code">{p.code}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
