"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { desktopNavLinks, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

const sectionIds = desktopNavLinks.map((n) => n.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-shell">
        <div className="site-header-bar">
          <Link href="/" className="site-header-brand" aria-label={`${site.name} home`}>
            <BrandLogo className="site-header-logo hidden sm:block" priority />
            <span className="site-header-wordmark">SRL</span>
          </Link>

          <nav className="site-header-nav" aria-label="Primary">
            {desktopNavLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${active === l.id ? "is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="site-header-actions">
            <Link href="#contact" className="btn btn-primary btn-sm site-header-cta">
              Get Estimate
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
