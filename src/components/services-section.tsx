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
            title="What we paint"
            description="Four specialties. Same standard on every job — thorough prep, quality products, and a crew that respects your property."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="card flex h-full flex-col p-6 sm:p-7">
                <span className="icon-box h-11 w-11">{icons[s.id]}</span>
                <h3 className="font-display mt-4 text-lg font-bold text-black">{s.title}</h3>
                <p className="mt-1.5 text-[14px] text-zinc-600">{s.summary}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2.5 text-[13px] leading-relaxed text-zinc-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="btn btn-brand mt-6 w-full !text-[13px] sm:w-auto">
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
