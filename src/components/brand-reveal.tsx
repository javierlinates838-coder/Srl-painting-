"use client";

import { useEffect, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BrandReveal() {
  const [hidden, setHidden] = useState(prefersReducedMotion);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (hidden) return;
    const fadeTimer = window.setTimeout(() => setDone(true), 500);
    const hideTimer = window.setTimeout(() => setHidden(true), 950);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className={`brand-reveal ${done ? "is-done" : ""}`} aria-hidden>
      <div className="text-center">
        <p className="brand-reveal-word">SRL</p>
        <div className="brand-reveal-line mx-auto" />
      </div>
    </div>
  );
}
