import { process } from "@/lib/site";

export function ProcessSection() {
  return (
    <section id="process" className="border-y border-ink/8 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center before:hidden">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            A straightforward process
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            No surprises—just clear communication, careful prep, and finishes built to last.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <li key={item.step} className="relative">
              <span className="font-display text-6xl font-semibold leading-none text-maroon/15">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
