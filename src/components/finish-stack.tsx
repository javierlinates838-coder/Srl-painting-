"use client";

import { useEffect, useRef } from "react";

export function FinishStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH * 0.9)));
      el.style.setProperty("--stack-progress", progress.toFixed(3));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
