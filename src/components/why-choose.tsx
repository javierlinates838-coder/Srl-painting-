import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const trustPoints = [
  {
    title: "Licensed C-33 contractor",
    text: `California license #${site.license}, bonded. Verify on the CSLB website anytime.`,
  },
  {
    title: "Prep-first on every job",
    text: pillars[0].text,
  },
  {
    title: "Written scope before work starts",
    text: pillars[2].text,
  },
];

export function WhyChoose() {
  return (
    <section className="section-pad bg-section-warm" aria-labelledby="why-srl-heading">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHead
              label="Why SRL"
              title={<span id="why-srl-heading">Why homeowners hire us</span>}
              description="Licensed work, careful prep, and a crew that respects your home — from the first walkthrough to the final cleanup."
            />
            <ul className="mt-8 space-y-3 text-sm text-ink-muted">
              <li>Interior, exterior, commercial, and cabinet painting</li>
              <li>Free estimates with written scope</li>
              <li>Serving Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles</li>
            </ul>
          </Reveal>

          <div className="space-y-0 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {trustPoints.map((point, i) => (
              <Reveal key={point.title} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <article className="py-8 first:pt-0 last:pb-0">
                  <h3 className="font-display text-xl text-ink">{point.title}</h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">{point.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
