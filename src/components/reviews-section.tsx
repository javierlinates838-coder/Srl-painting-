"use client";

import { useEffect, useState } from "react";
import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";

function ReviewCard({ quote, name, detail, rating }: (typeof reviews)[number]) {
  return (
    <div className="surface relative flex h-full flex-col overflow-hidden p-7">
      <span className="font-display absolute -right-2 -top-4 text-7xl leading-none text-brand/10" aria-hidden>
        &ldquo;
      </span>
      <div className="relative flex gap-0.5 text-brand">
        {Array.from({ length: rating }).map((_, j) => (
          <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-zinc-800">&ldquo;{quote}&rdquo;</p>
      <footer className="relative mt-5 flex items-center gap-3 border-t border-black/6 pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
          {name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="font-display text-[14px] font-bold text-black">{name}</p>
          <p className="text-[12px] text-zinc-500">{detail}</p>
        </div>
      </footer>
    </div>
  );
}

export function ReviewsSection() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, [isMobile]);

  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <div className="accent-rule" />
          <p className="label mt-4">Reviews</p>
          <h2 className="display-lg mt-3 text-black">Clients who hired us again</h2>
        </Reveal>

        {/* Desktop grid */}
        <div className="mt-10 hidden items-stretch gap-5 lg:grid lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} className="h-full">
              <ReviewCard {...r} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 lg:hidden">
          <div className="relative min-h-[280px]">
            {reviews.map((r, i) => (
              <blockquote
                key={r.name}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
                }`}
              >
                <ReviewCard {...r} />
              </blockquote>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
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

        <div className="mt-14 border-t border-black/6 pt-14">
          <p className="label">Service areas</p>
          <h3 className="font-display mt-2 text-2xl font-bold text-black">Where we work</h3>
          <p className="mt-2 text-[14px] text-zinc-600">
            Kern County and Southern California — ask about your project.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="card-lift surface flex items-center gap-4 px-5 py-4">
                <span className="icon-box h-10 w-10 shrink-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-black">{a.city}</p>
                  <p className="text-[12px] text-zinc-500">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
