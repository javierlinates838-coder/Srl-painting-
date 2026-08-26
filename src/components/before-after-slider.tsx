"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  priority?: boolean;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  priority = false,
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
      className={`ba-slider group relative select-none overflow-hidden bg-[var(--ios-fill)] ${dragging ? "is-dragging" : ""} ${className}`}
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
      }}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 430px) 100vw, 430px"
          className="object-cover"
          draggable={false}
          priority={priority}
        />

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover opacity-90"
            draggable={false}
            priority={priority}
            aria-hidden
          />
        </div>

        <div className="ba-handle absolute inset-y-0 z-10 -translate-x-1/2 cursor-ew-resize" style={{ left: `${pos}%` }} aria-hidden>
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-sm" />
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-ios-tint shadow-md">
            <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>

        {hint && (
          <span className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[0.6875rem] font-medium text-white backdrop-blur-sm">
            Drag to compare
          </span>
        )}
      </div>
    </div>
  );
}
