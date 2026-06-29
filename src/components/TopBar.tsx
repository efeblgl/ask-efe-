import { profile } from "@/data/profile";

export default function TopBar() {
  return (
    <div className="app-topbar">
      <a href="#console" className="tb-brand">
        <span className="brand-mark">EF</span> {profile.appName}
      </a>
      <a href="#console">LLM</a>
      <a href="#projects">Projeler</a>
      <a href="#stack">Model Stack</a>
      <a href="#services">Hizmetler</a>
      <a href="#contact">İletişim</a>
      <a href={profile.links.cv} className="tb-cta">CV&apos;yi İndir</a>
    </div>
  );
}
