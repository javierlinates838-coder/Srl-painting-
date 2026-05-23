import { Reveal } from "./reveal";

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
    <section className="border-y border-black/6 bg-white py-14 sm:py-16">
      <div className="container-main">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="label">Why SRL</p>
            <h2 className="display-lg mt-3 text-black">Built on trust, not shortcuts</h2>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <div className="card-lift flex h-full flex-col rounded-2xl border border-black/6 bg-paper p-6">
                <span className="icon-box h-11 w-11">{r.icon}</span>
                <h3 className="font-display mt-4 text-[15px] font-bold text-black">{r.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
