"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

const sectionIds = navLinks.map((n) => n.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-solid" : ""}`}>
      <div className="container-main flex h-full items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <BrandLogo className="h-10 w-auto object-contain sm:h-11" priority />
          <span className="hidden font-display text-xl text-ink sm:block">SRL</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${active === l.id ? "is-active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden text-sm font-medium tracking-wide text-ink-muted hover:text-brand lg:block"
          >
            {site.phone}
          </a>
          <Link
            href="#contact"
            className="btn btn-primary btn-sm hidden md:inline-flex"
          >
            Get Estimate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
