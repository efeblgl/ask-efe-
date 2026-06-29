import { profile } from "@/data/profile";

export default function Manifesto() {
  return (
    <section className="section shell">
      <div className="manifesto reveal">
        <h2>Fikri çalışan dijital çözüme çevirmek.</h2>
        <div>
          <p>{profile.manifesto}</p>
          <p className="quote">{profile.highlightQuote}</p>
        </div>
      </div>
    </section>
  );
}
