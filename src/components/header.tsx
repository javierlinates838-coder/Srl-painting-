"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { credentials, site } from "@/lib/site";
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-charcoal/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-main flex h-[4.25rem] items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <BrandLogo className="h-11 w-auto min-h-[44px] object-contain" priority />
          <div className="hidden sm:block">
            <p className="font-display text-[15px] font-bold leading-none text-white">{site.name}</p>
            <p className="mt-0.5 text-[11px] font-medium text-zinc-500">Lic. {site.license}</p>
          </div>
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

export function CredentialsBar() {
  return (
    <div className="mt-[4.25rem] border-b border-white/10 bg-brand-dark">
      <div className="container-main flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-2.5">
        {credentials.map((c) => (
          <div key={c.label} className="flex items-center gap-2 text-[12px]">
            <span className="font-semibold text-white/90">{c.value}</span>
            <span className="hidden text-white/40 sm:inline">·</span>
            <span className="hidden text-white/50 sm:inline">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
