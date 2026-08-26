import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-cream">
      <div className="container-main">
        <div className="grid gap-8 border-b border-ink/10 pb-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <Reveal>
            <SectionHead
              label="Services"
              title={<>One careful crew.<br /><span className="text-brand">Every surface covered.</span></>}
              description="From a single set of cabinets to a full commercial repaint, the standard stays the same: protect, prepare, finish clean."
            />
          </Reveal>
          <Reveal delay={2}>
            <p className="border-l-2 border-gold pl-5 text-[15px] leading-7 text-stone-600">
              Good paint is the last 10% of the job. The other 90% is knowing how to prepare the surface underneath it.
            </p>
          </Reveal>
        </div>

        <div className="mt-4 grid lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="service-card group flex h-full flex-col py-8 lg:p-9">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-3 text-3xl leading-none text-ink sm:text-4xl">{s.title}</h3>
                  </div>
                  <span className="service-arrow" aria-hidden>↗</span>
                </div>
                <p className="mt-5 text-[15px] font-semibold text-stone-700">{s.summary}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-ink/10 pt-5">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-3 text-[13px] leading-relaxed text-stone-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
                  Discuss this service <span aria-hidden>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
