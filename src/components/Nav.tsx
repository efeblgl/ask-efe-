import { profile } from "@/data/profile";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#chat" className="brand">
          <span className="brand-mark">EF</span>
          <span>{profile.appName}</span>
        </a>
        <div className="nav-links">
          <a href="#chat">LLM</a>
          <a href="#proof">Proof</a>
          <a href="#cases">Cases</a>
          <a href="#stack">Stack</a>
          <a href="#demo">Demo</a>
          <a href="#contact">İletişim</a>
        </div>
        <a href={profile.links.cv} className="nav-cta">CV&apos;yi İndir</a>
      </div>
    </nav>
  );
}
