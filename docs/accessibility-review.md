# SRL Painting — accessibility and publication handoff

Updated September 9, 2026. This is an implementation record, not a legal opinion, compliance certification, or a guarantee against claims.

## Implemented

- Reviews feature four selected, attributed excerpts: Michael Moreno from the supplied Instagram screenshot, and Cynthia C., Kathleen T., and Aaron J. from SRL's Angi listing. They are not a live feed or aggregate score. Mobile carousel behavior is retained; desktop uses a wider editorial layout.
- Instagram links have recognizable custom interface icons and meaningful accessible names.
- Custom decorative SVG icons are hidden from assistive technology. Icon-only buttons retain text-based accessible names.
- The hero slideshow is replaced by a horizontal photo divider with a vertically draggable 52px handle. It has slider semantics, keyboard controls, pointer cancellation, and one 44px reset button. Photos are labelled by view, not as an unverified before/after pair. There is no automatic movement.
- One-time entrance animations progressively enhance already-visible content. Reduced-motion preferences disable them and cancel active animations. No content relies on animation to become readable.
- Inquiry fields have labels and required-field instructions. Sending/errors are announced; successful submission moves focus to its confirmation heading.
- Skip link, visible focus, native FAQ disclosure controls, responsive layout, and browser zoom remain available.
- Accessibility assistance page provides phone, text, and Instagram contact choices, without claiming ADA/WCAG certification.
- Website/estimate notice distinguishes an inquiry from a written project contract and does not waive consumer rights.
- Removed public bonding-advertisement wording and unverified sample testimonials. Removed fixed response/completion promises from active FAQs.
- Structured FAQ data appears on the homepage only, not on the information pages.

## Checks performed

- Production build / TypeScript and ESLint.
- `node scripts/test-estimate.cjs`: 13 offline estimate-route cases; no real customer emails sent.
- `node scripts/test-accessibility.cjs`: source-level checks for eight labelled fields, focus handling, motion, live feedback, zoom configuration, icon semantics, review links, and four text-color pairs.
- HTTP compilation checks for the homepage and information routes.

## Still required: manual accessibility evaluation

The source checks do not test actual browser behavior, screen-reader announcements, all contrast combinations, or WCAG conformance. A qualified reviewer should test against WCAG 2.2 AA as an evaluation target (not a statement of the legally required standard for every business):

1. Keyboard-only navigation: skip link, mobile menu/Escape, visible focus, all links, carousel, FAQ, form validation, success, failure, and retry.
2. NVDA with Chrome/Firefox on Windows; VoiceOver with Safari on iOS/macOS. Confirm names, landmarks, reading order, headings, feedback, and focus restoration.
3. Reflow at 320 CSS pixels, 200% text enlargement, and 400% browser zoom; test without horizontal loss of content and without fixed elements hiding focused controls.
4. Forced-colors/high-contrast mode, reduced motion, color contrast over every project image, and touch target spacing.
5. Real email delivery and fallback tests in a controlled preview with an authorized test inbox. Do not submit fictional customer requests to production.
6. An automated accessibility scan paired with manual tests, followed by fixes and retesting. A clean scanner report is not certification.

## Owner / attorney confirmations

- Verify the licensed business identity, current license status and scope directly with CSLB; the automated license lookup did not return a usable record.
- Confirm permission for the logo/project photographs and any future testimonial excerpts. Retain original sources and disclose any material incentives/connections. Invite honest feedback without rating-based incentives or suppression.
- Finalize a real privacy policy matching the legal operator, contact channel, actual hosting/email providers, retention, tracking settings, sharing practices, and applicable California privacy obligations. The website inquiry explanation is not a complete policy.
- Have California counsel review the business’s actual home-improvement contract, cancellation notices, payment/deposit terms, insurance disclosures, and marketing claims. Website language does not replace these documents.

## Primary guidance consulted

- [DOJ: Web accessibility and the ADA](https://www.ada.gov/resources/web-guidance/)
- [CSLB: Advertising guidelines](https://www.cslb.ca.gov/resources/guidesandpublications/advertisingguidelines.pdf)
- [FTC: Consumer reviews and testimonials rule Q&A](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers)
- [California AG: CalOPPA policy disclosures](https://oag.ca.gov/news/press-releases/attorney-general-kamala-d-harris-launches-new-tool-help-consumers-report)
- [CSLB: Home improvement contracts](https://cslb.ca.gov/Consumers/Hire_A_Contractor/Home_Improvement_Contracts/What_Is_A_Contract.aspx)
