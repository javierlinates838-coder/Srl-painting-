import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://srl-painting.vercel.app"),
  title: `${site.name} | Licensed Painter in Bakersfield & Los Angeles`,
  description: site.description,
  keywords: [
    "painter Bakersfield",
    "house painting Kern County",
    "cabinet refinishing California",
    "commercial painting Los Angeles",
    "SRL Painting",
  ],
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.svg", width: 400, height: 460, alt: site.name }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
