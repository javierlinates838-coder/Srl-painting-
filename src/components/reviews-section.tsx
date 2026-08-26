import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

function ReviewCard({ quote, name, detail, rating }: (typeof reviews)[number]) {
  return (
    <blockquote className="card review-card-accent relative flex h-full flex-col py-8 pl-8 pr-6">
      <div className="flex gap-0.5 text-brand" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, j) => (
          <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className="font-display mt-5 flex-1 text-[1.15rem] font-medium leading-relaxed text-pretty text-zinc-800">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-black/6 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm italic text-white">
          {name.charAt(0)}
        </span>
        <div>
          <p className="font-display text-[15px] font-medium text-black">{name}</p>
          <p className="text-[12px] text-zinc-500">{detail}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad bg-paper">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="From the houses"
            title="What it is like when the job is done."
            description="Neighbors in Bakersfield, Shafter, and Los Angeles — after the drop cloths came up."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <ReviewCard {...r} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-black/8 pt-14">
          <SectionHead
            label="Where we work"
            title="Kern County, the mountains, and Los Angeles."
            description="A regular map — not a 200-mile radius we hope to cover someday."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <li key={a.city} className="card flex flex-col justify-center px-5 py-5">
                <p className="font-display text-xl font-medium text-black">{a.city}</p>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-zinc-500">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
