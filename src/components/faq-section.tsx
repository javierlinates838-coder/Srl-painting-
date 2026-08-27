"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";
import { IosGroup, IosRow } from "./ios-group";
import { SectionHead } from "./section-head";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-pad bg-charcoal">
      <div className="container-main space-y-3">
        <Reveal>
          <SectionHead overline="FAQ" title="Common questions" />
        </Reveal>

        <Reveal delay={1}>
          <IosGroup className="mt-2">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;

              return (
                <div key={faq.q}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="ios-row ios-row-tappable w-full"
                  >
                    <span className="ios-row-content">
                      <span className="ios-headline block text-left">{faq.q}</span>
                      {isOpen && (
                        <span id={panelId} role="region" aria-labelledby={buttonId} className="ios-footnote mt-2 block text-left leading-relaxed">
                          {faq.a}
                        </span>
                      )}
                    </span>
                    <span className="ios-caption shrink-0">{isOpen ? "−" : "+"}</span>
                  </button>
                </div>
              );
            })}
          </IosGroup>
        </Reveal>
      </div>
    </section>
  );
}
