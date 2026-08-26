"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const icons: Record<string, ReactNode> = {
  residential: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
    </svg>
  ),
  commercial: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M4 21V8l8-4 8 4v13M9 21v-6h6v6" />
    </svg>
  ),
  cabinets: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path strokeLinecap="round" d="M4 12h16M12 4v16" />
    </svg>
  ),
  "new-cabinets": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M12 3v18M8 7h8M8 17h8" />
      <rect x="6" y="9" width="12" height="6" rx="1" />
    </svg>
  ),
};

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Services"
            title="What we paint"
            description="Four specialties. One standard — thorough prep, quality coatings, and a crew that respects your property."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal>
            <ul className="flex flex-col border-t border-[var(--line)]" role="tablist" aria-label="Services">
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.id} className="border-b border-[var(--line)]">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="service-panel"
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-4 py-5 text-left transition-colors ${
                        isActive ? "text-brand" : "text-ink hover:text-brand"
                      }`}
                    >
                      <span className="font-display text-sm font-bold tabular-nums text-muted/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display flex-1 text-xl font-bold tracking-tight sm:text-2xl">
                        {s.title}
                      </span>
                      <span
                        className={`flex h-9 w-9 items-center justify-center transition-colors ${
                          isActive ? "bg-brand text-white" : "bg-canvas text-muted"
                        }`}
                        aria-hidden
                      >
                        {icons[s.id]}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div id="service-panel" role="tabpanel" className="lg:pt-2">
              <p className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{service.summary}</p>
              <ul className="mt-8 space-y-4">
                {service.details.map((d) => (
                  <li key={d} className="flex gap-3 border-b border-[var(--line-soft)] pb-4 text-[15px] leading-relaxed text-muted last:border-0">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="btn btn-brand mt-8">
                Get an estimate for {service.title.toLowerCase()}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
