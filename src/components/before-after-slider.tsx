"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  preload?: boolean;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  preload = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hint, setHint] = useState(true);

  const clamp = (v: number) => Math.max(4, Math.min(96, v));

  const move = useCallback((x: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(clamp(((x - r.left) / r.width) * 100));
    setHint(false);
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

  const valueText = `${Math.round(pos)}% before visible, ${Math.round(100 - pos)}% after visible`;

  return (
    <div
      ref={ref}
      role="slider"
      aria-label="Before and after comparison"
      aria-orientation="horizontal"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-valuetext={valueText}
      tabIndex={0}
      className={`ba-slider group relative select-none overflow-hidden rounded-[calc(var(--radius)+2px)] bg-zinc-800 ${dragging ? "is-dragging" : ""} ${className}`}
      onMouseDown={(e) => {
        setDragging(true);
        move(e.clientX);
      }}
      onTouchStart={(e) => {
        setDragging(true);
        move(e.touches[0].clientX);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setPos((p) => clamp(p - 5));
          setHint(false);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setPos((p) => clamp(p + 5));
          setHint(false);
        }
        if (e.key === "Home") {
          e.preventDefault();
          setPos(4);
          setHint(false);
        }
        if (e.key === "End") {
          e.preventDefault();
          setPos(96);
          setHint(false);
        }
      }}
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
          draggable={false}
          preload={preload}
          fetchPriority={preload ? "high" : undefined}
        />

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover brightness-[0.9] saturate-[0.85]"
            draggable={false}
            aria-hidden
          />
        </div>

        <div className="ba-handle absolute inset-y-0 z-10 -translate-x-1/2 cursor-ew-resize" style={{ left: `${pos}%` }} aria-hidden>
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,.35)]" />
          <div
            className={`absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand shadow-lg ${dragging ? "scale-105" : ""}`}
          >
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        <span className="absolute left-3 top-3 z-20 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 z-20 rounded bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          After
        </span>

        {hint && (
          <span className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-black shadow-md">
            Drag to compare
          </span>
        )}
      </div>
    </div>
  );
}
