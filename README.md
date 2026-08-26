# SRL Painting — Marketing Website

A Next.js marketing site for **SRL Painting**, a licensed California painting contractor (C-33, license #1108313).

## Features

- Brand-aligned design (burgundy / maroon palette)
- Services, before/after gallery, reviews, FAQ, and contact sections
- Instagram-first contact flow with estimate request form
- CSLB license verification links
- SEO: sitemap, robots.txt, Open Graph, Twitter cards, JSON-LD

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm start
```

### Vercel (recommended)

This is a standard Next.js App Router project — Vercel auto-detects the framework.

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Use the default settings (framework: **Next.js**, build: `npm run build`)
3. Add an environment variable in the Vercel dashboard:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://srl-painting.vercel.app` (or your custom domain) |

`VERCEL_URL` is set automatically on each deployment for preview URLs. Production SEO (sitemap, Open Graph, JSON-LD) uses `NEXT_PUBLIC_SITE_URL` when set.

A `vercel.json` is included to pin the build/install commands.

## Customization

- **Site copy & links:** `src/lib/site.ts`
- **Logo:** place `LOGO.png` or `srl-logo.png` in the repo root — `npm run dev` / `npm run build` runs `scripts/apply-uploaded-logo.js` automatically
- **Project photos:** replace files in `public/projects/`, then run `npm run optimize-images`
- **Phone / email:** add to `src/lib/site.ts` when available

## Project structure

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Single-page layout |
| `src/components/before-after-gallery.tsx` | Project gallery |
| `src/components/brand-logo.tsx` | Logo component |
| `src/lib/site.ts` | All site content & nav |
