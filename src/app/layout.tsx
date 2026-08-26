import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { site } from "@/lib/site";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.siteUrl);

const pageTitle = `${site.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: site.description,
  keywords: [
    "painter Bakersfield",
    "house painting Kern County",
    "cabinet refinishing California",
    "commercial painting Los Angeles",
    "SRL Painting",
    "licensed painter California",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: site.name,
  },
  openGraph: {
    title: pageTitle,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    images: [{ url: "/projects/exterior-after.jpg", width: 1200, height: 800, alt: `${site.name} exterior project` }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
    images: ["/projects/exterior-after.jpg"],
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Script id="enable-js-reveal" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <LocalBusinessSchema siteUrl={siteUrl} />
        <div className="ios-app-shell">{children}</div>
      </body>
    </html>
  );
}
