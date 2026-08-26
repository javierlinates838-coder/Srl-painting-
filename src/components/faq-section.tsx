"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-pad bg-canvas">
      <div className="container-main max-w-3xl">
        <Reveal>
          <SectionHead
            align="center"
            label="FAQ"
            title="Got questions?"
            description="Quick answers before you reach out."
          />
        </Reveal>

        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} as="li" delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-[16px] font-bold text-ink sm:text-[17px]">{faq.q}</span>
                    <span
                      aria-hidden
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-lg leading-none transition-colors ${
                        isOpen ? "bg-brand text-white" : "bg-white text-muted"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 pr-10">
                      <p className="text-[15px] leading-relaxed text-muted">{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
