"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mesh-light section-pad">
      <div className="container-main max-w-3xl">
        <Reveal>
          <SectionHead
            align="center"
            label="FAQ"
            title="Got questions?"
            description="Quick answers before you reach out."
          />
        </Reveal>

        <ul className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} as="li" delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen ? "border-brand/30 shadow-lg shadow-brand/10" : "border-black/6 shadow-sm hover:border-black/10 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[15px] font-bold text-black">{faq.q}</span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition duration-300 ${
                        isOpen ? "rotate-45 bg-brand text-white" : "bg-paper-2 text-zinc-500"
                      }`}
                    >
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-black/5 px-6 pb-5 pt-4 text-[14px] leading-relaxed text-zinc-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
