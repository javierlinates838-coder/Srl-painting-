import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { IosGroup, IosRow } from "./ios-group";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="container-main space-y-3">
        <Reveal>
          <SectionHead
            overline="Services"
            title="What we paint"
            description="Residential, commercial, and cabinets — same crew, same standard."
          />
        </Reveal>

        <Reveal delay={1}>
          <IosGroup className="mt-2">
            {services.map((s) => (
              <IosRow key={s.id} href="#contact" chevron>
                <span className="ios-row-content">
                  <span className="ios-headline block">
                    <span className="ios-caption mr-2 text-ios-brand">{s.roman}</span>
                    {s.title}
                  </span>
                  <span className="ios-footnote mt-0.5 block">{s.summary}</span>
                </span>
              </IosRow>
            ))}
          </IosGroup>
        </Reveal>

        {services.map((s, i) => (
          <Reveal key={`${s.id}-detail`} delay={Math.min(i + 2, 4) as 1 | 2 | 3 | 4}>
            <div className="mt-4">
              <p className="ios-section-header">{s.title}</p>
              <IosGroup>
                {s.details.map((d) => (
                  <IosRow key={d}>
                    <span className="ios-subhead">{d}</span>
                  </IosRow>
                ))}
                <IosRow href="#contact" chevron>
                  <span className="ios-body text-ios-tint">Request estimate</span>
                </IosRow>
              </IosGroup>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
