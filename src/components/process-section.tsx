import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-section-alt">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Process"
            title="How hiring us works"
            description="Five clear steps — from your first estimate request to the final walkthrough."
          />
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <div className="process-step h-full" data-step={step.num}>
                <h3 className="font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
