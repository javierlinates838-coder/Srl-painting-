import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Services"
            title="Four specialties. One standard."
            description="Thorough prep, quality coatings, and a crew that treats your property like their own."
          />
        </Reveal>

        <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <article className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] lg:items-start lg:gap-10 lg:py-10">
                <div>
                  <p className="font-display text-sm font-bold tracking-[0.12em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-ink sm:text-[1.65rem]">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{s.summary}</p>
                </div>
                <ul className="space-y-2.5">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="btn btn-outline-dark w-full self-center lg:w-auto">
                  Get estimate
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
