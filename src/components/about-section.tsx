import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { IosGroup, IosRow } from "./ios-group";
import { SectionHead } from "./section-head";

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-main space-y-3">
        <Reveal>
          <SectionHead
            overline="About"
            title={site.name}
            description="Licensed C-33 contractor based in Kern County. We show up, prep right, and leave clean."
          />
        </Reveal>

        <Reveal delay={1}>
          <IosGroup className="mt-2">
            <IosRow>
              <span className="ios-row-content flex justify-between">
                <span className="ios-body">License</span>
                <span className="ios-subhead">#{site.license}</span>
              </span>
            </IosRow>
            <IosRow>
              <span className="ios-row-content flex justify-between">
                <span className="ios-body">Classification</span>
                <span className="ios-subhead">C-33</span>
              </span>
            </IosRow>
            <IosRow href={site.licenseVerifyUrl} chevron>
              <span className="ios-body text-ios-tint">Verify on CSLB</span>
            </IosRow>
          </IosGroup>
        </Reveal>

        <Reveal delay={2}>
          <p className="ios-section-header mt-4">Our approach</p>
          <IosGroup>
            {pillars.map((p, i) => (
              <IosRow key={p.title}>
                <span className="ios-row-content flex gap-3">
                  <span className="ios-caption font-semibold text-ios-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="ios-headline block">{p.title}</span>
                    <span className="ios-footnote mt-1 block leading-relaxed">{p.text}</span>
                  </span>
                </span>
              </IosRow>
            ))}
          </IosGroup>
        </Reveal>

        <Link href="#contact" className="ios-btn ios-btn-brand mt-4 w-full">
          Get Estimate
        </Link>
      </div>
    </section>
  );
}
