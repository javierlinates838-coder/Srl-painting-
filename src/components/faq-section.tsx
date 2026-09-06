"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "./reveal";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-pad-sm border-t border-[var(--line)] bg-stone">
      <div className="container-main max-w-2xl">
        <Reveal>
          <p className="meta-brand">FAQ</p>
          <h2 className="display-md mt-4 text-ink">Common questions.</h2>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-${i}`;
              const num = (i + 1).toString().padStart(2, "0");
              return (
                <div key={faq.q} className="faq-item">
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq-num">{num}</span>
                    <span className="font-display text-lg text-left text-ink flex-1">{faq.q}</span>
                    <span className="shrink-0 text-brand" aria-hidden>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div id={panelId} className="pb-6 pl-8 body-sm">
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
