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
    id: "qr-menu",
    label: "commerce ui",
    name: "QR Menü Sistemi",
    description: "Kafe ve restoranlar için mobil uyumlu dijital menü deneyimi.",
    stack: ["Web", "QR"],
    code: "WEB / QR",
  },
  {
    id: "marmara",
    label: "local brand",
    name: "Marmara Lokantası",
    description: "Web sitesi, QR menü, sosyal medya ve dijital görünürlük çalışmaları.",
    stack: ["Local", "Brand"],
    code: "LOCAL / BRAND",
  },
  {
    id: "hastane",
    label: "backend logic",
    name: "Hastane Randevu",
    description: "C#, .NET Web API, SQL Server ve arayüz mantığı içeren randevu sistemi.",
    stack: ["C#", "API", "SQL"],
    code: "C# / API / SQL",
  },
  {
    id: "n8n",
    label: "workflow",
    name: "n8n Otomasyonları",
    description: "Form, tablo, bildirim ve raporlama süreçleri için iş akışı denemeleri.",
    stack: ["n8n", "Flow"],
    code: "N8N / FLOW",
  },
];
