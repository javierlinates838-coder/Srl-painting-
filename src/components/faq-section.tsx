"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-ink/8 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="section-label justify-center before:hidden">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
            Common questions
          </h2>
          <p className="mt-4 text-ink-muted">
            Everything you need to know before starting your project.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-ink/8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition ${isOpen ? "rotate-45 bg-maroon/5 text-maroon" : ""}`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base leading-relaxed text-ink-muted">{faq.answer}</p>
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
