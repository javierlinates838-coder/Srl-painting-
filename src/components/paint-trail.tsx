"use client";

import { useEffect, useRef } from "react";

// Decorative brush trail that follows the pointer across the hero and dries away.
export function PaintTrail() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last: { x: number; y: number; w: number } | null = null;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      el!.width = host!.clientWidth * ratio;
      el!.height = host!.clientHeight * ratio;
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    function move(e: PointerEvent) {
      const r = host!.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (last) {
        const dist = Math.hypot(x - last.x, y - last.y);
        const w = Math.max(6, Math.min(34, 40 - dist * 0.6));
        ctx!.strokeStyle = "rgba(200, 16, 46, 0.55)";
        ctx!.lineCap = "round";
        ctx!.lineWidth = (w + last.w) / 2;
        ctx!.beginPath();
        ctx!.moveTo(last.x, last.y);
        ctx!.lineTo(x, y);
        ctx!.stroke();
        last = { x, y, w };
      } else last = { x, y, w: 20 };
    }
    function leave() { last = null; }
    function fade() {
      ctx!.globalCompositeOperation = "destination-out";
      ctx!.fillStyle = "rgba(0,0,0,0.06)";
      ctx!.fillRect(0, 0, el!.width, el!.height);
      ctx!.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(fade);
    }
    resize();
    raf = requestAnimationFrame(fade);
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); observer.disconnect(); host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave); };
  }, []);
  return <canvas ref={canvas} className="paint-trail" aria-hidden="true" />;
}
