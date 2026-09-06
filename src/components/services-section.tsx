"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";

const panelColors = ["#f4f1ea", "#e8e4dc", "#d4cfc4", "#151515"];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="section-pad bg-ivory border-t border-[var(--line)]" aria-labelledby="services-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">Services</p>
          <h2 id="services-heading" className="display-lg mt-4 text-ink">What we paint.</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div role="tablist" aria-label="Services">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`service-index-btn ${active === i ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="service-index-num">{s.index}</span>
                  <span className="service-index-title">{s.title}</span>
                  <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                    {active === i ? "→" : ""}
                  </span>
                  <span className="service-index-rule" />
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div
              role="tabpanel"
              className="service-panel"
              style={{ background: panelColors[active % panelColors.length] }}
            >
              <div className="crop-mark crop-mark-tl" aria-hidden />
              <div className="crop-mark crop-mark-br" aria-hidden />
              <p className="meta-brand">{current.index} / {services.length.toString().padStart(2, "0")}</p>
              <p className="body-text mt-6 max-w-md">{current.summary}</p>
              <ul className="mt-8 space-y-3">
                {current.details.map((d) => (
                  <li key={d} className="body-sm flex gap-3">
                    <span className="text-brand" aria-hidden>—</span>
                    {d}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="btn btn-primary mt-10">
                Get an Estimate
                <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
