import type { ReactNode } from "react";
import { services } from "@/lib/site";

const icons: Record<string, ReactNode> = {
  home: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15v18h-15V3zm3 3h.008v.008H7.5V6zm0 3h.008v.008H7.5V9zm0 3h.008v.008H7.5V12zm3-6h.008v.008H10.5V6zm0 3h.008v.008H10.5V9zm0 3h.008v.008H10.5V12zm3-6h.008v.008H13.5V6zm0 3h.008v.008H13.5V9zm0 3h.008v.008H13.5V12z" />
    </svg>
  ),
  cabinet: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM8.25 3.75v16.5M15.75 3.75v16.5" />
    </svg>
  ),
  sparkle: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-lg">
          <p className="eyebrow">Services</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-ink sm:text-4xl">
            What we do best
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            Four core specialties. Every project gets the same prep, products, and attention to detail.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="card group p-6 transition hover:border-maroon/20 hover:shadow-[0_8px_30px_var(--maroon-glow)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-maroon-soft text-maroon transition group-hover:bg-maroon group-hover:text-white">
                {icons[s.icon]}
              </div>
              <h3 className="font-heading mt-4 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
