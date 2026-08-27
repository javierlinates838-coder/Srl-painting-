import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-surface">
      <div className="container-main">
        <Reveal>
          <SectionHead align="center" overline="Reviews" title="What clients say" />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <figure className="site-card site-card-pad flex h-full flex-col">
                <blockquote className="ios-body flex-1 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 border-t border-[var(--ios-separator)] pt-4">
                  <p className="ios-headline">{r.name}</p>
                  <p className="ios-footnote">{r.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-[var(--ios-separator)] pt-12">
          <SectionHead overline="Service areas" title="Where we work" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="site-card site-card-pad">
                <p className="ios-headline">{a.city}</p>
                <p className="ios-footnote mt-1">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
