"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  autoSlide?: boolean;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  autoSlide = false,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const clamp = (v: number) => Math.max(4, Math.min(96, v));

  const update = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(clamp(((clientX - left) / width) * 100));
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    if (!autoSlide || isDragging || hasInteracted) return;
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const t = ((ts - start) % 4000) / 4000;
      setPosition(15 + (0.5 - Math.cos(t * Math.PI * 2) * 0.5) * 70);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [autoSlide, isDragging, hasInteracted]);

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: MouseEvent | TouchEvent) =>
      update("touches" in e ? e.touches[0].clientX : e.clientX);
    const end = () => setIsDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [isDragging, update]);

  return (
    <div
      ref={containerRef}
      className={`ba-slider group relative overflow-hidden rounded-xl bg-zinc-900 ${className}`}
      onMouseDown={(e) => { setIsDragging(true); update(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); update(e.touches[0].clientX); }}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 60vw" draggable={false} />

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover brightness-90 saturate-[0.85]" sizes="(max-width:768px) 100vw, 60vw" draggable={false} />
        </div>

        <div className="ba-handle absolute inset-y-0 z-10 w-px -translate-x-1/2 cursor-ew-resize" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
          <div className={`absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-maroon shadow-lg transition ${isDragging ? "scale-110" : ""}`}>
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-maroon/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          After
        </span>

        {!hasInteracted && autoSlide && (
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink shadow">
            Drag to compare
          </span>
        )}
      </div>
    </div>
  );
}
