import { stackLayers } from "@/data/content";

export default function StackSection() {
  return (
    <section className="section shell" id="stack">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">model stack</div>
          <h2 className="section-title">Liste değil, çözüm katmanları.</h2>
        </div>
        <p className="section-text">
          Teknolojiler tek tek değil; her biri bir model bileşeni gibi, bir amaca hizmet ediyor.
        </p>
      </div>
      <div className="grid stack-grid">
        {stackLayers.map((l, i) => (
          <div key={l.title} className="stack-layer reveal">
            <span className="idx">0{i + 1}</span>
            <h3>{l.title}</h3>
            <div className="stack-tech">{l.tech}</div>
            <div className="stack-purpose">{l.purpose}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
