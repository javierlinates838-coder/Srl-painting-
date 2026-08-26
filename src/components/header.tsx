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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-white/10 bg-charcoal/96 backdrop-blur-lg"
          : "border-white/5 bg-charcoal/88 backdrop-blur-md"
      }`}
    >
      <div className="container-main flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label={site.name}>
          <BrandLogo className="h-[3.1rem] w-auto object-contain sm:h-[3.35rem]" preload />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-[12px] font-semibold tracking-wide xl:text-[13px] ${
                active === l.id ? "is-active text-white" : "text-zinc-400 hover:text-white"
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
            className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 hover:text-gold xl:block"
          >
            Verify CSLB
          </a>
          <Link href="#contact" className="btn btn-brand !hidden !px-4 !py-2.5 !text-[13px] md:!inline-flex">
            Free estimate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
