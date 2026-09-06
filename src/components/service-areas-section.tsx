"use client";

import { useState } from "react";
import { serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";

export function ServiceAreasSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="areas" className="section-pad bg-stone border-t border-[var(--line)]" aria-labelledby="areas-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">Service areas</p>
          <h2 id="areas-heading" className="display-lg mt-4 text-ink">We work across<br />California.</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="area-list" role="list">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.city} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <button
                  type="button"
                  role="listitem"
                  className={`area-item ${active === i ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  {area.city}
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="lg:pt-8">
              <p className="meta">Selected area</p>
              <p className="font-display mt-4 text-4xl text-ink">{serviceAreas[active].city}</p>
              <p className="body-text mt-4">{serviceAreas[active].note}</p>
              <div className="paint-line-brand mt-8 w-16" aria-hidden />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
