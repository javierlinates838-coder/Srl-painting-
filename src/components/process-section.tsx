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

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} className="relative">
              {i < process.length - 1 && (
                <span
                  className="absolute top-5 left-[3.25rem] hidden h-px bg-black/10 lg:block"
                  style={{ width: "calc(100% - 1rem)" }}
                  aria-hidden
                />
              )}
              <span className="font-display inline-flex h-10 w-10 items-center justify-center bg-brand text-sm font-bold text-white">
                {step.num}
              </span>
              <h3 className="font-display mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
