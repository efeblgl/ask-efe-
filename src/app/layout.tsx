import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ask Efe — LLM Portfolio Interface",
  description:
    "CV değil, Efe Baloğlu'nu anlatan interaktif bir LLM arayüzü. Projeler, yetenekler ve dijital üretim gücü gerçek zamanlı sohbetle keşfedilir.",
  openGraph: {
    title: "Ask Efe — LLM Portfolio Interface",
    description: "Monokrom, premium, gerçek zamanlı AI portföy deneyimi.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
