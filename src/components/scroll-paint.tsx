"use client";

import { useEffect, useRef } from "react";

// A paint stripe under the header that a tiny roller lays down as you scroll.
export function ScrollPaint() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty("--progress", String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="scroll-paint" ref={bar} aria-hidden="true">
      <span className="scroll-paint-fill" />
      <span className="scroll-paint-rail"><svg className="scroll-paint-roller" viewBox="0 0 28 16">
        <rect x="1" y="1" width="16" height="8" rx="3" fill="#e0213f" />
        <path d="M17 5h6v8" fill="none" stroke="#c9c9cf" strokeWidth="2" />
        <rect x="20" y="10" width="6" height="6" rx="2" fill="#fff" />
      </svg></span>
    </div>
  );
}
