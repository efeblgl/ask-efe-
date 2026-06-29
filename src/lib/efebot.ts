/**
 * Offline fallback motoru — API kapalı/çökmüşken devreye girer.
 * Gerçek zamanlı cevaplar /api/chat (OpenAI) üzerinden gelir; burası yedek.
 */

const normalize = (s: string) =>
  s.toLocaleLowerCase("tr-TR").replace(/[.,!?;:]/g, " ").replace(/\s+/g, " ").trim();

interface Intent {
  keywords: string[];
  reply: string;
}

const intents: Intent[] = [
  {
    keywords: ["neden işe", "neden efe", "farkın ne", "hire", "neden seni", "neden onunla"],
    reply:
      "Çünkü Efe sadece kod yazıp çıkan biri değil. İşin tasarımını, sosyal medya tarafını, AI ile nasıl hızlanacağını ve son kullanıcıya nasıl görüneceğini birlikte düşünür. Paketin içinde yazılım var, fikir var, pratik çözüm var.",
  },
  {
    keywords: ["yetenek", "teknoloji", "skill", "neler biliyor", "stack", "ne biliyor"],
    reply:
      "Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind. Backend: C#, .NET Web API, SQL Server, Entity Framework. AI & Otomasyon: ChatGPT, Claude, n8n, prompt engineering. Dijital Medya: Canva, CapCut, Premiere, sosyal medya içerik üretimi.",
  },
  {
    keywords: ["proje", "portfolio", "portföy", "ne yaptı", "işler"],
    reply:
      "Ask Efe AI portföy, QR menü sistemleri, Marmara Lokantası dijital dönüşüm, Hastane Randevu Sistemi (C#/.NET/SQL), n8n otomasyon denemeleri ve Codexa marka vizyonu. Hepsinde ortak nokta: fikri çalışan bir şeye çevirmek.",
  },
  {
    keywords: ["işletme", "dükkan", "restoran", "kafe", "yardımcı", "müşteri", "yardım eder"],
    reply:
      "İşletmenin internette 'var gibi' değil gerçekten var görünmesini sağlar. Web sitesi, QR menü, sosyal medya içerikleri, Google görünürlüğü, AI destekli metinler ve basit otomasyonlarla dükkânı dijitalde toparlar.",
  },
  {
    keywords: ["kim", "hakkında", "sen kimsin", "efe nedir", "tanıt", "naber", "merhaba", "selam"],
    reply:
      "Efe Baloğlu; yazılım, AI, otomasyon ve dijital içerik üretimini birleştiren genç bir teknoloji üreticisi. 'Bunu dijitale nasıl çeviririm?' diye düşünen ve sonra oturup gerçekten yapan biri.",
  },
  {
    keywords: ["junior", "senior", "seviye", "deneyim"],
    reply:
      "Efe gelişim döneminde ama sıradan junior kalıbına sığmıyor. Sadece ders/proje değil; gerçek işletme, sosyal medya, AI ve dijital çözüm tarafında pratik üretim yapıyor. Gelişen ama boş olmayan bir profil.",
  },
  {
    keywords: ["cv", "özgeçmiş", "özet", "resume"],
    reply:
      "Efe Baloğlu; yazılım, AI araçları, sosyal medya içerik üretimi ve dijital çözümler tarafında kendini geliştiren bir teknoloji üreticisi. Web uygulamaları, QR sistemleri, admin panelleri, belediye dijital medya işleri ve otomasyonlarla ilgileniyor.",
  },
];

const DEFAULT_REPLY =
  "Şu an çevrimdışı yedek moddayım. Efe hakkında şunları sorabilirsin: kimdir, neler yapar, hangi teknolojileri bilir, projeleri ne, işletmene nasıl yardım eder ya da neden onunla çalışmalısın.";

export function getMockReply(input: string): string {
  const msg = normalize(input);
  for (const intent of intents) {
    if (intent.keywords.some((k) => msg.includes(k))) return intent.reply;
  }
  return DEFAULT_REPLY;
}
