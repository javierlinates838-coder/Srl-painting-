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
            title="Questions? We've got answers."
            description="Everything you need to know before reaching out."
          />
        </Reveal>

        <ul className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} as="li" delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className={`card overflow-hidden transition-colors ${isOpen ? "border-brand/30 shadow-md" : ""}`}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[15px] font-bold text-black">{faq.q}</span>
                    <span
                      aria-hidden
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg leading-none transition-colors ${
                        isOpen ? "bg-gradient-to-br from-brand to-brand-light text-white" : "bg-paper-2 text-zinc-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-black/5 px-6 pb-5 pt-4">
                        <p className="text-[14px] leading-relaxed text-zinc-600">{faq.a}</p>
                      </div>
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
