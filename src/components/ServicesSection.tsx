import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="section shell" id="services">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">agent actions</div>
          <h2 className="section-title">Efe ne yapabilir?</h2>
        </div>
        <p className="section-text">
          Web, AI ve dijital içerik tarafında fikirleri çalışan sisteme çeviren pratik hizmet
          alanları.
        </p>
      </div>

      <div className="grid services">
        {services.map((s) => (
          <div key={s.id} className="service-card reveal">
            <div className="service-index">{s.index}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
