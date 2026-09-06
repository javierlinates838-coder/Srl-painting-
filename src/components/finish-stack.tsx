"use client";

import { useEffect, useRef } from "react";

const LAYERS = [
  { id: "prep", label: "Prep" },
  { id: "prime", label: "Prime" },
  { id: "finish", label: "Finish" },
] as const;

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
      const progress = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH * 0.85)));
      el.style.setProperty("--stack-progress", progress.toFixed(3));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="finish-stack" aria-hidden>
      {LAYERS.map((layer) => (
        <div key={layer.id} className={`finish-layer finish-layer--${layer.id}`}>
          <span className="finish-layer-label">{layer.label}</span>
          {layer.id === "finish" && <span className="finish-layer-edge" />}
        </div>
      ))}
    </div>
  );
}
