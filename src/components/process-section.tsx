import { process } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad overflow-hidden bg-cream">
      <div className="container-main">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHead
              label="The process"
              title={<>Straightforward from<br /><span className="text-brand">hello to handoff.</span></>}
              description="A clear scope, a protected space, and no disappearing act."
            />
          </Reveal>
          <Reveal delay={2}>
            <p className="max-w-sm text-[12px] font-bold uppercase leading-6 tracking-[0.14em] text-stone-500">
              One crew · One standard · One finished space you&apos;re proud of
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} as="li" delay={(i + 1) as 1 | 2 | 3 | 4} layout="contents">
              <div className={`process-step h-full py-8 sm:p-7 ${i % 2 === 1 ? "sm:border-l" : ""} ${i > 0 ? "border-t sm:border-t-0 lg:border-l" : ""}`}>
                <span className="font-display text-6xl leading-none text-brand/20">{step.num}</span>
                <h3 className="font-display mt-8 text-2xl leading-tight text-ink">{step.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-stone-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
