"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { mobileNavLinks, site } from "@/lib/site";
import { useNav } from "./nav-provider";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const { mobileOpen, setMobileOpen } = useNav();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  const close = useCallback(() => {
    setMobileOpen(false);
    buttonRef.current?.focus();
  }, [setMobileOpen]);

  const open = useCallback(() => setMobileOpen(true), [setMobileOpen]);

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
    if (!mobileOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const overlay = mounted
    ? createPortal(
        <>
          <div
            className={`mobile-nav-backdrop lg:hidden ${mobileOpen ? "is-open" : ""}`}
            onClick={close}
            aria-hidden={!mobileOpen}
          />

          <div
            ref={panelRef}
            id="mobile-nav-sheet"
            className={`mobile-nav-sheet lg:hidden ${mobileOpen ? "is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            aria-hidden={!mobileOpen}
            inert={!mobileOpen}
          >
            <div className="mobile-nav-sheet-header">
              <p className="mobile-nav-sheet-title">Menu</p>
              <button
                type="button"
                onClick={close}
                className="mobile-nav-close"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mobile-nav-links" aria-label="Mobile">
              {mobileNavLinks.map((l) => (
                <Link key={l.id} href={l.href} onClick={close} className="mobile-nav-link">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-nav-footer">
              <Link href="#contact" onClick={close} className="btn btn-primary w-full">
                Get Estimate
              </Link>
              <a href={`tel:${site.phoneTel}`} onClick={close} className="mobile-nav-phone">
                {site.phone}
              </a>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

  return (
    <>
      <Link
        href="#contact"
        className="site-header-cta-mobile btn btn-primary btn-sm lg:hidden"
        onClick={() => setMobileOpen(false)}
      >
        Estimate
      </Link>

      <button
        ref={buttonRef}
        type="button"
        onClick={() => (mobileOpen ? close() : open())}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-sheet"
        className="mobile-nav-trigger lg:hidden"
      >
        <span className="mobile-nav-trigger-label">{mobileOpen ? "Close" : "Menu"}</span>
      </button>

      {overlay}
    </>
  );
}
