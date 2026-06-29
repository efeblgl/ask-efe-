# Ask Efe — LLM Portfolio Interface

CV değil, Efe Baloğlu'nu anlatan interaktif bir LLM arayüzü. Monokrom, premium,
futuristik tasarım + gerçek zamanlı (streaming) OpenAI sohbeti.

## Teknolojiler
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · OpenAI API (streaming)

## Çalıştırma
```bash
npm install
cp .env.local.example .env.local   # içine kendi OpenAI key'ini yaz
npm run dev                        # http://localhost:3000
```

Windows CMD'de kopyalama: `copy .env.local.example .env.local`

## OpenAI API kurulumu
1. platform.openai.com → API keys → yeni key oluştur.
2. `.env.local` içine:  `OPENAI_API_KEY=sk-...`
3. Key SADECE sunucuda (`src/app/api/chat/route.ts`) kullanılır, tarayıcıya gitmez.
   Koda/git'e koyma — `.env.local` zaten `.gitignore`'da.
Vercel deploy: Project Settings → Environment Variables → `OPENAI_API_KEY`.

### Hibrit davranış
Normal sorular GPT-4o-mini'ye streaming gider. Key yoksa veya API çökerse
otomatik olarak `src/lib/efebot.ts` içindeki offline mock yanıtlara düşer (bot susmaz).

## Tasarım
Siyah/grafit monokrom, ince çizgiler, grid, restrained animasyonlar. Renkli gradient,
neon, çocuksu öğe yok. `src/app/globals.css` tüm tasarım sistemini içerir.

## Klasör yapısı
```
src/
├── app/
│   ├── api/chat/route.ts   OpenAI streaming endpoint (key burada, sunucuda)
│   ├── layout.tsx · page.tsx · globals.css (monokrom tasarım sistemi)
├── components/
│   ├── Loader · Nav · HeroSection · ChatTerminal (gerçek chat + model core)
│   ├── ProjectsSection · SkillsSection · ServicesSection · Manifesto · ContactCTA · Footer
│   └── RevealInit (scroll reveal observer)
├── data/        profile · projects · skills · services · suggestedQuestions · statusMessages
├── lib/
│   ├── efebot.ts        offline fallback
│   ├── chat.ts          /api/chat streaming client
│   └── systemPrompt.ts  EfeBot kişiliği + bilgi tabanı
└── types/
```

## İçerik güncelleme
- Efe bilgisi/kişilik → `src/lib/systemPrompt.ts`
- Projeler/yetenekler/hizmetler → `src/data/*.ts`
- Linkler (GitHub, LinkedIn, mail, CV) → `src/data/profile.ts` → `links`

## Eklenecek asset (public/)
- `cv.pdf` → "CV'yi İndir" butonu hedefi
