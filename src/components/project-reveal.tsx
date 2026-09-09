"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

export function ProjectShowcase() {
  const [split, setSplit] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const pointer = useRef<number | null>(null);
  function update(event: PointerEvent<HTMLButtonElement>) {
    const bounds = frame.current?.getBoundingClientRect();
    if (bounds) setSplit(Math.round(Math.max(0, Math.min(100, (event.clientY - bounds.top) / bounds.height * 100))));
  }
  return (
    <figure className="project-reveal" aria-labelledby="reveal-title">
      <div className="reveal-frame" ref={frame}>
        <Image src="/projects/exterior-before.jpg" alt="Side view of white exterior walls and dark window trim" fill sizes="(max-width: 900px) 100vw, 55vw" preload draggable={false} />
        <div className="reveal-layer" style={{ clipPath: `inset(0 0 ${100 - split}% 0)` }}>
          <Image src="/projects/exterior-after.jpg" alt="Front view of the white home with a dark garage door" fill sizes="(max-width: 900px) 100vw, 55vw" preload draggable={false} />
        </div>
        <span className="reveal-label reveal-label-top" style={{ opacity: split > 8 ? 1 : 0 }}>FRONT VIEW</span>
        <span className="reveal-label reveal-label-bottom" style={{ opacity: split < 92 ? 1 : 0 }}>EXTERIOR DETAILS</span>
        <div className="reveal-divider" style={{ top: `${split}%` }} aria-hidden="true" />
        <button type="button" className="reveal-handle" role="slider"
          aria-label="Photo reveal divider" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} aria-valuenow={split}
          aria-valuetext={`${split}% front view, ${100 - split}% exterior details`} aria-describedby="reveal-help"
          style={{ top: `clamp(26px, ${split}%, calc(100% - 26px))` }}
          onKeyDown={(event) => {
            const step = event.shiftKey ? 10 : 5;
            if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", "End"].includes(event.key)) {
              event.preventDefault();
              setSplit((value) => event.key === "Home" ? 0 : event.key === "End" ? 100 : Math.max(0, Math.min(100, value + (["ArrowUp", "ArrowRight"].includes(event.key) ? step : -step))));
            }
          }}
          onPointerDown={(event) => {
            if (!event.isPrimary || event.button !== 0) return;
            pointer.current = event.pointerId;
            event.currentTarget.setPointerCapture(event.pointerId);
            update(event);
          }}
          onPointerMove={(event) => { if (pointer.current === event.pointerId) update(event); }}
          onPointerUp={() => { pointer.current = null; }}
          onPointerCancel={() => { pointer.current = null; }}
          onLostPointerCapture={() => { pointer.current = null; }}>
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false"><path d="m6 8 4-4 4 4M6 18l4 4 4-4" /></svg>
        </button>
      </div>
      <figcaption className="reveal-caption">
        <div><span className="eyebrow">THE SRL PORTFOLIO</span><h2 id="reveal-title">A closer look. Every angle.</h2></div>
        <p id="reveal-help">Pull the handle up or down to explore two project views.</p>
      </figcaption>
      <div className="reveal-presets">
        <button type="button" onClick={() => setSplit(50)}>Reset view</button>
      </div>
    </figure>
  );
}
