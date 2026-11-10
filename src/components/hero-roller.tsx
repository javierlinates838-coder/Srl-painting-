"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Wobble along the wet paint edge so the reveal reads as a roller stroke,
// not a straight wipe. Fixed values keep server and client markup identical.
const wobble = [0, 1.2, -0.6, 0.9, -1.1, 0.4, 1.4, -0.8, 0.6, -1.3, 0.8, -0.4, 1.1, -0.9, 0.3, 1.2, -0.7, 0.9, -1, 0.5, 0];

export function HeroRoller({ src, alt }: { src: string; alt: string }) {
  const [touched, setTouched] = useState(false);
  const frame = useRef(0);
  const after = useRef<HTMLDivElement>(null);
  const tool = useRef<HTMLDivElement>(null);
  const range = useRef<HTMLInputElement>(null);

  // Moves the paint edge without re-rendering: this runs on every animation frame.
  const paint = useCallback((pos: number) => {
    const edge = wobble.map((w, i) => `calc(${pos}% + ${w * 6}px) ${(i / (wobble.length - 1)) * 100}%`);
    if (after.current) after.current.style.clipPath = `polygon(0 0, ${edge.join(", ")}, 0 100%)`;
    if (tool.current) tool.current.style.left = `${pos}%`;
  }, []);

  useEffect(() => {
    const settle = (pos: number) => { paint(pos); if (range.current) range.current.value = String(Math.round(pos)); };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { settle(62); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start - 1500) / 2000);
      settle(t <= 0 ? 0 : (1 - Math.pow(1 - t, 3)) * 62);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [paint]);

  return (
    <div className="roller-stage">
      <Image className="roller-before" src={src} alt="" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
      <div className="roller-after" ref={after}>
        <Image src={src} alt={alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="roller-tool" ref={tool} style={{ left: "100%" }} aria-hidden="true">
        <svg viewBox="0 0 120 260" className="roller-svg">
          <defs>
            <linearGradient id="nap" x1="0" x2="1">
              <stop offset="0" stopColor="#8f0c22" />
              <stop offset=".45" stopColor="#e0213f" />
              <stop offset="1" stopColor="#7d0a1d" />
            </linearGradient>
            <pattern id="napTex" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M0 3h6M3 0v6" stroke="#0000001f" strokeWidth="1" />
            </pattern>
          </defs>
          <rect x="6" y="20" width="44" height="180" rx="14" fill="url(#nap)" />
          <rect x="6" y="20" width="44" height="180" rx="14" fill="url(#napTex)" />
          <rect x="10" y="12" width="36" height="10" rx="3" fill="#2a2a2e" />
          <rect x="10" y="198" width="36" height="10" rx="3" fill="#2a2a2e" />
          <path d="M28 12V4h46v120" fill="none" stroke="#c9c9cf" strokeWidth="6" strokeLinejoin="round" />
          <rect x="62" y="120" width="24" height="132" rx="10" fill="#141416" />
          <rect x="66" y="130" width="4" height="110" rx="2" fill="#ffffff22" />
        </svg>
      </div>
      <input
        className="roller-range"
        type="range"
        min={0}
        max={100}
        step={1}
        ref={range}
        defaultValue={100}
        aria-label="Paint the house: slide to roll color across the photo"
        onChange={(e) => { cancelAnimationFrame(frame.current); if (!touched) setTouched(true); paint(Number(e.target.value)); }}
      />
      <span className={touched ? "roller-hint is-hidden" : "roller-hint"} aria-hidden="true">
        ← Drag the roller →
      </span>
    </div>
  );
}
