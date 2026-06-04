"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-pad bg-paper">
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
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} as="li" delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className={`card overflow-hidden ${isOpen ? "border-brand/25" : ""}`}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-[15px] font-bold text-black">{faq.q}</span>
                    <span
                      aria-hidden
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-lg leading-none ${
                        isOpen ? "bg-brand text-white" : "bg-paper-2 text-zinc-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t border-black/5 px-5 pb-4 pt-3">
                      <p className="text-[14px] leading-relaxed text-zinc-600">{faq.a}</p>
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
