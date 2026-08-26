import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { IosGroup, IosRow } from "./ios-group";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad">
      <div className="container-main space-y-3">
        <Reveal>
          <SectionHead overline="Process" title="How it works" />
        </Reveal>

        <Reveal delay={1}>
          <IosGroup className="mt-2">
            {process.map((step) => (
              <IosRow key={step.num}>
                <span className="ios-row-content flex gap-3">
                  <span className="ios-title-2 text-ios-tint">{step.num}</span>
                  <span>
                    <span className="ios-headline block">{step.title}</span>
                    <span className="ios-footnote mt-1 block">{step.text}</span>
                  </span>
                </span>
              </IosRow>
            ))}
          </IosGroup>
        </Reveal>
      </div>
    </section>
  );
}
