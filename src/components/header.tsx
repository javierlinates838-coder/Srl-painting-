"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

const nav = [
  { href: "#work", label: "Our Work", id: "work" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const sectionIds = nav.map((n) => n.id);

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-charcoal/95 shadow-lg shadow-black/40 backdrop-blur-xl"
          : "border-b border-white/5 bg-charcoal/90 backdrop-blur-md"
      }`}
    >
      <div className="container-main flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="#" className="shrink-0" aria-label={site.name}>
          <BrandLogo className="h-[3.25rem] w-auto object-contain drop-shadow-sm" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-[13px] font-medium tracking-wide transition hover:text-white ${
                active === l.id ? "text-white" : "text-zinc-400"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-light" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[13px] font-medium text-zinc-500 transition hover:text-white md:block"
          >
            {site.instagramHandle}
          </a>
          <Link href="#contact" className="btn btn-brand hidden !px-5 !py-2.5 !text-[13px] sm:inline-flex">
            Free Estimate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
