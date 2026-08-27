import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-paper">
      <div className="container-main">
        <Reveal>
          <SectionHead align="center" light overline="Process" title="How it works" />
        </Reveal>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div className="site-card site-card-pad h-full">
                <span className="ios-title-1 text-ios-tint">{step.num}</span>
                <h3 className="ios-headline mt-3">{step.title}</h3>
                <p className="ios-footnote mt-2 leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
