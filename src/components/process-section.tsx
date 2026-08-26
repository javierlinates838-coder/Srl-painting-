import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="How a job actually goes"
            title={
              <>
                Four steps. No mystery. <span className="text-gradient-dark">No runaround.</span>
              </>
            }
            description="From the first photo on Instagram to the walkthrough at the door — you always know what happens next."
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div className="card relative h-full overflow-hidden p-6">
                <span className="font-display text-4xl italic leading-none text-brand/15">{step.num}</span>
                <h3 className="font-display mt-4 text-lg font-medium text-black">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
