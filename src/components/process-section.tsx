import { process } from "@/lib/site";

export function ProcessSection() {
  return (
    <section className="border-y border-border bg-surface-2 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Process</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-ink sm:text-4xl">
            Simple from start to finish
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <li key={step.step} className="card relative p-6">
              <span className="font-heading text-4xl font-bold text-maroon/10">{step.step}</span>
              <h3 className="font-heading mt-2 text-[15px] font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
