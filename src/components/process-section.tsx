import { process } from "@/lib/site";

export function ProcessSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <div className="accent-rule mx-auto" />
          <p className="label mt-4">How it works</p>
          <h2 className="display-lg mt-3 text-black">
            Simple process.<br />
            <span className="text-gradient-dark">Serious results.</span>
          </h2>
          <p className="body-lg mt-4">From first DM to final walkthrough — no surprises, no runaround.</p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li
              key={step.num}
              className="card-lift group relative overflow-hidden rounded-2xl border border-black/6 bg-white p-7 shadow-sm"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/5 transition group-hover:bg-brand/10" aria-hidden />
              <span className="font-display text-4xl font-extrabold text-brand/20">{step.num}</span>
              <h3 className="font-display relative mt-3 text-[16px] font-bold text-black">{step.title}</h3>
              <p className="relative mt-2 text-[13px] leading-relaxed text-zinc-600">{step.text}</p>
              {i < process.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand/30 lg:block" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
