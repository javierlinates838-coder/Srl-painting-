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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-ink/95 shadow-2xl shadow-black/10 backdrop-blur-xl"
          : "border-white/8 bg-ink/75 backdrop-blur-md"
      }`}
    >
      <div className="container-main flex h-20 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label={site.name}>
          <BrandLogo className="h-[3.15rem] w-auto object-contain sm:h-[3.4rem]" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-[11px] font-bold uppercase tracking-[0.1em] ${
                active === l.id ? "is-active text-white" : "text-stone-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="#contact" className="btn btn-brand hidden !px-4 !py-2.5 !text-[13px] md:inline-flex">
            Free estimate <span aria-hidden>↗</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
