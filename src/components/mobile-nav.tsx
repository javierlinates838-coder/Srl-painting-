"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { useNav } from "./nav-provider";

export function MobileNav() {
  const { mobileOpen, setMobileOpen } = useNav();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setMobileOpen(false);
    buttonRef.current?.focus();
  }, [setMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, close]);

  useEffect(() => {
    if (!mobileOpen || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable[0]?.focus();
  }, [mobileOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls={panelId}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-ink lg:hidden"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          {mobileOpen ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <>
          <button type="button" className="sheet-backdrop" aria-label="Close menu" onClick={close} />
          <div
            ref={panelRef}
            id={panelId}
            className="sheet-panel lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="sheet-handle" aria-hidden />
            <nav className="px-5 pb-6" aria-label="Mobile">
              <p className="mb-2 px-1 font-display text-xl text-ink">Menu</p>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3.5 text-base font-medium text-ink-muted hover:bg-paper hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block rounded-lg px-3 py-3.5 text-sm text-ink-muted hover:text-brand"
              >
                Verify CSLB license
              </a>
              <Link href="#contact" onClick={close} className="btn btn-brand mt-4 w-full">
                Get Free Estimate
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
