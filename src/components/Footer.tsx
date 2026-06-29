import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer shell">
      <span>© {new Date().getFullYear()} {profile.appName}</span>
      <span>LLM Interface — Monochrome. Premium.</span>
    </footer>
  );
}
