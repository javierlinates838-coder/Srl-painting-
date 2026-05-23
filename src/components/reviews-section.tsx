"use client";

import { useEffect, useState } from "react";
import { reviews, serviceAreas } from "@/lib/site";

export function ReviewsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Reviews */}
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-ink">What clients say</h2>

            <div className="relative mt-8 min-h-[180px]">
              {reviews.map((r, i) => (
                <blockquote
                  key={r.quote}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="flex gap-0.5 text-maroon">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink">&ldquo;{r.quote}&rdquo;</p>
                  <footer className="mt-4 text-[13px] text-ink-muted">
                    {r.author} · {r.location}
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-4 flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-maroon" : "w-1.5 bg-border hover:bg-ink-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <p className="eyebrow">Coverage</p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-ink">Where we work</h2>
            <p className="mt-3 text-[15px] text-ink-muted">
              Central and Southern California. Not sure if we cover you? Just ask.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {serviceAreas.map((city) => (
                <li
                  key={city}
                  className="card flex items-center gap-3 px-4 py-3.5 text-[14px] font-semibold text-ink"
                >
                  <span className="flex h-2 w-2 rounded-full bg-maroon" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
