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
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          {mobileOpen ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <div
          ref={panelRef}
          id={panelId}
          className="fixed inset-0 top-20 z-[60] bg-ink/98 backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 -z-10"
            onClick={close}
          />
          <nav className="container-main relative flex flex-col gap-1 py-6" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-xl px-4 py-3.5 font-display text-2xl text-stone-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="rounded-lg px-4 py-3.5 text-[15px] text-zinc-400 hover:text-white"
            >
              Verify CSLB license
            </a>
            <Link href="#contact" onClick={close} className="btn btn-brand mt-4 w-full">
              Get a free estimate
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
