# mypage

Личный сайт-резюме — Алексей Масюта, бизнес-аналитик.

**Стек:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · next-themes · Aceternity UI.

## Локально

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production-сборка
```

## Деплой

Push в `main` → автодеплой на Vercel (проект подключён через GitHub).

## Структура

- `app/` — Next.js App Router, layout и страницы
- `components/ui/` — Aceternity-компоненты (FloatingNav, Spotlight, BentoGrid, Timeline и т.д.)
- `components/sections/` — секции страницы (Hero, About, Experience, Skills, Education, Contact)
- `components/theme-provider.tsx`, `theme-toggle.tsx` — тёмная/светлая тема
- `lib/utils.ts` — `cn()` helper

## Замена аватара

Положи фото в `public/avatar.jpg` и поменяй путь в `components/sections/hero.tsx` с `/avatar.svg` на `/avatar.jpg` (и убери `unoptimized`).
