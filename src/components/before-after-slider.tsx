"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
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
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);

  const clamp = (v: number) => Math.max(3, Math.min(97, v));

  const move = useCallback((x: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(clamp(((x - r.left) / r.width) * 100));
    setTouched(true);
  }, []);

  useEffect(() => {
    if (!autoSlide || dragging || touched) return;
    let f: number;
    let s: number | null = null;
    const loop = (t: number) => {
      if (!s) s = t;
      const p = ((t - s) % 4500) / 4500;
      setPos(12 + (0.5 - Math.cos(p * Math.PI * 2) * 0.5) * 76);
      f = requestAnimationFrame(loop);
    };
    f = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(f);
  }, [autoSlide, dragging, touched]);

  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent | TouchEvent) =>
      move("touches" in e ? e.touches[0].clientX : e.clientX);
    const mu = () => setDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    window.addEventListener("touchmove", mm, { passive: true });
    window.addEventListener("touchend", mu);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
      window.removeEventListener("touchmove", mm);
      window.removeEventListener("touchend", mu);
    };
  }, [dragging, move]);

  return (
    <div
      ref={ref}
      className={`ba-slider group relative select-none overflow-hidden rounded-[calc(var(--radius)+4px)] bg-zinc-800 ${className}`}
      onMouseDown={(e) => { setDragging(true); move(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); move(e.touches[0].clientX); }}
    >
      <div className="relative aspect-[5/3] w-full min-h-[200px] sm:aspect-[16/10]">
        {/* After — full width */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="eager"
          decoding="async"
        />

        {/* Before — clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.88] saturate-[0.82] contrast-[1.05]"
            draggable={false}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/10" aria-hidden />
        </div>

        {/* Handle */}
        <div
          className="ba-handle absolute inset-y-0 z-10 -translate-x-1/2 cursor-ew-resize"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(0,0,0,.5)]" />
          <div
            className={`absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-brand shadow-xl transition ${dragging ? "scale-110" : "group-hover:scale-105"}`}
          >
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        <span className="absolute left-4 top-4 z-20 rounded-md bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-4 top-4 z-20 rounded-md bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          After
        </span>

        {!touched && autoSlide && (
          <span className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-md bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-black shadow">
            Drag to compare
          </span>
        )}
      </div>
    </div>
  );
}
