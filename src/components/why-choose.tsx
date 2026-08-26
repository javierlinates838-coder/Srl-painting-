import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const reasons = [
  {
    title: "Licensed C-33",
    text: "California contractor · Lic. 1108313 · bonded and insured.",
  },
  {
    title: "Prep-first approach",
    text: "Cracks fixed, surfaces primed, everything masked before color goes on.",
  },
  {
    title: "Free estimates",
    text: "Clear written scope and pricing before work starts. No surprise add-ons.",
  },
  {
    title: "Local Kern County crew",
    text: "Bakersfield-based team serving Kern County and Southern California.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-pad border-y border-black/8 bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead label="Why SRL" title="Built on trust, not shortcuts" />
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} as="li" delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <p className="font-display text-sm font-bold tracking-[0.12em] text-brand">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
