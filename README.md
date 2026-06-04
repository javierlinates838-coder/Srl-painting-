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

Deploy to [Vercel](https://vercel.com) or any Node host that supports Next.js.

Set `NEXT_PUBLIC_SITE_URL` to your production domain in Vercel environment variables.

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
