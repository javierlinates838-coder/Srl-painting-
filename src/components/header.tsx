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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/8 bg-canvas/95 text-ink shadow-[0_8px_30px_rgba(0,0,0,.06)] backdrop-blur-lg"
          : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className="container-main flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="shrink-0 drop-shadow-md" aria-label={site.name}>
          <BrandLogo className="h-[2.85rem] w-auto object-contain sm:h-[3.1rem]" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-[13px] font-medium ${
                scrolled
                  ? active === l.id
                    ? "is-active text-ink"
                    : "text-muted hover:text-ink"
                  : active === l.id
                    ? "is-active text-white"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={site.licenseVerifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden text-[12px] xl:block ${
              scrolled ? "text-muted hover:text-ink" : "text-white/55 hover:text-white"
            }`}
          >
            Verify license
          </a>
          <Link
            href="#contact"
            className={`btn hidden !px-4 !py-2.5 !text-[13px] md:inline-flex ${
              scrolled ? "btn-brand" : "btn-light"
            }`}
          >
            Free Estimate
          </Link>
          <MobileNav light={!scrolled} />
        </div>
      </div>
    </header>
  );
}
