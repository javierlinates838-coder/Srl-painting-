import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-paper">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="How it works"
            title={
              <>
                Simple process. <span className="text-gradient-dark">Serious results.</span>
              </>
            }
            description="From first DM to final walkthrough — no surprises, no runaround, no shortcuts."
          />
        </Reveal>

        <ol className="process-timeline mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div className="card relative h-full p-7">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-sm font-bold text-white shadow-brand">
                  {step.num}
                </span>
                <h3 className="font-display mt-5 text-[16px] font-bold text-black">{step.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
