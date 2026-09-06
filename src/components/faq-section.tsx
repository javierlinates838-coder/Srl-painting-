"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-pad bg-section-warm">
      <div className="container-main max-w-3xl">
        <Reveal>
          <SectionHead align="center" label="FAQ" title="Common questions" />
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;

              return (
                <div key={faq.q} className="faq-item">
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-lg text-ink text-left">{faq.q}</span>
                    <span className="shrink-0 text-xl leading-none text-brand" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-6 text-ink-muted">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
