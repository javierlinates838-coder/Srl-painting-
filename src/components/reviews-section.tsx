import { reviews, serviceAreas } from "@/lib/site";
import { Reveal } from "./reveal";
import { IosGroup, IosRow } from "./ios-group";
import { SectionHead } from "./section-head";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad">
      <div className="container-main space-y-3">
        <Reveal>
          <SectionHead overline="Clients" title="Reviews" />
        </Reveal>

        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
            <IosGroup className="mt-2">
              <IosRow>
                <span className="ios-row-content">
                  <span className="ios-body block leading-relaxed">&ldquo;{r.quote}&rdquo;</span>
                  <span className="ios-headline mt-3 block">{r.name}</span>
                  <span className="ios-footnote">{r.detail}</span>
                </span>
              </IosRow>
            </IosGroup>
          </Reveal>
        ))}

        <Reveal delay={2}>
          <div className="mt-6">
            <p className="ios-section-header">Service areas</p>
            <IosGroup>
              {serviceAreas.map((a) => (
                <IosRow key={a.city}>
                  <span className="ios-row-content flex items-center justify-between">
                    <span className="ios-body">{a.city}</span>
                    <span className="ios-footnote">{a.note}</span>
                  </span>
                </IosRow>
              ))}
            </IosGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
