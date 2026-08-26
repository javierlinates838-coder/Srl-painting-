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
      <div className="container-main grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHead
            label="Good to know"
            title={<>Questions before<br /><span className="text-brand">the first coat.</span></>}
            description="The essentials, answered plainly. If your project is unusual, send us a message—we're happy to talk it through."
          />
        </Reveal>

        <ul className="border-t border-ink/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} as="li" delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="overflow-hidden border-b border-ink/15">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-xl leading-tight text-ink">{faq.q}</span>
                    <span
                      aria-hidden
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-lg leading-none ${
                        isOpen ? "bg-brand text-white" : "border border-ink/15 text-stone-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-6 pr-10">
                      <p className="text-[14px] leading-7 text-stone-600">{faq.a}</p>
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
