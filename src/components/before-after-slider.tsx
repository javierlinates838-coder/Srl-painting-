"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Aspect = "4/3" | "16/10" | "16/11";

const aspectClass: Record<Aspect, string> = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "16/11": "aspect-[16/11]",
};

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  priority?: boolean;
  aspect?: Aspect;
  large?: boolean;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  priority = false,
  aspect = "16/10",
  large = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const clamp = (v: number) => Math.max(3, Math.min(97, v));

  const move = useCallback((x: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(clamp(((x - r.left) / r.width) * 100));
  }, []);

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

  const sizes = large
    ? "(max-width: 768px) 100vw, 1400px"
    : "(max-width: 1024px) 100vw, 720px";

  return (
    <div
      ref={ref}
      role="slider"
      aria-label="Before and after comparison"
      aria-orientation="horizontal"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      className={`ba-slider relative select-none overflow-hidden bg-stone ${dragging ? "is-dragging" : ""}`}
      onMouseDown={(e) => { setDragging(true); move(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); move(e.touches[0].clientX); }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); setPos((p) => clamp(p - 4)); }
        if (e.key === "ArrowRight") { e.preventDefault(); setPos((p) => clamp(p + 4)); }
      }}
    >
      <div className={`relative w-full ${aspectClass[aspect]}`}>
        <Image src={afterSrc} alt={afterAlt} fill sizes={sizes} className="object-cover" draggable={false} priority={priority} />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={beforeSrc} alt={beforeAlt} fill sizes={sizes} className="object-cover" draggable={false} priority={priority} aria-hidden />
        </div>

        <div className="ba-handle absolute inset-y-0 z-10 -translate-x-1/2 cursor-ew-resize" style={{ left: `${pos}%` }} aria-hidden>
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/90" />
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-brand shadow-sm sm:h-12 sm:w-12">
            <svg className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        <span className="absolute left-4 top-4 z-20 meta text-white">Before</span>
        <span className="absolute right-4 top-4 z-20 meta text-white">After</span>
      </div>
    </div>
  );
}
