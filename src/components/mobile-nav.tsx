"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { useNav } from "./nav-provider";

export function MobileNav() {
  const { mobileOpen, setMobileOpen } = useNav();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setMobileOpen(false);
    buttonRef.current?.focus();
  }, [setMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          {mobileOpen ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div
        ref={panelRef}
        className={`mobile-menu lg:hidden ${mobileOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!mobileOpen}
      >
        <p className="meta-brand mb-6">Menu</p>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className="mobile-menu-link">
              <span className="mobile-menu-num">{l.num}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3 pt-8">
          <a href={`tel:${site.phoneTel}`} onClick={close} className="btn btn-line w-full">
            Call {site.phone}
          </a>
          <a href={`sms:${site.phoneTel}`} onClick={close} className="btn btn-line w-full">
            Text {site.phone}
          </a>
          <Link href="#contact" onClick={close} className="btn btn-primary w-full">
            Get Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
