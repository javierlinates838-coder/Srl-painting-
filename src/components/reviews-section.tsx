import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead label="Reviews" title="What our clients say" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <blockquote className="flex h-full flex-col border-t-2 border-brand pt-6">
                <div className="flex gap-0.5 text-brand" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 flex-1 text-[17px] leading-relaxed text-ink">&ldquo;{r.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="font-display text-[15px] font-bold text-ink">{r.name}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{r.detail}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--line)] pt-14">
          <Reveal>
            <SectionHead label="Service areas" title="Where we work" />
          </Reveal>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="border-l-2 border-brand/30 pl-4">
                <p className="font-display text-lg font-bold text-ink">{a.city}</p>
                <p className="mt-1 text-[13px] text-muted">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
