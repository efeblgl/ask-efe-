import { verifiedLinks } from "@/data/content";

export default function LinksSection() {
  return (
    <section className="section shell" id="links">
      <div className="section-head reveal">
        <div>
          <div className="section-kicker">verified links</div>
          <h2 className="section-title">Bağlantılar.</h2>
        </div>
      </div>
      <div className="links-row reveal">
        {verifiedLinks.map((l) => (
          <a key={l.label} href={l.href} className="link-chip">
            <span className="lk">{l.label}</span> {l.value}
          </a>
        ))}
      </div>
    </section>
  );
}
