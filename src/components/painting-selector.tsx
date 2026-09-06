"use client";

import Link from "next/link";
import { paintingOptions } from "@/lib/site";
import { useQuote } from "./quote-context";
import { Reveal } from "./reveal";

export function PaintingSelector() {
  const { draft, setField } = useQuote();

  function select(label: string) {
    setField("service", label);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="start" className="section-pad bg-ivory border-t border-[var(--line)]" aria-labelledby="painting-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">Start here</p>
          <h2 id="painting-heading" className="display-lg mt-4 text-ink">
            What are we<br />working on?
          </h2>
        </Reveal>

        <div className="mt-12 max-w-2xl">
          {paintingOptions.map((opt, i) => (
            <Reveal key={opt.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <button
                type="button"
                className={`paint-option ${draft.service === opt.short ? "is-active" : ""}`}
                onClick={() => select(opt.short)}
              >
                <span className="paint-option-label">{opt.label}</span>
                <span className="paint-option-arrow" aria-hidden>→</span>
              </button>
            </Reveal>
          ))}
        </div>

        {draft.service && (
          <Reveal>
            <p className="mt-8 body-sm">
              Selected: <strong className="text-ink">{draft.service}</strong> — continue to{" "}
              <Link href="#contact" className="text-brand underline-offset-2 hover:underline">
                request an estimate
              </Link>
              .
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
