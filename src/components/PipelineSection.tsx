import { pipeline } from "@/data/content";

export default function PipelineSection() {
  return (
    <section className="section shell" id="os">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">efe operating system</div>
          <h2 className="section-title">Fikirden çalışan sisteme giden akış.</h2>
        </div>
        <p className="section-text">
          Efe&apos;nin çalışma yöntemi bir AI pipeline gibi: girdiyi alır, işler, çalışan bir
          çıktıya çevirir ve gerçek kullanımdan öğrenir.
        </p>
      </div>
      <div className="grid pipeline">
        {pipeline.map((p) => (
          <div key={p.step} className="pipe-card reveal">
            <div className="pipe-step">{p.step}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
