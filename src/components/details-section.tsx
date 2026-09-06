import { prepDetails } from "@/lib/site";
import { Reveal } from "./reveal";

export function DetailsSection() {
  return (
    <section className="section-pad bg-charcoal" aria-labelledby="details-heading">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand text-white/50">Craft</p>
          <h2 id="details-heading" className="display-lg mt-4 text-ivory">
            What you see<br />
            <span className="italic text-white/70">is the finish.</span>
          </h2>
          <p className="display-md mt-8 text-white/80">
            What matters<br />
            is everything<br />
            <span className="text-brand">under it.</span>
          </p>
        </Reveal>

        <div className="details-stack mt-16 max-w-3xl">
          {prepDetails.map((item, i) => (
            <Reveal key={item.label} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className="detail-row border-white/10">
                <p className="detail-label text-brand">{item.label}</p>
                <p className="body-sm text-white/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
