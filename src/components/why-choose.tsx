import { pillars } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function WhyChoose() {
  return (
    <section className="section-pad border-y border-[var(--line)] bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Why SRL"
            title="Built on trust, not shortcuts"
            description="Three promises we make on every job — residential, commercial, or cabinets."
          />
        </Reveal>

        <ol className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {pillars.map((p, i) => (
            <Reveal key={p.title} as="li" delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
              <div className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-10">
                <span className="font-display text-3xl font-bold tabular-nums text-brand/30 sm:text-4xl" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
