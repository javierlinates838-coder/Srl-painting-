"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { process } from "@/lib/site";
import { HouseDefs, HouseShapes } from "./house-illustration";

const clamp = (n: number) => Math.min(1, Math.max(0, n));

// As the steps scroll past, the house is sketched, taped off, painted and approved.
export function ProcessHouse() {
  const section = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = section.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight * 0.5;
      setProgress(clamp((window.innerHeight * 0.55 - r.top) / Math.max(span, 1)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const draw = clamp(progress / 0.3);
  const tape = clamp((progress - 0.25) / 0.2) * (1 - clamp((progress - 0.72) / 0.12));
  const fill = clamp((progress - 0.48) / 0.25);
  const done = clamp((progress - 0.8) / 0.15);
  const active = progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.78 ? 2 : 3;

  const vars = { "--draw": draw, "--tape": tape, "--fill": fill, "--done": done } as CSSProperties;

  return (
    <div className="process-layout" ref={section}>
      <div className="process-visual">
        <div className="process-card" style={vars}>
          <svg viewBox="0 0 640 420" role="img" aria-label={`Illustration of step ${active + 1}: ${process[active].title}`}>
            <HouseDefs id="proc" />
            <g className="proc-fill"><HouseShapes id="proc" /></g>
            <g className="proc-line"><HouseShapes id="proc-l" /></g>
            <g className="proc-tape">
              <path d="M90 228h84M90 320h84M286 228h84M286 320h84M184 278v94M276 278v94M406 246h158" />
            </g>
            <g className="proc-done">
              <circle cx="560" cy="80" r="40" />
              <path d="m540 80 14 14 26-28" />
              <path className="spark" d="M120 120l6 14 14 6-14 6-6 14-6-14-14-6 14-6Z" />
              <path className="spark" d="M470 110l4 9 9 4-9 4-4 9-4-9-9-4 9-4Z" />
            </g>
          </svg>
          <div className="process-meter" aria-hidden="true">
            {process.map((step, i) => (
              <span key={step.num} className={i <= active ? "is-on" : undefined}>{step.title}</span>
            ))}
          </div>
        </div>
      </div>
      <ol className="process-steps">
        {process.map((step, i) => (
          <li key={step.num} className={i === active ? "is-active" : undefined}>
            <span className="step-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
