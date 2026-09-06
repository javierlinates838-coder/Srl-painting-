"use client";

import { useState } from "react";
import { colorDirections } from "@/lib/site";
import { Reveal } from "./reveal";

export function ColorExplorer() {
  const [activeId, setActiveId] = useState<(typeof colorDirections)[number]["id"]>(colorDirections[0].id);
  const active = colorDirections.find((c) => c.id === activeId) ?? colorDirections[0];

  return (
    <section id="color" className="section-pad bg-stone border-t border-[var(--line)]" aria-labelledby="color-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">Color Direction</p>
          <h2 id="color-heading" className="display-lg mt-4 text-ink">Find your mood.</h2>
          <p className="body-text mt-4 max-w-lg">
            Inspiration only — not exact paint colors. We help you choose the right products on site.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-12">
            <div className="color-panel-grid" role="img" aria-label={`${active.label} color direction`}>
              {active.panels.map((color, i) => (
                <div
                  key={`${active.id}-${i}`}
                  className="transition-colors duration-500"
                  style={{
                    background: color,
                    gridColumn: i === 0 ? "span 2" : undefined,
                    gridRow: i === 0 ? "span 2" : undefined,
                  }}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-4" role="tablist" aria-label="Color moods">
              {colorDirections.map((mood) => (
                <button
                  key={mood.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === mood.id}
                  className={`color-swatch-btn ${activeId === mood.id ? "is-active" : ""}`}
                  onClick={() => setActiveId(mood.id)}
                >
                  <span
                    className="color-swatch-dot"
                    style={{ background: mood.panels[0] }}
                    aria-hidden
                  />
                  {mood.label}
                </button>
              ))}
            </div>

            <p className="mt-6 body-text max-w-md">{active.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
