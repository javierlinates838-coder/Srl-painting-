import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-parchment">
      <div className="container-main">
        <Reveal>
          <SectionHead
            overline="Clients"
            title="In their words."
          />
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <figure>
                <blockquote className="pull-quote">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-[var(--line)] pt-4">
                  <p className="text-[0.875rem] font-medium text-ink">{r.name}</p>
                  <p className="mt-0.5 text-[0.8125rem] text-umber-light">{r.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-16">
          <SectionHead overline="Coverage" title="Where we work." />
          <ul className="mt-10 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="bg-parchment px-5 py-6">
                <p className="font-display text-[1.125rem] text-ink">{a.city}</p>
                <p className="mt-1 text-[0.8125rem] text-umber-light">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
