import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const reasons = [
  {
    title: "Licensed C-33",
    text: "California contractor · Lic. 1108313 · bonded and insured.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Prep-first approach",
    text: "Cracks fixed, surfaces primed, everything masked before a drop of paint.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Free estimates",
    text: "Clear written scope and pricing before work starts. No surprise add-ons.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12h6M9 16h6M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Local Kern County crew",
    text: "Bakersfield-based team serving Kern County and Southern California.",
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
    <section className="section-pad bg-paper">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHead
              label="Why SRL"
              title={<>The details you don&apos;t see are the ones that make it <span className="text-brand">last.</span></>}
              description="A polished finish begins before the can opens. We make the process clear, protect what matters, and leave the space ready to enjoy."
            />
          </Reveal>

          <div className="border-t border-ink/15">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <article className="group grid grid-cols-[auto_1fr] gap-5 border-b border-ink/15 py-6 sm:grid-cols-[auto_0.55fr_1fr] sm:items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 text-brand">
                    {r.icon}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-ink">{r.title}</h3>
                  <p className="col-start-2 text-[13px] leading-6 text-stone-600 sm:col-start-auto">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
