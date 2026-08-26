import Link from "next/link";
import type { ReactNode } from "react";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const icons: Record<string, ReactNode> = {
  residential: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M3 12l9-9 9 9M5 10v10h14V10" />
    </svg>
  ),
  commercial: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M4 21V8l8-4 8 4v13M9 21v-6h6v6" />
    </svg>
  ),
  cabinets: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path strokeLinecap="round" d="M4 12h16M12 4v16" />
    </svg>
  ),
  "new-cabinets": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M12 3v18M8 7h8M8 17h8" />
      <rect x="6" y="9" width="12" height="6" rx="1" />
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Services"
            title={
              <>
                Four specialties. <span className="text-gradient-dark">One standard.</span>
              </>
            }
            description="Every job gets the same prep-first treatment — thorough surface work, premium products, and a crew that respects your property."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="card-premium flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-box h-12 w-12">{icons[s.id]}</span>
                  <span className="service-num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-black">{s.title}</h3>
                <p className="mt-2 text-[15px] text-zinc-600">{s.summary}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-3 text-[13px] leading-relaxed text-zinc-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="btn btn-brand mt-7 w-full !text-[13px] sm:w-auto">
                  Get an estimate
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
