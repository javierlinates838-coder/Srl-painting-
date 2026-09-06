import Image from "next/image";
import { craftDetails } from "@/lib/site";
import { Reveal } from "./reveal";

const spanClass = {
  wide: "craft-span-wide",
  tall: "craft-span-tall",
  square: "craft-span-square",
} as const;

export function CraftSection() {
  return (
    <section className="section-pad bg-charcoal" aria-labelledby="craft-heading">
      <div className="container-main">
        <Reveal>
          <div className="max-w-2xl">
            <p className="meta-brand text-white/50">Craft</p>
            <h2 id="craft-heading" className="editorial-lg mt-4 text-ivory">
              The part you don&apos;t see
              <br />
              <span className="italic text-white/80">is the part that matters.</span>
            </h2>
            <p className="body-text mt-6 text-white/65">
              What you notice is the color and the sheen. What you don&apos;t see is the scraping, the primer, the masking — and that&apos;s the point.
            </p>
          </div>
        </Reveal>

        <div className="craft-grid mt-14">
          {craftDetails.map((item, i) => (
            <Reveal key={item.label} delay={Math.min(i + 1, 3) as 1 | 2 | 3} layout="contents">
              <figure className={`craft-cell ${spanClass[item.aspect]}`}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/75">{item.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
