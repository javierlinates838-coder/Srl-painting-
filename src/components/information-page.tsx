import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { site } from "@/lib/site";
import type { ReactNode } from "react";

export function InformationPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand-link" aria-label="SRL Painting home">
            <BrandLogo className="brand-image" />
            <span className="brand-wordmark">
              SRL Painting<small>CSLB #{site.license}</small>
            </span>
          </Link>
          <Link href="/" className="text-link">
            Back to the website ↗
          </Link>
        </div>
      </header>
      <main id="main-content" className="shell section information-page">
        <p className="eyebrow">SRL PAINTING / WEBSITE INFORMATION</p>
        <h1>{title}</h1>
        <p className="information-intro">{intro}</p>
        <p className="information-date">Updated September 8, 2026</p>
        <div className="information-content">{children}</div>
      </main>
      <footer className="shell information-footer">
        <nav aria-label="Website information">
          <Link href="/">Home</Link>
          <Link href="/terms">Website & estimate information</Link>
          <Link href="/accessibility">Accessibility assistance</Link>
        </nav>
        <p>
          SRL Painting · California C-33 license #{site.license} ·{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
        </p>
      </footer>
    </>
  );
}
