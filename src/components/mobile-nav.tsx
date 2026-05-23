"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "#work", label: "Before & After" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-[4.5rem] z-40 bg-ink/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3 text-lg font-medium text-white/80"
            >
              {site.instagramHandle}
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Free estimate
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
