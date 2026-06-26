# Voyage — Cinematic Space-Travel Landing

A single-page Next.js 14 (App Router) landing site with two full-height sections —
**Hero** and **Capabilities** — both using looping background videos with a custom
rAF-driven crossfade, a shared liquid-glass design system, and custom CSS-keyframe
entrance animations.

> **Stack constraints honored**
>
> - ✅ **Tailwind CSS** (utility CSS) — allowed
> - ❌ **No** Radix, Shadcn, Tailwind UI, or Framer Motion in `package.json`.
>   All entrance animations were rebuilt with vanilla CSS `@keyframes` + a tiny
>   `IntersectionObserver` (see `app/globals.css` and `components/BlurText.js`).
> - ❌ **No** `<video loop>` attribute — looping is implemented manually via the
>   `ended` event in `components/FadingVideo.js`, per spec.

## Project structure

```
space-voyage/
├── app/
│   ├── layout.js          Root layout — Google Fonts (Instrument Serif + Barlow)
│   ├── page.js            Renders <Hero /> + <Capabilities />
│   └── globals.css        Tailwind directives, liquid-glass utilities, keyframes
├── components/
│   ├── FadingVideo.js     Custom rAF crossfade + manual loop
│   ├── BlurText.js        Word-by-word IntersectionObserver blur-in
│   ├── Navbar.js          Fixed top nav with center pill
│   ├── Hero.js            Section 1 — full viewport, 120% background video
│   ├── Capabilities.js    Section 2 — full-bleed background video + 3 cards
│   └── icons.js           Inline SVGs (ArrowUpRight, Play, Clock, Globe, Material icons)
├── tailwind.config.js     Adds font-heading / font-body, default radius = 9999px
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md
```

## Run locally

Requires Node.js ≥ 18.17.

```bash
cd space-voyage
npm install
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
cd space-voyage
vercel            # follow prompts, accept defaults
vercel --prod     # promote to production
```

### Option B — Vercel Dashboard (GitHub import)

1. Push this folder to a new GitHub repo:
   ```bash
   cd space-voyage
   git init
   git add .
   git commit -m "initial: space voyage landing"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to <https://vercel.com/new>, **Import Git Repository**, pick this repo.
3. Vercel auto-detects Next.js — no env vars or build commands needed. Click
   **Deploy**.

That's it. The two background MP4s are referenced by absolute CloudFront URLs,
so the bundle stays small (~no asset upload required).

## Implementation notes

### `FadingVideo` (custom JS crossfade — no CSS transitions)

- `FADE_MS = 500`, `FADE_OUT_LEAD = 0.55s`
- `fadeTo(target, duration)` uses `requestAnimationFrame`, reads current opacity
  from `video.style.opacity` so consecutive fades pick up smoothly. Each call
  cancels the previous rAF.
- `loadeddata` → set opacity 0, `play()`, `fadeTo(1)`.
- `timeupdate` → when `duration - currentTime ≤ 0.55s`, flip a ref and
  `fadeTo(0)`.
- `ended` → set opacity 0, wait 100ms, reset `currentTime = 0`, `play()`, fade in.
- Cleanup on unmount: cancel rAF, remove listeners.

### `BlurText` (no Framer Motion)

- Splits the text by spaces, wraps each word in a `<span>` with class
  `blur-word`.
- `IntersectionObserver` flips `in-view` on the wrapper when ≥ 10 % visible.
- Each word gets `animationDelay: ${i * 100}ms` and runs the 3-stage
  `@keyframes wordBlur` (blur 10 → 5 → 0, opacity 0 → 0.5 → 1, y 50 → -5 → 0)
  over 0.7 s ease-out.

### Liquid Glass utilities

Two variants in `app/globals.css` exactly per spec — `.liquid-glass` (subtle,
4 px blur) and `.liquid-glass-strong` (50 px blur, heavier inner shadow). Each
uses a `::before` pseudo-element with a mask-composite trick to render the
1.4 px gradient stroke.

### Tailwind config

- Fonts: `font-heading` → Instrument Serif, `font-body` → Barlow.
- Default `borderRadius` overridden to `9999px` so bare `rounded` = pill.

## What you'd want to wire up next

- Replace placeholder `href="#"` on nav and CTAs with real routes.
- The two video URLs are CloudFront — drop your own MP4s into `public/` and
  swap the `HERO_VIDEO` / `CAPS_VIDEO` constants for fully self-hosted assets.
- Add a viewport meta tweak for very narrow phones if needed (everything is
  tested at ≥ 360 px).
