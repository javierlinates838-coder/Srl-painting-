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
            description="From first message to final walkthrough — no surprises, no runaround."
          />
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div className="card h-full p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                  {step.num}
                </span>
                <h3 className="font-display mt-4 text-[15px] font-bold text-black">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
