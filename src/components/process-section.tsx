import { process } from "@/lib/site";
import { Reveal } from "./reveal";

export function ProcessSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-main">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="accent-rule mx-auto" />
            <p className="label mt-4">How it works</p>
            <h2 className="display-lg mt-3 text-black">
              Simple process. <span className="text-gradient-dark">Serious results.</span>
            </h2>
            <p className="body-lg mt-4">From first DM to final walkthrough — no surprises, no runaround.</p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="process-line" aria-hidden />
          <ol className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} className="h-full">
                <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-black/6 bg-white p-7 shadow-sm">
                  <div
                    className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/5 transition group-hover:bg-brand/10"
                    aria-hidden
                  />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-lg shadow-brand/25">
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
