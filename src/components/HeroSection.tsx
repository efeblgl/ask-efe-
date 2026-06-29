import ChatTerminal from "./ChatTerminal";

const TITLE_WORDS = ["CV", "değil,", "Efe'yi", "anlatan", "interaktif", "bir", "LLM", "arayüzü."];

export default function HeroSection() {
  return (
    <section className="hero shell" id="chat">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="pulse-dot" />
              EFE-LLM / kişisel portföy modeli
            </div>
            <h1>
              {TITLE_WORDS.map((w, i) => (
                <span
                  key={i}
                  className="split-word"
                  style={{ animationDelay: `${i * 0.055 + 0.12}s`, marginRight: "0.28em" }}
                >
                  {w}
                </span>
              ))}
            </h1>
            <p className="hero-lead">
              Ask Efe; klasik portföy sayfasını yaşayan bir AI deneyimine çevirir. Ziyaretçi
              Efe&apos;nin projelerini, becerilerini, çalışma tarzını ve dijital üretim gücünü
              chatbot mantığıyla keşfeder.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#chat">Modelle Konuş</a>
              <a className="btn" href="#projects">Projeleri Tara</a>
              <a className="btn" href="#skills">Stack&apos;i Gör</a>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="llm-strip">
              <div className="llm-mini">
                <strong>RAG</strong>
                <span>Projeleri ve yetenekleri bağlama göre öne çıkaran portföy mantığı.</span>
              </div>
              <div className="llm-mini">
                <strong>Agent</strong>
                <span>Ziyaretçiyi doğru proje, hizmet ve iletişim alanına yönlendirir.</span>
              </div>
              <div className="llm-mini">
                <strong>UI</strong>
                <span>Premium, karanlık ve teknoloji odaklı monokrom deneyim.</span>
              </div>
            </div>
          </div>
        </div>

        <ChatTerminal />
      </div>
    </section>
  );
}
