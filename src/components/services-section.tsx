"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";

const icons: Record<string, ReactNode> = {
  residential: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
    </svg>
  ),
  commercial: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M4 21V8l8-4 8 4v13M9 21v-6h6v6" />
    </svg>
  ),
  cabinets: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path strokeLinecap="round" d="M4 12h16M12 4v16" />
    </svg>
  ),
  "new-cabinets": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M12 3v18M8 7h8M8 17h8" />
      <rect x="6" y="9" width="12" height="6" rx="1" />
    </svg>
  ),
};

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="accent-rule mx-auto" />
            <p className="label mt-4">Services</p>
            <h2 className="display-lg mt-3 text-black">What we paint</h2>
            <p className="body-lg mt-4">
              Four specialties. Same standard on every job — thorough prep, quality products, and a crew
              that respects your property.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start">
          <div className="scrollbar-hide -mx-1 flex flex-row gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {services.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`card-lift flex w-[240px] shrink-0 items-center gap-3 rounded-2xl border px-4 py-4 text-left transition sm:w-[260px] lg:w-full ${
                  i === active
                    ? "border-brand bg-brand text-white shadow-lg shadow-brand/25"
                    : "border-black/6 bg-paper hover:border-brand/25 hover:bg-white"
                }`}
              >
                <span
                  className={`icon-box h-11 w-11 shrink-0 ${i === active ? "!bg-white/15 !text-white !shadow-none" : ""}`}
                >
                  {icons[s.id]}
                </span>
                <div className="min-w-0">
                  <p className={`font-display text-[14px] font-bold ${i === active ? "text-white" : "text-black"}`}>
                    {s.title}
                  </p>
                  <p className={`mt-0.5 text-[12px] ${i === active ? "text-white/70" : "text-zinc-500"}`}>
                    {s.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <Reveal delay={1}>
            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-black/6 bg-paper p-6 shadow-lg shadow-black/5 sm:p-8 lg:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" aria-hidden />
              <div className="relative">
                <span className="icon-box mb-5 h-14 w-14">{icons[current.id]}</span>
                <h3 className="font-display text-2xl font-bold text-black">{current.title}</h3>
                <p className="mt-2 text-[15px] text-zinc-600">{current.summary}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {current.details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 rounded-xl bg-white p-3.5 text-[13px] leading-relaxed text-zinc-700 shadow-sm"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="btn btn-brand mt-8 !text-[13px]">
                  Get a {current.title.toLowerCase()} estimate →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
