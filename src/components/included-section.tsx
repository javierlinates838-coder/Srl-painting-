import { included } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function IncludedSection() {
  return (
    <section className="bg-dark section-pad text-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            light
            label="What's included"
            title={
              <>
                The job is more than <span className="text-gradient">the color.</span>
              </>
            }
            description="Every estimate is built around this list. If a surface needs more, we write that down before we start — not after the walls are open."
          />
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <Reveal key={item.title} as="li" delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
              <div className="surface-dark h-full p-6">
                <span className="font-display text-[13px] italic text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-3 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
