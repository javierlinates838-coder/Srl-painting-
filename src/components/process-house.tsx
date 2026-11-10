"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/lib/site";
import { HouseDefs, HouseShapes } from "./house-illustration";

// As each step reaches the middle of the screen the house moves to its next
// state (sketched, taped, painted, approved). CSS transitions do the motion, so
// nothing is recalculated while the page scrolls.
export function ProcessHouse() {
  const steps = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(3);

  useEffect(() => {
    const list = steps.current;
    if (!list) return;
    const items = Array.from(list.children);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(items.indexOf(entry.target));
    }, { rootMargin: "-48% 0px -48% 0px" });
    items.forEach((item) => observer.observe(item));
    // Above the list the house starts as a bare sketch.
    const start = requestAnimationFrame(() => { if (list.getBoundingClientRect().top > window.innerHeight * 0.5) setActive(0); });
    return () => { observer.disconnect(); cancelAnimationFrame(start); };
  }, []);

  return (
    <div className="process-layout">
      <div className="process-visual">
        <div className="process-card" data-step={active}>
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
      <ol className="process-steps" ref={steps}>
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
