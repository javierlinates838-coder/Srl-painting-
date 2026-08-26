import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

function ReviewCard({ quote, name, detail, rating }: (typeof reviews)[number]) {
  return (
    <blockquote className="card review-card-accent relative flex h-full flex-col py-8 pl-8 pr-7">
      <svg className="absolute right-6 top-6 h-8 w-8 text-brand/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.29l.865 1.45A7.028 7.028 0 005.5 11c0 1.18.45 2.227 1.083 3.321zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.29l.865 1.45A7.028 7.028 0 0015.5 11c0 1.18.45 2.227 1.083 3.321z" />
      </svg>
      <div className="flex gap-0.5 text-brand">
        {Array.from({ length: rating }).map((_, j) => (
          <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-zinc-800">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 flex items-center gap-3 border-t border-black/6 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-display text-sm font-bold text-white">
          {name.charAt(0)}
        </span>
        <div>
          <p className="font-display text-[14px] font-bold text-black">{name}</p>
          <p className="text-[12px] text-zinc-500">{detail}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Reviews"
            title={
              <>
                Real clients. <span className="text-gradient-dark">Real results.</span>
              </>
            }
            description="Don't take our word for it — hear from homeowners and businesses across Kern County and LA."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <ReviewCard {...r} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-black/6 pt-14">
          <SectionHead label="Service areas" title="Where we work" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="card group flex items-center gap-3.5 px-5 py-5 transition-transform hover:-translate-y-0.5">
                <span className="icon-box h-10 w-10 shrink-0 transition-transform group-hover:scale-110">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                <div>
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
