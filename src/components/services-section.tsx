import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-section">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Services"
            title="What we paint"
            description="Residential, commercial, and cabinets — same crew, same prep-first standard on every job."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="service-card h-full">
                <div className="service-card-image">
                  <Image
                    src={s.image}
                    alt={`${s.title} painting project by SRL Painting`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink-muted">{s.summary}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="btn btn-outline mt-6 w-full sm:w-auto">
                    Request estimate
                    <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
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
