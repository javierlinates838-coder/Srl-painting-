"use client";

import { useEffect, useState } from "react";
import { reviews, serviceAreas } from "@/lib/site";

export function ReviewsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-main">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="accent-rule" />
            <p className="label mt-4">Reviews</p>
            <h2 className="display-lg mt-3 text-black">Clients who hired us again</h2>

            <div className="relative mt-10 min-h-[240px]">
              {reviews.map((r, i) => (
                <blockquote
                  key={r.name}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="surface relative overflow-hidden p-8">
                    <span className="font-display absolute -right-2 -top-4 text-8xl leading-none text-brand/10" aria-hidden>&ldquo;</span>
                    <div className="relative flex gap-0.5 text-brand">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                        </svg>
                      ))}
                    </div>
                    <p className="relative mt-5 text-[17px] leading-relaxed text-zinc-800">&ldquo;{r.quote}&rdquo;</p>
                    <footer className="relative mt-6 flex items-center gap-3 border-t border-black/6 pt-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                        {r.name.charAt(0)}
                      </span>
                      <div>
                        <p className="font-display font-bold text-black">{r.name}</p>
                        <p className="text-[13px] text-zinc-500">{r.detail}</p>
                      </div>
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-brand" : "w-2 bg-black/10 hover:bg-black/25"}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="label">Service areas</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-black">Where we work</h3>
            <p className="mt-2 text-[14px] text-zinc-600">Kern County and Southern California — ask about your project.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {serviceAreas.map((a) => (
                <li key={a.city} className="card-lift surface flex items-center gap-4 px-5 py-4">
                  <span className="icon-box h-10 w-10 shrink-0">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display font-bold text-black">{a.city}</p>
                    <p className="text-[12px] text-zinc-500">{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
