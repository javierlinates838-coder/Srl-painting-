"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-ink">Questions?</h2>
        </div>

        <ul className="mt-10 space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q} className="card overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[14px] font-semibold text-ink">{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-2 text-ink-muted transition ${isOpen ? "rotate-45" : ""}`}
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[14px] leading-relaxed text-ink-muted">{faq.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
