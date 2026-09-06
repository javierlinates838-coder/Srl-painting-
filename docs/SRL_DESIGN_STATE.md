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
| Hero material specimen | `src/components/finish-stack.tsx` |

## Accepted Design Decisions

- Single-page architecture
- All copy in `site.ts`
- Typography-first layout (no photos)
- Resend API with honest Instagram/copy fallback for estimates
- Phone + Instagram as primary contact paths
- Burgundy `#8B1A3A` as restrained accent — hero headline is monochrome; accent only on CTA + finish specimen hairline
- Floating glass header bar (centered, compresses on scroll)
- Desktop nav: Services / Process / About (`#about` → craft section)
- Mobile sheet: portaled to `body`, blur overlay, focus trap, ESC dismiss, `inert` when closed
- **No brand reveal splash** — hero renders immediately (deleted `brand-reveal.tsx`)
- **Hero headline B chosen:** “The finish / starts before / the paint.” (see Headline Decision below)
- Finish specimen: single cross-section object, one caption, not three cards
- Hero handoff: `#F5F5F7` hero → hairline border → `#FFFFFF` trust section (no gradient fog)

## Headline Decision (Phase 3.5)

Compared at final typography/spacing:

| | A | B |
|---|---|---|
| Lines | Good painting / starts before / the paint. | **The finish / starts before / the paint.** |
| Rhythm | Softer opener, slightly generic qualifier | Stronger three-beat cadence |
| FinishStack tie | Weak | **Direct** — “finish” names the top material layer |
| Craft section tie | Moderate | **Strong** — echoes “What you see is the finish” |
| Mobile breaks | “Good painting” wraps as one unit | “The finish” shorter, cleaner first line |
| Premium feel | Approachable contractor | **Product/editorial** |

**Chose B** — works better as design composition and ties headline to FinishStack + craft narrative. A preserved as `heroHeadlineAlt` in `site.ts`.

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
- Hero meta chips (C-33, areas, free estimates in hero)
- Hero fade-up reveal choreography
- Blocking brand reveal splash screen
- Three floating card layers with per-layer labels
- Burgundy accent word in headline
- Bottom gradient hero handoff

## Completed Sections

| Section | Status | Notes |
|---------|--------|-------|
| Phase 0 audit | ✅ | `docs/SRL_CODE_AUDIT.md` |
| Phase 1 foundation | ✅ | System fonts, Apple palette, spacing tokens, button refresh |
| Header + mobile nav | ✅ **FINAL** | QA pass at 360–1920 |
| Hero | ✅ | Phase 3 + 3.5 polish — pending owner review |
| Trust | ⏳ Pending | Phase 4 — 360px grid overflow known |
| Services | ⏳ Pending | Phase 5 |
| Craft/details | ⏳ Pending | Phase 6 |
| Process | ⏳ Pending | Phase 7 |
| Estimate | ⏳ Pending | Phase 8 |
| FAQ | ⏳ Pending | Phase 9 |
| Footer | ⏳ Pending | Phase 10 |

## Remaining Work

1. ~~Global design foundation~~ ✅
2. ~~Floating glass header~~ ✅ FINAL
3. ~~Premium mobile menu sheet~~ ✅ FINAL
4. ~~Hero polish~~ ✅ Phase 3.5 (awaiting review)
5. Trust as spec row (not cards) + fix 360px overflow
6. Services product selector polish
7. Craft scroll story simplification
8. Process step focus interaction
9. Estimate as native sheet
10. FAQ native-feel accordion
11. Footer minimal pass
12. Full-site rhythm review
13. README cleanup

## Known Issues

- README references deleted gallery component
- Trust grid causes minor horizontal overflow at exactly 360px (Phase 4)
- Quote wizard is page section, not overlay

## Business Facts Still Needed

- [ ] Confirm bonded status display is acceptable
- [ ] Confirm "Free estimates" wording
- [ ] Email address (omitted until single verified source)
- [ ] Business hours (not displayed)
- [ ] Owner/crew photography (future)
- [ ] Resend env vars for production email delivery

## Token Reference

```
--bg:        #F5F5F7
--surface:   #FFFFFF
--text:      #1D1D1F
--text-secondary: #6E6E73
--accent:    #8B1A3A (SRL burgundy)
--ease-spring: cubic-bezier(0.32, 0.72, 0, 1)
```

---

*Last updated: 2026-09-06 — Phase 3.5 hero polish complete (awaiting review)*
