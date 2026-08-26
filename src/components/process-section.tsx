import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-chalk">
      <div className="container-main">
        <Reveal>
          <SectionHead
            overline="How it works"
            title="Four steps. No mystery."
          />
        </Reveal>

        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div>
                <span className="step-num" aria-hidden>
                  {step.num}
                </span>
                <h3 className="headline-md mt-4">{step.title}</h3>
                <p className="prose-body-sm mt-3">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
