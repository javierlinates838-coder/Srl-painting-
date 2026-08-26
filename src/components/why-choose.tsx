import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const reasons = [
  {
    title: "A license you can check",
    text: "California C-33, #1108313. Licensed, bonded, and linked to the CSLB so you are not guessing who is on your property.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Prep is the product",
    text: "Repair, sand, prime, mask. Color is the last 20%. The rest is why the finish still looks right after a Kern County summer.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "A number before the work",
    text: "Written scope and price up front. If the job changes, you hear it before we do it — not on an invoice you did not expect.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M9 12h6M9 16h6M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Local, not a franchise van",
    text: "A Kern County crew that already knows valley stucco, Tehachapi weather, and how Los Angeles jobs have to stay out of your way.",
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
    <section className="border-y border-black/6 bg-paper section-pad">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Why SRL"
            title="Hire the crew that treats prep like the job."
            description="Anyone can roll color. We are hired for the work that keeps that color looking like a decision, not a shortcut."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <div className="card h-full p-6">
                <span className="icon-box h-11 w-11">{r.icon}</span>
                <h3 className="font-display mt-5 text-lg font-medium text-black">{r.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
