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
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="accent-rule" />
            <p className="label mt-4">Client feedback</p>
            <h2 className="display-lg mt-3 text-black">Trusted across Kern County &amp; LA</h2>

            <div className="relative mt-10 min-h-[220px]">
              {reviews.map((r, i) => (
                <blockquote
                  key={r.name}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-5 text-[17px] leading-relaxed text-zinc-800">&ldquo;{r.quote}&rdquo;</p>
                  <footer className="mt-5 border-t border-black/8 pt-4">
                    <p className="font-display font-bold text-black">{r.name}</p>
                    <p className="text-[13px] text-zinc-500">{r.detail}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-brand" : "w-2 bg-black/10 hover:bg-black/20"}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="label">Service areas</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-black">Where we work</h3>
            <ul className="mt-6 space-y-3">
              {serviceAreas.map((a) => (
                <li key={a.city} className="surface flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-tint text-brand">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
                        <circle cx="12" cy="11" r="2.5" />
                      </svg>
                    </span>
                    <span className="font-display font-bold text-black">{a.city}</span>
                  </div>
                  <span className="text-[12px] text-zinc-500">{a.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
