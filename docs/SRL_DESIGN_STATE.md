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
| Business credentials | `src/components/trust-section.tsx` + `businessCredentials` in `site.ts` |
| Services selector | `src/components/services-section.tsx` + `service-surface.tsx` + `services` in `site.ts` |

## Accepted Design Decisions

- Single-page architecture
- All copy in `site.ts`
- Typography-first layout (no photos)
- Resend API with honest Instagram/copy fallback for estimates
- Phone + Instagram as primary contact paths
- Burgundy `#8B1A3A` as restrained accent
- Floating glass header bar (centered, compresses on scroll)
- Desktop nav: Services / Process / About (`#about` → craft section)
- Mobile sheet: portaled to `body`, blur overlay, focus trap, ESC dismiss, `inert` when closed
- No brand reveal splash
- Hero headline: “The finish / starts before / the paint.”
- Finish specimen: single cross-section object, absolute bottom-right on desktop (≥1024)
- Hero handoff: `#F5F5F7` → hairline → `#FFFFFF` credentials section
- Credentials: specification rail — stacked rows mobile, intro + horizontal rail desktop (≥900)
- Credentials intro: “Professional details.” + `site.tagline` — no marketing heading
- Services: product selector — one active service dominates; premium index (not pill tabs)
- Services intro: “Services” + “Painting, by application.”
- Services specimen: single abstract surface system (`service-surface.tsx`) morphs per service
- Services → quote: `setField("service", …)` on select + CTA scroll to `#contact`
- Removed redundant `PaintingSelector` section (was between credentials and services)

## Headline Decision (Phase 3.5)

**Chose B:** “The finish / starts before / the paint.”  
**Rejected A (docs only):** “Good painting / starts before / the paint.”

## Rejected Design Patterns

- Stock / AI / placeholder photography
- "Verified License" shields and badges
- Fabricated stats
- Generic card grids for services/process
- Trust badge grids / certification tiles
- Paint splatters, cartoon brushes, drips
- Giant gradients and glow effects
- Glass morphism everywhere
- Hero meta chips
- Blocking brand reveal splash
- Three floating card layers with per-layer labels
- Burgundy accent word in headline
- Bottom gradient hero handoff
- Standard split-layout hero
- “Licensed. Local. Ready to work.” marketing heading
- Pill-tab service selectors
- Colored service panels / four equal cards
- Hover-only service preview (`onMouseEnter` selection)
- Separate “What are we working on?” painting selector row list

## Completed Sections

| Section | Status | Notes |
|---------|--------|-------|
| Phase 0 audit | ✅ | `docs/SRL_CODE_AUDIT.md` |
| Phase 1 foundation | ✅ | System fonts, Apple palette, spacing tokens |
| Header + mobile nav | ✅ **FINAL** | QA 360–1920 |
| Hero | ✅ **FINAL** | Phase 3 + 3.5 acceptance pass |
| Business credentials | ✅ **FINAL** | Specification rail, 360px overflow fixed |
| Services | ✅ **FINAL** | Product selector + abstract specimen; two review passes |
| Craft/details | ⏳ Pending | Phase 6 |
| Process | ⏳ Pending | Phase 7 |
| Estimate | ⏳ Pending | Phase 8 |
| FAQ | ⏳ Pending | Phase 9 |
| Footer | ⏳ Pending | Phase 10 |

## Remaining Work

1. Craft scroll story simplification
2. Process step focus interaction
3. Estimate as native sheet
4. FAQ native-feel accordion
5. Footer minimal pass
6. Full-site rhythm review
7. README cleanup

## Known Issues

- README references deleted gallery component
- Quote wizard is page section, not overlay

## Business Facts Still Needed

- [ ] Confirm bonded status display is acceptable
- [ ] Confirm "Complimentary estimates" wording
- [ ] Email address (omitted until single verified source)
- [ ] Business hours (not displayed)
- [ ] Owner/crew photography (future)
- [ ] Resend env vars for production email delivery

---

*Last updated: 2026-09-06 — Phase 5 FINAL*
