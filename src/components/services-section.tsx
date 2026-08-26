import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-chalk">
      <div className="container-main">
        <Reveal>
          <SectionHead
            overline="What we do"
            title="Four kinds of work. Same standard on each."
            description="Residential, commercial, cabinets — the surfaces change, the approach doesn't."
          />
        </Reveal>

        <div className="mt-16">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="service-row lg:grid-cols-[3rem_1fr_1.5fr_auto] lg:items-start">
                <span className="service-roman" aria-hidden>
                  {s.roman}
                </span>
                <div>
                  <h3 className="headline-md">{s.title}</h3>
                  <p className="prose-body-sm mt-2">{s.summary}</p>
                </div>
                <ul className="space-y-1.5">
                  {s.details.map((d) => (
                    <li key={d} className="text-[0.875rem] leading-relaxed text-umber">
                      — {d}
                    </li>
                  ))}
                </ul>
                <div className="lg:pt-1">
                  <Link href="#contact" className="link-underline text-[0.8125rem] font-medium uppercase tracking-wider">
                    Inquire
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
