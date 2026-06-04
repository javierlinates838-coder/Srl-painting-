import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

function ReviewCard({ quote, name, detail, rating }: (typeof reviews)[number]) {
  return (
    <blockquote className="card review-card-accent relative flex h-full flex-col py-7 pl-7 pr-6">
      <div className="flex gap-0.5 text-brand">
        {Array.from({ length: rating }).map((_, j) => (
          <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-800">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-black/6 pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
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
          <SectionHead align="center" label="Reviews" title="Clients who hired us again" />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <ReviewCard {...r} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-black/6 pt-12">
          <SectionHead label="Service areas" title="Where we work" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="card flex items-center gap-3 px-4 py-4">
                <span className="icon-box h-9 w-9 shrink-0">
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
