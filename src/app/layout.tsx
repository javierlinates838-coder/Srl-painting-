import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.siteUrl);

const pageTitle = `${site.name} | Bakersfield Painting Contractor`;

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
    "cabinet painting Bakersfield",
    "commercial painting Bakersfield",
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
    images: [
      {
        url: "/projects/exterior-after.jpg",
        width: 1400,
        height: 1050,
        alt: "Exterior repaint by SRL Painting in Bakersfield",
      },
    ],
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
  themeColor: "#0d0d0e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
