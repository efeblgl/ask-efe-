import { profile } from "@/data/profile";

export default function ContactCTA() {
  return (
    <section className="section shell" id="contact">
      <div className="cta reveal">
        <h2>Bir fikri çalışan sisteme çevirelim.</h2>
        <p>
          Web sitesi, QR menü, AI destekli iş akışı, otomasyon, sosyal medya sistemi veya MVP
          fikrin varsa; bunu sade, hızlı ve kullanılabilir bir dijital çözüme dönüştürebiliriz.
        </p>
        <div className="cta-actions">
          <a className="btn primary" href={profile.links.contact}>Bana Ulaş</a>
          <a className="btn" href="#projects">Projeleri Gör</a>
          <a className="btn" href={profile.links.cv}>CV&apos;yi İndir</a>
        </div>
      </div>
    </section>
  );
}
