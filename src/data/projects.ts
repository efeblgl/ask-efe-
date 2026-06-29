import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ask-efe",
    label: "primary product",
    name: "Ask Efe — AI Portfolio",
    description:
      "Klasik CV mantığını chatbot deneyimine dönüştüren, Efe'yi interaktif şekilde tanıtan kişisel LLM portföy uygulaması. Ziyaretçi doğrudan soru sorar, arayüz Efe'nin projelerini ve becerilerini ürün gibi sunar.",
    stack: ["LLM", "UX", "Frontend"],
    code: "LLM / UX / FRONTEND",
    large: true,
  },
  {
    id: "algel",
    label: "local startup",
    name: "AlGel — Yerel Teslimat Girişimi",
    description:
      "Yığılca’da yerel sipariş ve teslimat ihtiyacına odaklanan, küçük ilçelerde günlük ihtiyaçları dijital akışa taşıma fikriyle geliştirilen girişim projesi.",
    stack: ["Startup", "Local", "Delivery"],
    code: "LOCAL / STARTUP / WEB",
  },
  {
    id: "marmara",
    label: "local brand",
    name: "Marmara Lokantası",
    description:
      "Web sitesi, QR menü, sosyal medya dili, dijital görünürlük ve yerel işletme marka algısı üzerine yapılan bütünleşik dijital dönüşüm çalışması.",
    stack: ["Web", "QR", "Social"],
    code: "LOCAL / BRAND / QR",
  },
  {
    id: "qr-menu",
    label: "commerce ui",
    name: "QR Menü Sistemi",
    description:
      "Kafe ve restoranlar için mobil uyumlu, hızlı açılan ve işletmenin menüsünü daha modern gösteren dijital QR menü deneyimi.",
    stack: ["Web", "QR", "Mobile"],
    code: "WEB / QR / MOBILE",
  },
  {
    id: "yigilca-belediyesi",
    label: "public sector",
    name: "Yığılca Belediyesi Dijital Destek",
    description:
      "Kurumsal duyuru, sosyal medya metni, etkinlik içeriği, görsel dili ve dijital iletişim süreçlerinde belediye tarafına destek verilen kurumsal üretim alanı.",
    stack: ["Public", "Content", "Digital"],
    code: "PUBLIC / MEDIA / IT",
  },
  {
    id: "kent-donusum",
    label: "dashboard concept",
    name: "Kentsel Dönüşüm Yönetim Paneli",
    description:
      "Kentsel dönüşüm süreçlerinde başvuru, harita, fotoğraf, alan ve proje bilgilerinin daha düzenli yönetilebilmesi için planlanan panel ve arayüz geliştirme çalışması.",
    stack: ["Dashboard", "Map", "Admin"],
    code: "ADMIN / MAP / UI",
  },
  {
    id: "hali-saha",
    label: "booking system",
    name: "Halı Saha Rezervasyon Sistemi",
    description:
      "Kullanıcıların saat seçerek rezervasyon oluşturabileceği, yerel tesisler için hızlı ve sade çalışan web tabanlı rezervasyon sistemi denemesi.",
    stack: ["Booking", "Web", "Form"],
    code: "WEB / BOOKING / FORM",
  },
  {
    id: "hastane",
    label: "backend logic",
    name: "Hastane Randevu Sistemi",
    description:
      "C#, .NET Web API, SQL Server ve arayüz mantığı içeren; randevu, kullanıcı, veri ve işlem akışını anlamaya yönelik yazılım projesi.",
    stack: ["C#", "API", "SQL"],
    code: "C# / API / SQL",
  },
  {
    id: "n8n",
    label: "workflow",
    name: "n8n Otomasyonları",
    description:
      "Form, tablo, bildirim, raporlama ve içerik üretim süreçlerini daha hızlı yönetmek için geliştirilen AI destekli iş akışı ve otomasyon denemeleri.",
    stack: ["n8n", "AI", "Flow"],
    code: "N8N / AI / FLOW",
  },
  {
    id: "veresiye-stok",
    label: "business tool",
    name: "Veresiye / Stok / Cari Takip Uygulaması",
    description:
      "Küçük işletmeler için veresiye, stok, gelir-gider ve cari hesap takibini kolaylaştırmaya yönelik panel mantığında planlanan işletme yönetim uygulaması.",
    stack: ["Business", "Panel", "Data"],
    code: "PANEL / DATA / BUSINESS",
  },
  {
    id: "yigilca-kesfet",
    label: "mobile idea",
    name: "Yığılca Keşfet Mobil",
    description:
      "Yığılca için hava durumu, eczane, pazar, köy yolları, şikayet, başkana mesaj ve turizm noktalarını bir araya getirebilecek mobil uygulama fikri.",
    stack: ["Mobile", "City", "UX"],
    code: "MOBILE / CITY / UX",
  },
  {
    id: "belediye-ekran",
    label: "digital signage",
    name: "Belediye Dijital Ekran Sistemi",
    description:
      "Belediye duyuruları, etkinlikler, görseller ve bilgilendirme içerikleri için sahne/büyük ekran tarafında dijital yayın ve içerik yönetimi çalışmaları.",
    stack: ["Display", "Media", "Public"],
    code: "DISPLAY / MEDIA / PUBLIC",
  },
  {
    id: "savaslar-insaat",
    label: "corporate web",
    name: "Savaşlar İnşaat Kurumsal İçerik",
    description:
      "Yerel inşaat firması için daha kurumsal, güven veren ve dijital görünürlüğü artıran web/metin dili ve marka anlatımı çalışması.",
    stack: ["Corporate", "Web", "Copy"],
    code: "CORPORATE / WEB / COPY",
  },
  {
    id: "sen-tarim",
    label: "social growth",
    name: "Şen Tarım Sosyal Medya Çalışması",
    description:
      "Tarım ve yerel üretim tarafında sosyal medya görünürlüğünü artırmaya yönelik içerik fikri, paylaşım dili ve dijital büyüme odaklı çalışma.",
    stack: ["Social", "Local", "Content"],
    code: "SOCIAL / CONTENT / LOCAL",
  },
  {
    id: "emlak-panel",
    label: "real estate",
    name: "Emlak Web / İlan Paneli",
    description:
      "Emlak ofisleri için ilan yönetimi, admin paneli, görsel içerik ve kullanıcıların ilanları inceleyebileceği web arayüzü üzerine geliştirilen proje fikri.",
    stack: ["Real Estate", "Admin", "Web"],
    code: "REAL ESTATE / ADMIN / WEB",
  },
  {
    id: "ai-content-system",
    label: "ai media",
    name: "AI Destekli İçerik Üretim Sistemi",
    description:
      "Sosyal medya açıklamaları, reels kancaları, video metinleri, görsel promptları ve kurumsal duyuruları AI ile daha hızlı üretmeye yönelik çalışma sistemi.",
    stack: ["AI", "Content", "Media"],
    code: "AI / CONTENT / MEDIA",
  },
];