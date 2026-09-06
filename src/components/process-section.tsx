import { process } from "@/lib/site";
import { Reveal } from "./reveal";

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-ivory overflow-hidden">
      <div className="container-main">
        <Reveal>
          <p className="meta-brand">Process</p>
          <h2 className="editorial-lg mt-4 max-w-lg text-ink">How a project runs.</h2>
        </Reveal>

        <div className="process-rail mt-14 scrollbar-hide" role="list">
          {process.map((step, i) => (
            <Reveal key={step.num} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="process-step" role="listitem">
                <p className="process-num">{step.num}</p>
                <div className="mt-4 h-px w-12 bg-brand" aria-hidden />
                <h3 className="font-display mt-5 text-xl text-ink">{step.title}</h3>
                <p className="body-sm mt-3">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
