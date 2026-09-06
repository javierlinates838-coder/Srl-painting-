# SRL Painting — Code Audit

**Date:** 2026-09-06  
**Auditor:** Senior frontend pass (Phase 0)  
**Branch at audit:** `main` @ `fe145fb`

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.2.6 (App Router) |
| UI | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + `src/app/globals.css` design system |
| Animation | CSS transitions only (no Framer Motion / GSAP) |
| Fonts | Instrument Serif + DM Sans via `next/font/google` |
| Deployment | Vercel |
| Email API | Resend via `/api/estimate` (optional env vars) |

## App structure

Single-page marketing site.

```
src/app/page.tsx          → orchestrates all sections
src/app/layout.tsx        → root layout, metadata, fonts
src/app/globals.css       → full design system (~890 lines)
src/lib/site.ts           → all business copy, nav, services, reviews, FAQs
src/components/*          → one component per section
src/app/api/estimate/     → POST handler (Resend or 503 fallback)
```

**Routes:** `/` only (plus `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, API).

## Page section order (current)

1. Hero (`hero.tsx`)
2. Trust facts (`trust-section.tsx`)
3. Painting selector (`painting-selector.tsx`)
4. Services index (`services-section.tsx`)
5. Craft/details (`details-section.tsx`)
6. Color explorer (`color-explorer.tsx`)
7. Process timeline (`process-section.tsx`)
8. Service areas (`service-areas-section.tsx`)
9. Reviews carousel (`reviews-section.tsx`)
10. Project estimator (`project-estimator.tsx`)
11. Quote wizard (`quote-section.tsx`)
12. FAQ (`faq-section.tsx`)

**Global chrome:** Header, Footer, StickyCta, ScrollProgress, BrandReveal, BackToTop.

## Business data source

All factual content lives in `src/lib/site.ts`.

Verified fields in use:
- Phone: `(661) 595-7530`
- CSLB: `#1108313`, C-33
- Bonded: stated in FAQs/trust (owner-confirmed via prior Instagram sync)
- Instagram: `@srl_painting`
- Service areas: Bakersfield, Shafter, Tehachapi, Lake Isabella, Los Angeles
- Reviews: 4 testimonials (Michael Moreno sourced Google via owner)

**Email:** intentionally omitted (conflicting sources in repo history).

## Fabricated claims scan

Searched repo for: `verified`, `500+`, `warranty`, `guarantee`, `Fully Insured`, `Family Owned`, `since 2012`, `5.0 rating`, etc.

| Finding | Location | Action |
|---------|----------|--------|
| No fake stats in `src/` | — | ✓ Clean |
| "Verified sender" in README | `README.md` (Resend docs) | OK — technical, not marketing |
| "Licensed. Local." in trust H2 | `trust-section.tsx` | OK — factual, not "Verified License" badge |
| License in FAQ/schema | factual CSLB references | OK |
| Google source on one review | `reviews` in `site.ts` | OK — owner-provided |

**No "Verified License" UI badges found.**

## Photography

- Live site uses **zero** `/projects/` images.
- Only `next/image` usage: `brand-logo.tsx` (logo asset).
- `public/projects/` still exists for future use; not referenced in components.

## Form / estimate flow

1. Client posts to `/api/estimate`.
2. If `RESEND_API_KEY`, `ESTIMATE_TO_EMAIL`, `ESTIMATE_FROM_EMAIL` set → email sent, success UI.
3. If 503/502 → clipboard copy + Instagram DM fallback (honest "one more step" UI).

**Not a fake success** when backend missing.

## SEO

- `layout.tsx`: metadata, OG (logo only), viewport (no `maximum-scale=1` ✓)
- `local-business-schema.tsx`: HousePainter + FAQPage JSON-LD
- `sitemap.ts`, `robots.ts`, `manifest.ts`

## Accessibility (initial)

| Item | Status |
|------|--------|
| Skip link | ✓ |
| Semantic landmarks | ✓ `main`, `header`, `footer`, sections |
| Focus-visible | ✓ brand outline |
| Mobile menu ESC | ✓ |
| Body scroll lock | ✓ mobile menu |
| `prefers-reduced-motion` | ✓ in globals.css |
| Dialog on mobile nav | Partial — no focus trap |
| FAQ | Custom accordion, not native `<details>` |

## Performance (initial)

| Item | Notes |
|------|-------|
| Dependencies | Minimal (Next + React only) |
| Client components | Most interactive sections are `"use client"` |
| Google fonts | 2 families loaded — candidate to remove (Phase 1) |
| Brand reveal | Fixed overlay ~500ms on every load — review necessity |
| Scroll progress | Lightweight |
| No animation libraries | ✓ |

## Code quality issues

1. **Design system split:** Tailwind v4 + large custom CSS file — workable but needs token discipline.
2. **Editorial serif + warm ivory palette** — reads more "design agency" than "Apple precision" (target direction).
3. **README outdated** — references `before-after-gallery.tsx` (deleted).
4. **Nav has 6 items** — user target is slimmer header (Services, Process, About + CTA).
5. **Quote is inline section** — not sheet/modal (Phase 8 target).
6. **Hero lacks Prep/Prime/Finish material object** — typography only.
7. **Trust section uses 4-cell grid** — acceptable but could be spec-row style.
8. **Many sections** — possible rhythm fatigue; review after per-section passes.
9. **`font-display` used widely** — ties UI to serif editorial voice.

## Dead / unused code

No orphaned components found in `src/components/` (previous photo components deleted).

## Hardcoded information audit

All marketing copy centralized in `site.ts` ✓  
No hardcoded phone outside `site.ts` ✓

## Recommended phase order

1. **Phase 1** — Global tokens, system fonts, spacing, button system ← *current*
2. **Phase 2** — Header + mobile nav (floating glass bar)
3. **Phase 3** — Hero + FinishStack material
4. **Phase 4** — Trust spec row
5. **Phase 5** — Services selector
6. **Phase 6** — Craft story
7. **Phase 7** — Process
8. **Phase 8** — Estimate sheet/modal
9. **Phase 9** — FAQ
10. **Phase 10** — Footer
11. Final full-site rhythm review

---

## Build commands

```bash
npm run lint
npm run build
```

No separate `typecheck` script; TypeScript runs during `next build`.
