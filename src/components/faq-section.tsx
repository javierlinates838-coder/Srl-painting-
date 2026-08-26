"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-pad bg-chalk">
      <div className="container-main max-w-3xl">
        <Reveal>
          <SectionHead overline="Questions" title="Straight answers." />
        </Reveal>

        <ul className="mt-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} as="li" delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="border-t border-[var(--line)] last:border-b">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="faq-btn"
                  >
                    <span className="headline-md text-left !text-[1.0625rem]">{faq.q}</span>
                    <span className="shrink-0 font-display text-[1.25rem] text-umber-light" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-6">
                      <p className="prose-body-sm max-w-2xl">{faq.a}</p>
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
