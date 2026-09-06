# SRL Painting Design State

> Internal documentation. Not linked from the public website.

## Design Goal

Premium Apple/iPhone-inspired painting contractor website — precision, restraint, native-feeling motion, excellent mobile. Not an Apple clone.

## Permanent Requirements

- No project photography (until owner provides assets)
- No "Verified License" language or verification badges
- No fabricated claims (counts, years, warranties, ratings, insurance unless verified)
- Mobile-first quality (390px is a primary design target)
- Section-by-section refinement — no full-site rewrites in one pass
- Restrained glass/material effects (nav + sheets only)

## Current Architecture

| Item | Location |
|------|----------|
| Framework | Next.js 16 App Router |
| Styling | Tailwind v4 + `src/app/globals.css` |
| Business data | `src/lib/site.ts` |
| Quote state | `src/components/quote-context.tsx` |
| Nav state | `src/components/nav-provider.tsx` |
| Estimate API | `src/app/api/estimate/route.ts` |
| SEO schema | `src/components/local-business-schema.tsx` |

## Accepted Design Decisions

- Single-page architecture
- All copy in `site.ts`
- Typography-first layout (no photos)
- Resend API with honest Instagram/copy fallback for estimates
- Phone + Instagram as primary contact paths
- Burgundy `#8B1A3A` as restrained accent
- Floating glass header bar (centered, compresses on scroll)
- Desktop nav: Services / Process / About (`#about` → craft section)
- Mobile sheet: full-screen blur overlay with focus trap + ESC dismiss

## Rejected Design Patterns

- Stock / AI / placeholder photography
- "Verified License" shields and badges
- Fabricated stats (500+ projects, 12+ years, 5.0 stars, warranties)
- Generic card grids for services/process
- Paint splatters, cartoon brushes, drips
- Giant gradients and glow effects
- Glass morphism everywhere
- Three+ Google font families
- `maximum-scale=1` viewport lock
- Fake form success without delivery

## Completed Sections

| Section | Status | Notes |
|---------|--------|-------|
| Phase 0 audit | ✅ | `docs/SRL_CODE_AUDIT.md` |
| Phase 1 foundation | ✅ | System fonts, Apple palette, spacing tokens, button refresh |
| Header + mobile nav | ✅ | Floating glass bar, scroll compression, premium sheet, focus trap |
| Hero | ⏳ Pending | Phase 3 — needs FinishStack |
| Trust | ⏳ Pending | Phase 4 |
| Services | ⏳ Pending | Phase 5 |
| Craft/details | ⏳ Pending | Phase 6 |
| Process | ⏳ Pending | Phase 7 |
| Estimate | ⏳ Pending | Phase 8 — needs sheet/modal |
| FAQ | ⏳ Pending | Phase 9 |
| Footer | ⏳ Pending | Phase 10 |

## Remaining Work

1. ~~Global design foundation (Apple palette, system fonts, spacing scale)~~ ✅ Phase 1
2. ~~Floating glass header with scroll compression~~ ✅ Phase 2
3. ~~Premium mobile menu sheet~~ ✅ Phase 2
4. Hero with CSS Prep/Prime/Finish layers
5. Trust as spec row (not cards)
6. Services product selector polish
7. Craft scroll story simplification
8. Process step focus interaction
9. Estimate as native sheet (desktop modal / mobile bottom sheet)
10. FAQ native-feel accordion
11. Footer minimal pass
12. Full-site rhythm review
13. README cleanup

## Known Issues

- README references deleted gallery component
- Brand reveal on every page load may feel unnecessary
- Nav link count (6) heavier than target → **resolved Phase 2** (3 desktop / 5 mobile)
- Quote wizard is page section, not overlay
- Editorial serif fonts conflict with Apple/iOS target → **resolved Phase 1** (system stack)
- Warm ivory palette (`#F4F1EA`) vs Apple gray (`#F5F5F7`) → **resolved Phase 1** (`#F5F5F7`)

## Business Facts Still Needed

- [ ] Confirm bonded status display is acceptable
- [ ] Confirm "Free estimates" wording
- [ ] Email address (omitted until single verified source)
- [ ] Business hours (not displayed)
- [ ] Owner/crew photography (future)
- [ ] Resend env vars for production email delivery

## Token Reference (Phase 1 target)

```
--bg:        #F5F5F7
--surface:   #FFFFFF
--text:      #1D1D1F
--text-secondary: #6E6E73
--accent:    #8B1A3A (SRL burgundy)
--ease-spring: cubic-bezier(0.32, 0.72, 0, 1)
```

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (px)

---

*Last updated: 2026-09-06 — Phase 2 complete, Phase 3 next*
