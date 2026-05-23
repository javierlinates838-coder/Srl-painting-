import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section className="section-pad bg-paper">
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
            description="From first DM to final walkthrough — no surprises, no runaround."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="process-line" aria-hidden />
          <ol className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
                <div className="premium-card group relative h-full overflow-hidden p-7">
                  <div
                    className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/5 transition duration-500 group-hover:bg-brand/12"
                    aria-hidden
                  />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-lg shadow-brand/30">
                    {step.num}
                  </span>
                  <h3 className="font-display relative mt-4 text-[16px] font-bold text-black">{step.title}</h3>
                  <p className="relative mt-2 text-[13px] leading-relaxed text-zinc-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
