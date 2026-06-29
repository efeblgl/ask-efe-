import Icon from "./Icon";
import { sidebarMain, sidebarSystem } from "@/data/console";
import { profile } from "@/data/profile";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <span className="brand-mark">EF</span>
        <span>{profile.appName}</span>
      </div>
      <div className="sb-search">
        <Icon name="search" className="ico" />
        <span>Ara...</span>
        <span className="kbd">⌘K</span>
      </div>

      {sidebarMain.map((item, i) => (
        <a key={item.label} href={item.href} className={`sb-item ${i === 0 ? "active" : ""}`}>
          <Icon name={item.icon} className="ico" />
          {item.label}
        </a>
      ))}

      <div className="sb-section">Sistem</div>
      {sidebarSystem.map((item) => (
        <a key={item.label} href={item.href} className="sb-item">
          <Icon name={item.icon} className="ico" />
          {item.label}
          {item.badge && <span className="sb-badge">{item.badge}</span>}
        </a>
      ))}

      <a href="#contact" className="sb-user">
        <span className="av">EF</span>
        <span>
          <span className="nm" style={{ display: "block" }}>Efe Baloğlu</span>
          <span className="rl">AI Developer</span>
        </span>
        <Icon name="chevron" className="ico" />
      </a>
    </aside>
  );
}
