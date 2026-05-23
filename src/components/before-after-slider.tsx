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

  const clamp = (value: number) => Math.max(4, Math.min(96, value));

  const updateFromClientX = useCallback((clientX: number) => {
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

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const cycle = 4000;
      const t = (elapsed % cycle) / cycle;
      const eased = 0.5 - Math.cos(t * Math.PI * 2) * 0.5;
      setPosition(15 + eased * 70);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [autoSlide, isDragging, hasInteracted]);

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };

    const onEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className={`ba-slider group relative select-none overflow-hidden rounded-2xl bg-ink ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        updateFromClientX(e.touches[0].clientX);
      }}
      role="img"
      aria-label={`Before and after: ${afterAlt}`}
    >
      {/* After — full background */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />

        {/* Before — clipped left portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
          <div className="absolute inset-0 bg-ink/10" aria-hidden />
        </div>

        {/* Divider line + handle */}
        <div
          className="ba-handle absolute inset-y-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize"
          style={{ left: `${position}%` }}
        >
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" />
          <div
            className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-maroon shadow-xl transition-transform ${isDragging ? "scale-110" : "group-hover:scale-105"}`}
          >
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 8l-4 4 4 4M15 8l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-4 top-4 z-20 rounded-full bg-ink/75 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-4 top-4 z-20 rounded-full bg-maroon/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          After
        </span>

        {!hasInteracted && autoSlide && (
          <span className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-ink shadow-lg">
            Drag to compare
          </span>
        )}
      </div>
    </div>
  );
}
