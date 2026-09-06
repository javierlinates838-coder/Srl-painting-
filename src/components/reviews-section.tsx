import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-section">
      <div className="container-main">
        <Reveal>
          <SectionHead align="center" label="Reviews" title="What clients say" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <figure className="card flex h-full flex-col p-7 sm:p-8">
                <blockquote className="review-quote flex-1">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-[var(--line)] pt-5">
                  <p className="font-semibold text-ink">{r.name}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{r.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--line)] pt-16">
          <Reveal>
            <SectionHead align="center" label="Service areas" title="Where we work" />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a, i) => (
              <Reveal key={a.city} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
                <li className="card p-5 text-center">
                  <p className="font-display text-lg text-ink">{a.city}</p>
                  <p className="mt-1 text-sm text-ink-muted">{a.note}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
