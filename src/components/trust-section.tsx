import { trustFacts } from "@/lib/site";
import { Reveal } from "./reveal";

export function TrustSection() {
  return (
    <section className="border-t border-[var(--line)] bg-surface" aria-label="Business credentials">
      <div className="container-main section-pad-sm">
        <Reveal>
          <p className="meta-brand">SRL Painting</p>
          <h2 className="display-md mt-3 text-ink">Licensed. Local. Ready to work.</h2>
        </Reveal>
      </div>
      <div className="container-main pb-16 sm:pb-20">
        <div className="trust-grid">
          {trustFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className="trust-cell">
                <p className="font-display text-3xl text-ink sm:text-4xl">{fact.label}</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-ink-muted">{fact.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
