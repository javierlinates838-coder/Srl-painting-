"use client";

import { useEffect, useRef } from "react";

type Stroke = { from: [number, number]; to: [number, number]; width: number; delay: number; alpha: number };

// Diagonal swipes of red paint, drawn bristle by bristle on a canvas so each
// stroke has dry edges and streaks. Coordinates are fractions of the section.
const presets: Record<"hero" | "contact", Stroke[]> = {
  hero: [
    { from: [0.36, 1.14], to: [1.04, -0.02], width: 150, delay: 0, alpha: 0.95 },
    { from: [0.6, 1.1], to: [1.1, 0.42], width: 60, delay: 0.35, alpha: 0.6 },
    { from: [0.3, 1.08], to: [0.86, 0.34], width: 22, delay: 0.55, alpha: 0.7 },
  ],
  contact: [
    { from: [-0.08, 0.78], to: [0.5, -0.1], width: 120, delay: 0, alpha: 0.5 },
    { from: [-0.06, 1.05], to: [0.42, 0.3], width: 40, delay: 0.3, alpha: 0.4 },
  ],
};
const palette = ["#c8102e", "#a50d26", "#8b0d22", "#e0213f", "#c8102e"];

function random(seed: number) {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function BrushBackdrop({ variant }: { variant: "hero" | "contact" }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current;
    const host = el?.parentElement;
    const ctx = el?.getContext("2d");
    if (!el || !host || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rand = random(variant === "hero" ? 11 : 29);
    const bristles = presets[variant].map((stroke) =>
      Array.from({ length: Math.round(stroke.width * 0.9) }, () => ({
        offset: rand() - 0.5,
        start: rand() * 0.07,
        end: 1 - rand() * rand() * 0.3,
        alpha: 0.25 + rand() * 0.75,
        color: palette[Math.floor(rand() * palette.length)],
        weight: 0.8 + rand() * 2.4,
      })),
    );
    let raf = 0;
    let started = 0;
    let visible = false;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    function draw(time: number) {
      const w = host!.clientWidth, h = host!.clientHeight;
      ctx!.clearRect(0, 0, w, h);
      let done = true;
      presets[variant].forEach((stroke, s) => {
        const t = reduce ? 1 : Math.min(1, Math.max(0, (time - stroke.delay) / 0.9));
        if (t < 1) done = false;
        const eased = 1 - Math.pow(1 - t, 3);
        // On narrow screens the hero strokes slide right so they stay clear of the copy.
        const shift = variant === "hero" && w < 700 ? 0.22 * w : 0;
        const x0 = stroke.from[0] * w + shift, y0 = stroke.from[1] * h, x1 = stroke.to[0] * w + shift, y1 = stroke.to[1] * h;
        const length = Math.hypot(x1 - x0, y1 - y0);
        const nx = -(y1 - y0) / length, ny = (x1 - x0) / length;
        const scale = Math.min(1, w / 1100) * 0.5 + 0.5;
        for (const b of bristles[s]) {
          const reach = Math.min(b.end, eased);
          if (reach <= b.start) continue;
          const ox = nx * b.offset * stroke.width * scale, oy = ny * b.offset * stroke.width * scale;
          ctx!.globalAlpha = b.alpha * stroke.alpha;
          ctx!.strokeStyle = b.color;
          ctx!.lineWidth = b.weight;
          ctx!.beginPath();
          ctx!.moveTo(x0 + (x1 - x0) * b.start + ox, y0 + (y1 - y0) * b.start + oy);
          ctx!.lineTo(x0 + (x1 - x0) * reach + ox, y0 + (y1 - y0) * reach + oy);
          ctx!.stroke();
        }
      });
      ctx!.globalAlpha = 1;
      return done;
    }
    function frame(now: number) {
      if (!started) started = now;
      if (!draw((now - started) / 1000 - (variant === "hero" ? 1.4 : 0))) raf = requestAnimationFrame(frame);
    }
    function resize() {
      el!.width = host!.clientWidth * ratio;
      el!.height = host!.clientHeight * ratio;
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx!.lineCap = "round";
      if (visible) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    }
    const sizes = new ResizeObserver(resize);
    sizes.observe(host);
    const seen = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { visible = true; seen.disconnect(); raf = requestAnimationFrame(frame); }
    }, { threshold: 0.15 });
    seen.observe(host);
    return () => { cancelAnimationFrame(raf); sizes.disconnect(); seen.disconnect(); };
  }, [variant]);
  return <canvas ref={canvas} className="brush-backdrop" aria-hidden="true" />;
}
