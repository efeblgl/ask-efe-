// Yeni bölümlerin içerik verisi (tek yerden düzenlenebilir)

export const memoryItems: string[] = [
  "C# / .NET / SQL",
  "n8n automation",
  "local business digitization",
  "social media production",
  "public institution digital support",
  "AI assisted product building",
  "QR menu systems",
  "web interfaces",
  "MVP prototypes",
];

export interface ProofCard {
  tag: string;
  title: string;
  text: string;
}
export const proofCards: ProofCard[] = [
  {
    tag: "public sector",
    title: "Kurumsal Dijital Destek",
    text: "Belediye tarafında IT/bilgi işlem, dijital içerik, sosyal medya süreçleri, web/duyuru akışları ve kurumsal dijital iletişim desteği.",
  },
  {
    tag: "local startup",
    title: "AlGel — Yerel Girişim",
    text: "Yığılca'da yerel sipariş ve teslimat ihtiyacına dokunan, günlük hayata bağlı pratik bir girişim denemesi.",
  },
  {
    tag: "business digitization",
    title: "Marmara Lokantası",
    text: "Yerel bir restoran için web, QR menü, sosyal medya içerikleri ve dijital görünürlük çalışmaları.",
  },
  {
    tag: "software",
    title: "Yazılım Projeleri",
    text: "C# / .NET / SQL tabanlı randevu sistemleri, paneller, dashboard mantığı ve otomasyon denemeleri.",
  },
];

export interface PipelineStep {
  step: string;
  title: string;
  text: string;
}
export const pipeline: PipelineStep[] = [
  { step: "input", title: "Input", text: "Fikirler, işletme ihtiyaçları, kurum problemleri, sosyal medya hedefleri, yerel iş akışı sorunları." },
  { step: "processing", title: "Processing", text: "AI araçları, promptlar, yazılım mantığı, arayüz tasarımı, otomasyon, içerik stratejisi." },
  { step: "output", title: "Output", text: "Web siteleri, QR sistemleri, dashboardlar, içerik sistemleri, MVP demoları, otomasyon akışları." },
  { step: "feedback", title: "Feedback Loop", text: "Gerçek kullanıcılar, yerel işletmeler, kurumlar, revizyonlar ve pratik iyileştirmeler." },
];

export interface CaseStudy {
  name: string;
  problem: string;
  solution: string;
  tools: string;
  result: string;
}
export const caseStudies: CaseStudy[] = [
  {
    name: "AlGel",
    problem: "Küçük bir ilçede yerel sipariş ve teslimat ihtiyacı.",
    solution: "Dijital marka/arayüz yönü ve pratik bir sipariş akışı.",
    tools: "Web, tasarım, yerel işletme mantığı, sosyal medya düşüncesi.",
    result: "Günlük ihtiyaçlara bağlı gerçek bir yerel girişim örneği.",
  },
  {
    name: "Marmara Lokantası",
    problem: "Yerel restoranın daha güçlü bir dijital varlığa ihtiyacı vardı.",
    solution: "Web sitesi, QR menü, sosyal medya içerik dili ve dijital görünürlük.",
    tools: "Web tasarım, QR menü, içerik üretimi, AI destekli metin/tasarım.",
    result: "Yerel işletme için daha net ve modern bir dijital kimlik.",
  },
  {
    name: "Ask Efe",
    problem: "Klasik CV sayfası Efe'nin AI, yazılım, medya ve otomasyon tarafını tam anlatamıyor.",
    solution: "İnteraktif, LLM tarzı bir portföy arayüzü.",
    tools: "Next.js, React, TypeScript, OpenAI API, AI destekli tasarım.",
    result: "Daha akılda kalıcı ve modern bir kişisel portföy deneyimi.",
  },
  {
    name: "Yazılım / Otomasyon",
    problem: "Manuel iş akışları, veri takibi, randevu mantığı ve süreçler için basit dijital sistem ihtiyacı.",
    solution: "Paneller, dashboardlar, C# / .NET / SQL denemeleri, n8n akışları.",
    tools: "C#, .NET, SQL, n8n, JavaScript, AI araçları.",
    result: "Gerçek iş akışlarına bağlı pratik teknik öğrenme.",
  },
];

export interface DemoOption {
  q: string;
  a: string;
}
export const demoOptions: DemoOption[] = [
  {
    q: "Restoranım var, dijitalleşmek istiyorum.",
    a: "Önerilen sistem: QR menü + landing page + Google işletme düzeni + haftalık sosyal medya içerik planı + basit talep formu.",
  },
  {
    q: "Kurum için duyuru ve içerik sistemi lazım.",
    a: "Önerilen sistem: kurumsal duyuru şablonları + sosyal medya içerik takvimi + görsel/metin üretim akışı + basit onay süreci.",
  },
  {
    q: "Bir fikrim var, MVP yapmak istiyorum.",
    a: "Önerilen sistem: tek sayfalık landing + temel kullanıcı akışı + admin panel iskeleti + hızlı çalışan demo + geri bildirim döngüsü.",
  },
  {
    q: "Sosyal medya ve web görünürlüğümü artırmak istiyorum.",
    a: "Önerilen sistem: modern web arayüzü + Google işletme + haftalık içerik planı + reels kancaları + AI destekli metin üretimi.",
  },
];

export const beforeItems: string[] = [
  "Dağınık dijital görünüm",
  "Manuel süreçler",
  "Plansız sosyal medya",
  "Eski web algısı",
  "Belirsiz kullanıcı deneyimi",
];
export const afterItems: string[] = [
  "Modern web arayüzü",
  "QR ve dijital sistemler",
  "AI destekli içerik üretimi",
  "Daha net marka dili",
  "Kullanışlı dashboard / panel mantığı",
];

export interface TimelineEntry {
  year: string;
  text: string;
}
export const timeline: TimelineEntry[] = [
  { year: "2024", text: "Yazılım temeli, C# / .NET / SQL öğrenimi, temel projeler." },
  { year: "2025", text: "Yerel işletme dijitalleşmesi, QR menü, web arayüzleri, sosyal medya üretimi, AlGel gibi gerçek işlere dokunan projeler." },
  { year: "2026", text: "AI destekli portföy, n8n otomasyonları, kurumsal dijital destek, LLM interface denemeleri, daha ciddi MVP ve dashboard sistemleri." },
];

export interface StackLayer {
  title: string;
  tech: string;
  purpose: string;
}
export const stackLayers: StackLayer[] = [
  { title: "Web Interface Layer", tech: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS", purpose: "Modern, mobil uyumlu, premium arayüzler." },
  { title: "Backend Logic Layer", tech: "C#, .NET Web API, SQL Server, Entity Framework", purpose: "Veri, iş mantığı, randevu sistemleri, paneller." },
  { title: "AI Layer", tech: "ChatGPT, Claude, Prompt Engineering, n8n, Workflow Automation", purpose: "Daha hızlı üretim, akıllı iş akışları, AI destekli sistemler." },
  { title: "Media Layer", tech: "Canva, CapCut, Premiere Pro, Social Content, Visual Prompting", purpose: "Sosyal medya içeriği, görsel iletişim, kampanya dili." },
];

export interface WhyCard {
  title: string;
  text: string;
}
export const whyCards: WhyCard[] = [
  { title: "Yerel işletmemi dijitale taşımak istiyorum.", text: "Web, QR menü, sosyal medya ve Google görünürlük." },
  { title: "Bir fikrim var, demo yapmak istiyorum.", text: "MVP, landing page, admin panel, prototip." },
  { title: "AI ile işimi hızlandırmak istiyorum.", text: "Prompt, n8n, otomasyon, raporlama." },
  { title: "Kurumsal sosyal medya dili istiyorum.", text: "Duyuru, açıklama, etkinlik metni, reels fikri." },
  { title: "Daha modern bir web arayüzü istiyorum.", text: "Premium, mobil uyumlu, sade ve ciddi arayüz." },
];

export interface LinkChip {
  label: string;
  value: string;
  href: string;
}
export const verifiedLinks: LinkChip[] = [
  { label: "Website", value: "efebaloglu.com", href: "#" },
  { label: "LinkedIn", value: "Add LinkedIn URL here", href: "#" },
  { label: "GitHub", value: "Add GitHub URL here", href: "#" },
  { label: "AlGel", value: "Add AlGel URL here", href: "#" },
  { label: "Marmara", value: "Add website URL here", href: "#" },
  { label: "Email", value: "your-email@example.com", href: "mailto:your-email@example.com" },
];
