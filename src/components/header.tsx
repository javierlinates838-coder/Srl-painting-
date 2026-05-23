"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

const nav = [
  { href: "#work", label: "Our Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-charcoal/95 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-transparent bg-charcoal/90 backdrop-blur-md"
      }`}
    >
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <BrandLogo className="h-12 w-auto object-contain" priority />
          <span className="hidden font-display text-base font-bold text-white sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-zinc-400 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[13px] font-medium text-zinc-400 hover:text-white md:block"
          >
            {site.instagramHandle}
          </a>
          <Link href="#contact" className="btn btn-brand hidden !px-4 !py-2.5 !text-[13px] sm:inline-flex">
            Free Estimate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
