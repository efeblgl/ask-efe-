import { caseStudies } from "@/data/content";

export default function CaseStudiesSection() {
  return (
    <section className="section shell" id="cases">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">case studies</div>
          <h2 className="section-title">Problem, çözüm, sonuç.</h2>
        </div>
        <p className="section-text">
          Az ama net. Her biri gerçek bir ihtiyaca bağlı, çalışan bir yaklaşım.
        </p>
      </div>
      <div className="grid cases">
        {caseStudies.map((c) => (
          <article key={c.name} className="case-card reveal">
            <h3>{c.name}</h3>
            <div className="case-row"><span className="k">problem</span><span className="v">{c.problem}</span></div>
            <div className="case-row"><span className="k">çözüm</span><span className="v">{c.solution}</span></div>
            <div className="case-row"><span className="k">araçlar</span><span className="v">{c.tools}</span></div>
            <div className="case-row"><span className="k">sonuç</span><span className="v">{c.result}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
