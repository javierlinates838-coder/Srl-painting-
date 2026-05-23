import { reviews, serviceAreas } from "@/lib/site";

export function ReviewsSection() {
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
              Not sure if we cover your area? Reach out—we respond quickly.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
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

            <ul className="mt-10 space-y-5">
              {reviews.map((review) => (
                <li
                  key={review.quote}
                  className="rounded-2xl border border-ink/8 bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 flex gap-1 text-maroon" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed text-ink">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-4 text-sm text-ink-muted">
                    — {review.author}, {review.location}
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
