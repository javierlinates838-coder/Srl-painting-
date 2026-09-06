import { reviews } from "@/lib/site";
import { Reveal } from "./reveal";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad-sm bg-ivory border-t border-[var(--line)]">
      <div className="container-main">
        <p className="meta-brand">Clients</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
              <figure>
                <blockquote className="font-display text-xl leading-snug text-ink">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-medium text-ink">{r.name}</p>
                  <p className="text-xs text-ink-light">{r.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
