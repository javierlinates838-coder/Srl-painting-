import { process } from "@/lib/site";

export function ProcessSection() {
  return (
    <section className="section-pad border-y border-black/8 bg-paper">
      <div className="container-main">
        <div className="text-center">
          <div className="accent-rule mx-auto" />
          <p className="label mt-4">How it works</p>
          <h2 className="display-lg mt-3 text-black">From first message to final walkthrough</h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.num} className="bg-white p-7">
              <span className="font-display text-3xl font-extrabold text-brand/15">{step.num}</span>
              <h3 className="font-display mt-3 text-[15px] font-bold text-black">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">{step.text}</p>
              {i < process.length - 1 && (
                <span className="mt-4 hidden text-[11px] font-semibold uppercase tracking-wider text-zinc-400 lg:block">
                  Next step →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
