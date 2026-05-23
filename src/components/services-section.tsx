"use client";

import { useState } from "react";
import { services } from "@/lib/site";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-main">
        <div className="max-w-2xl">
          <div className="accent-rule" />
          <p className="label mt-4">Services</p>
          <h2 className="display-lg mt-3 text-black">What we paint — and how we do it</h2>
          <p className="body-lg mt-4">
            Four specialties. Same standard on every job: thorough prep, quality products, and a crew that respects your property.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {services.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-xl border px-4 py-3.5 text-left transition lg:w-full ${
                  i === active
                    ? "border-brand bg-brand text-white shadow-md shadow-brand/20"
                    : "border-black/8 bg-paper hover:border-black/15"
                }`}
              >
                <p className={`font-display text-[14px] font-bold ${i === active ? "text-white" : "text-black"}`}>
                  {s.title}
                </p>
                <p className={`mt-0.5 text-[12px] ${i === active ? "text-white/75" : "text-zinc-500"}`}>
                  {s.summary}
                </p>
              </button>
            ))}
          </div>

          <div className="surface p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold text-black">{current.title}</h3>
            <p className="mt-2 text-[15px] text-zinc-600">{current.summary}</p>
            <ul className="mt-8 space-y-4">
              {current.details.map((d) => (
                <li key={d} className="flex gap-3 text-[14px] leading-relaxed text-zinc-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
