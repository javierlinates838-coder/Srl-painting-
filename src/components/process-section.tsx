import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-canvas">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="How it works"
            title="Simple process. Serious results."
            description="From first message to final walkthrough — no surprises, no runaround."
          />
        </Reveal>

        <ol className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div
                className={`relative h-full border-t border-[var(--line)] py-8 pr-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pr-4 lg:py-2 ${
                  i === 0 ? "sm:border-l-0 sm:pl-0" : ""
                }`}
              >
                <span className="font-display text-sm font-bold tracking-[0.12em] text-brand">{step.num}</span>
                <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
