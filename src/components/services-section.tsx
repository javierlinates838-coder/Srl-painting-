import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            overline="Services"
            title="What we paint"
            description="Residential, commercial, and cabinets — same crew, same standard."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="site-card site-card-pad flex h-full flex-col">
                <p className="ios-caption font-semibold text-ios-brand">{s.roman}</p>
                <h3 className="ios-title-3 mt-2">{s.title}</h3>
                <p className="ios-subhead mt-1">{s.summary}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="ios-footnote flex gap-2">
                      <span className="text-ios-tint">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="ios-btn ios-btn-gray mt-5 w-full sm:w-auto">
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
