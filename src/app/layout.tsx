import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.siteUrl);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | Licensed Painter in Bakersfield & Los Angeles`,
  description: site.description,
  keywords: [
    "painter Bakersfield",
    "house painting Kern County",
    "cabinet refinishing California",
    "commercial painting Los Angeles",
    "SRL Painting",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    images: [{ url: "/logo.png", width: 400, height: 460, alt: site.name }],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Script id="enable-js-reveal" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <LocalBusinessSchema siteUrl={siteUrl} />
        {children}
      </body>
    </html>
  );
}
