# SRL Painting — Marketing Website

A Next.js marketing site for **SRL Painting**, a licensed California painting contractor (C-33, license #1108313).

## Features

- Brand-aligned design (burgundy / maroon palette from the logo)
- Services, service areas, gallery, and contact sections
- Instagram-first contact flow with estimate request form
- Link to verify license on the [CSLB](https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node host that supports Next.js:

```bash
npm run build
npm start
```

## Customization

- Replace `/public/logo.svg` with the official logo file if you have a higher-resolution asset
- Update contact details in `src/lib/site.ts` when phone or email are available
- Swap gallery images in `src/components/gallery-section.tsx` with real project photos from Instagram
