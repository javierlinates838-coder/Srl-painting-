"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { IosGroup, IosRow } from "./ios-group";
import { useNav } from "./nav-provider";

export function MobileNav() {
  const { mobileOpen, setMobileOpen } = useNav();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls={panelId}
        className="ios-btn ios-btn-plain ios-btn-sm !min-h-0 !px-2 md:hidden"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          {mobileOpen ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <>
          <button type="button" className="ios-sheet-backdrop" aria-label="Close menu" onClick={close} />
          <div id={panelId} className="ios-sheet md:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
            <div className="ios-sheet-handle" aria-hidden />
            <div className="px-4 pb-4">
              <p className="ios-title-2 mb-3 px-1">Navigate</p>
              <IosGroup>
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={close} className="ios-row ios-row-tappable">
                    <span className="ios-row-content ios-body">{l.label}</span>
                    <svg className="ios-chevron" viewBox="0 0 8 14" fill="none" aria-hidden>
                      <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
                <IosRow href={site.licenseVerifyUrl} chevron external>
                  <span className="ios-body">Verify license</span>
                </IosRow>
              </IosGroup>
              <Link href="#contact" onClick={close} className="ios-btn ios-btn-brand mt-4 w-full">
                Get Estimate
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
