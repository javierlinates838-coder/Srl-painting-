import { reviews } from "@/lib/site";
import { Reveal } from "./reveal";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad-sm bg-ivory border-t border-[var(--line)]">
      <div className="container-main">
        <p className="meta-brand">Clients</p>
        <p className="body-sm mt-3">Homeowners across Bakersfield and Kern County — also on Google and Yelp.</p>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <figure>
                <blockquote className="font-display text-xl leading-snug text-ink">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-medium text-ink">{r.name}</p>
                  <p className="text-xs text-ink-light">{r.detail}</p>
                  {"source" in r && r.source ? (
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-light">{r.source}</p>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
