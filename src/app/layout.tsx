import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.siteUrl);

const pageTitle = `${site.name} | California Painting Contractor`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: site.description,
  keywords: [
    "painter Bakersfield",
    "house painting Kern County",
    "cabinet refinishing California",
    "SRL Painting",
    "licensed painter California",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    images: [{ url: "/logo.png", width: 512, height: 425, alt: "SRL Painting" }],
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: site.description,
    images: ["/logo.png"],
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Script id="enable-js-reveal" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <LocalBusinessSchema siteUrl={siteUrl} />
        {children}
      </body>
    </html>
  );
}
