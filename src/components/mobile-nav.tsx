"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#work", label: "Our Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-white/30 hover:bg-white/5 lg:hidden"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {open ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="mobile-nav-panel fixed inset-0 top-[4.5rem] z-40 bg-charcoal/98 backdrop-blur-xl lg:hidden">
          <nav className="container-main flex flex-col gap-1 py-6" aria-label="Mobile">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="fade-in-up rounded-lg px-4 py-3.5 font-display text-lg font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="fade-in-up rounded-lg px-4 py-3.5 text-[15px] font-medium text-zinc-400 transition hover:text-white"
              style={{ animationDelay: "0.2s" }}
            >
              {site.instagramHandle}
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-brand fade-in-up mt-4 w-full"
              style={{ animationDelay: "0.25s" }}
            >
              Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
