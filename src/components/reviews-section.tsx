"use client";

import { useState } from "react";
import { reviews } from "@/lib/site";
import { Reveal } from "./reveal";

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const review = reviews[current];

  function prev() {
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  }

  return (
    <section id="reviews" className="section-pad bg-ivory border-t border-[var(--line)]" aria-labelledby="reviews-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">Clients</p>
          <h2 id="reviews-heading" className="display-md mt-4 text-ink">What homeowners say.</h2>
        </Reveal>

        <Reveal delay={1}>
          <figure className="review-slide mt-12 max-w-3xl">
            <p className="font-display text-6xl leading-none text-brand/30" aria-hidden>&ldquo;</p>
            <blockquote className="font-display text-2xl leading-snug text-ink sm:text-3xl">
              {review.quote}
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-sm font-medium text-ink">{review.name}</p>
              <p className="text-xs text-ink-light">{review.detail}</p>
              {"source" in review && review.source ? (
                <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-light">{review.source}</p>
              ) : null}
            </figcaption>
          </figure>

          <div className="mt-10 flex items-center gap-6">
            <button type="button" onClick={prev} className="btn btn-line btn-sm" aria-label="Previous review">
              Prev
            </button>
            <p className="meta tabular-nums">
              {(current + 1).toString().padStart(2, "0")} / {reviews.length.toString().padStart(2, "0")}
            </p>
            <button type="button" onClick={next} className="btn btn-line btn-sm" aria-label="Next review">
              Next
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
