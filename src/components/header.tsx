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
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setPastHero(y > window.innerHeight * 0.5);
    };
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

  const solid = scrolled || pastHero;

  return (
    <header className={`site-header ${solid ? "is-solid" : "is-hero"}`}>
      <div className="container-main flex h-full items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <BrandLogo
            className={`h-10 w-auto object-contain sm:h-11 ${solid ? "" : "brightness-0 invert"}`}
            priority
          />
          <span className={`hidden font-display text-xl sm:block ${solid ? "text-ink" : "text-white"}`}>
            {site.name}
          </span>
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
            className={`hidden text-sm font-medium tracking-wide lg:block ${solid ? "text-ink-muted hover:text-brand" : "text-white/80 hover:text-white"}`}
          >
            {site.phone}
          </a>
          <Link
            href="#contact"
            className={`btn btn-sm hidden md:inline-flex ${solid ? "btn-primary" : "btn-line-light"}`}
            style={{ minHeight: "2.5rem", padding: "0 1.25rem", fontSize: "0.75rem" }}
          >
            Request Estimate
          </Link>
          <MobileNav light={!solid} />
        </div>
      </div>
    </header>
  );
}
