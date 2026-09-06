"use client";

import { useEffect, useRef } from "react";

export function FinishStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.setProperty("--stack-progress", "0");
      return;
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH * 0.9)));
      el.style.setProperty("--stack-progress", progress.toFixed(3));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="finish-specimen" aria-hidden>
      <div className="finish-specimen-object">
        <div className="finish-specimen-core">
          <span className="finish-specimen-slice finish-specimen-slice--prep" />
          <span className="finish-specimen-slice finish-specimen-slice--prime" />
          <span className="finish-specimen-slice finish-specimen-slice--finish">
            <span className="finish-specimen-accent" />
          </span>
        </div>
      </div>
      <p className="finish-specimen-caption">Prep · Prime · Finish</p>
    </div>
  );
}
