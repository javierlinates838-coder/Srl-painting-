import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

function ReviewCard({
  quote,
  name,
  detail,
  rating,
  featured = false,
}: (typeof reviews)[number] & { featured?: boolean }) {
  return (
    <blockquote className={`testimonial-card relative flex h-full flex-col ${featured ? "testimonial-featured" : ""}`}>
      <span className="absolute right-6 top-2 font-display text-7xl leading-none text-brand/10" aria-hidden>&ldquo;</span>
      <div className="flex gap-0.5 text-gold">
        {Array.from({ length: rating }).map((_, j) => (
          <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className={`relative mt-5 flex-1 leading-relaxed text-ink ${featured ? "font-display text-2xl sm:text-3xl" : "text-[15px]"}`}>
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
          {name.charAt(0)}
        </span>
        <div>
          <p className="font-display text-lg leading-none text-ink">{name}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-stone-500">{detail}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <Reveal>
            <SectionHead label="Client notes" title={<>The finish gets noticed.<br /><span className="text-brand">So does the service.</span></>} />
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[14px] leading-7 text-stone-600">
              The best compliment is being trusted with the next room, the next property, or the next referral.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <ReviewCard {...r} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-12">
          <SectionHead label="Service area" title="From the valley to Los Angeles." />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="flex items-center gap-3 border-t border-ink/10 py-4">
                <span className="icon-box h-9 w-9 shrink-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-xl text-ink">{a.city}</p>
                  <p className="text-[11px] text-stone-500">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
