"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/lib/site";

export function ReviewsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label">Service areas</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Proudly serving California
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Based in Kern County with projects across Central and Southern California.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { city: "Bakersfield", region: "Kern County" },
                { city: "Shafter", region: "Kern County" },
                { city: "Tehachapi", region: "Kern County" },
                { city: "Los Angeles", region: "LA County" },
              ].map((area) => (
                <li
                  key={area.city}
                  className="rounded-xl border border-ink/8 bg-white px-5 py-4"
                >
                  <p className="font-semibold text-ink">{area.city}</p>
                  <p className="text-sm text-ink-muted">{area.region}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Reviews</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
              Trusted by homeowners &amp; businesses
            </h2>

            <div className="relative mt-10 min-h-[220px] overflow-hidden">
              {reviews.map((review, index) => (
                <article
                  key={review.quote}
                  className={`absolute inset-0 rounded-2xl border border-ink/8 bg-white p-8 shadow-sm transition-all duration-500 ${
                    index === active
                      ? "translate-x-0 opacity-100"
                      : index < active
                        ? "-translate-x-8 opacity-0"
                        : "translate-x-8 opacity-0"
                  }`}
                >
                  <div className="mb-4 flex gap-1 text-maroon" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg leading-relaxed text-ink">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-5 text-sm text-ink-muted">
                    — {review.author}, {review.location}
                  </footer>
                </article>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-maroon" : "w-2 bg-ink/15 hover:bg-ink/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
