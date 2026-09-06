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
- Burgundy `#8B1A3A` as restrained accent — hero headline is monochrome; accent on CTA + specimen hairline only
- Floating glass header bar (centered, compresses on scroll)
- Desktop nav: Services / Process / About (`#about` → craft section)
- Mobile sheet: portaled to `body`, blur overlay, focus trap, ESC dismiss, `inert` when closed
- **No brand reveal splash** — deleted entirely
- **Hero headline:** “The finish / starts before / the paint.”
- Finish specimen: single cross-section object, one caption, absolute bottom-right on desktop (≥1024)
- Hero handoff: `#F5F5F7` → hairline `rgba(0,0,0,0.04)` → `#FFFFFF` trust section
- Scroll motion: max 4px layer gap + 2px slice translate (rAF-throttled CSS custom property, no React state)

## Headline Decision (Phase 3.5)

Compared at final typography:

| | A (rejected) | B (chosen) |
|---|---|---|
| Lines | Good painting / starts before / the paint. | **The finish / starts before / the paint.** |

**Chose B** — stronger FinishStack tie-in, craft section echo, editorial rhythm.  
**Rejected A** stored here only (not in `site.ts`): “Good painting / starts before / the paint.”

## Rejected Design Patterns

- Stock / AI / placeholder photography
- "Verified License" shields and badges
- Fabricated stats
- Generic card grids for services/process
- Paint splatters, cartoon brushes, drips
- Giant gradients and glow effects
- Glass morphism everywhere
- Hero meta chips
- Blocking brand reveal splash
- Three floating card layers with per-layer labels
- Burgundy accent word in headline
- Bottom gradient hero handoff
- Standard split-layout hero (text left + graphic right grid)

## Completed Sections

| Section | Status | Notes |
|---------|--------|-------|
| Phase 0 audit | ✅ | `docs/SRL_CODE_AUDIT.md` |
| Phase 1 foundation | ✅ | System fonts, Apple palette, spacing tokens |
| Header + mobile nav | ✅ **FINAL** | QA 360–1920 |
| Hero | ✅ **FINAL** | Phase 3 + 3.5 acceptance pass |
| Trust | ⏳ Pending | Phase 4 — 360px grid overflow known |
| Services | ⏳ Pending | Phase 5 |
| Craft/details | ⏳ Pending | Phase 6 |
| Process | ⏳ Pending | Phase 7 |
| Estimate | ⏳ Pending | Phase 8 |
| FAQ | ⏳ Pending | Phase 9 |
| Footer | ⏳ Pending | Phase 10 |

## Remaining Work

1. Trust as spec row + fix 360px overflow
2. Services product selector polish
3. Craft scroll story simplification
4. Process step focus interaction
5. Estimate as native sheet
6. FAQ native-feel accordion
7. Footer minimal pass
8. Full-site rhythm review
9. README cleanup

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

---

*Last updated: 2026-09-06 — Phase 3 FINAL*
