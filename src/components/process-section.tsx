"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/lib/site";
import { Reveal } from "./reveal";

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px" },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section-pad bg-ivory border-t border-[var(--line)]" aria-labelledby="process-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">How we work</p>
          <h2 id="process-heading" className="display-lg mt-4 text-ink">From walkthrough<br />to final coat.</h2>
        </Reveal>

        <div className="process-timeline mt-16 max-w-2xl">
          {process.map((step, i) => (
            <Reveal key={step.num} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <article
                ref={(el) => { itemRefs.current[i] = el; }}
                data-index={i}
                className={`process-timeline-item ${visibleSteps.has(i) ? "is-visible" : ""}`}
              >
                <p className="step-num">{step.num}</p>
                <h3 className="font-display mt-2 text-2xl text-ink">{step.title}</h3>
                <p className="body-sm mt-3 max-w-md">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
