import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const reasons = [
  {
    title: "Licensed C-33",
    text: "California contractor · Lic. 1108313 · fully bonded and insured for your peace of mind.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Prep-first approach",
    text: "Every crack fixed, every surface primed, everything masked — before a single drop of paint.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Free estimates",
    text: "Written scope and firm pricing before work starts. No surprise add-ons, ever.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12h6M9 16h6M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Local Kern County crew",
    text: "Bakersfield-based team serving Kern County and Southern California with pride.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section className="bg-dark noise-overlay relative section-pad text-white">
      <div className="container-main relative">
        <Reveal>
          <SectionHead
            align="center"
            light
            label="Why SRL"
            title={
              <>
                Built on trust, <span className="text-gradient">not shortcuts.</span>
              </>
            }
            description="We're not the cheapest option — we're the one you call when you want it done right the first time."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <div className="glass h-full rounded-[var(--radius-lg)] p-7 transition-colors hover:bg-white/10">
                <span className="icon-box-dark flex h-11 w-11 items-center justify-center rounded-xl">{r.icon}</span>
                <h3 className="font-display mt-5 text-[16px] font-bold text-white">{r.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-400">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
