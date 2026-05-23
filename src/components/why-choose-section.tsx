import Link from "next/link";
import { whyChoose } from "@/lib/site";

export function WhyChooseSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label">Why SRL Painting</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Built on quality you can verify
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              We&apos;re not a faceless franchise—we&apos;re a licensed California contractor
              who takes pride in every brushstroke. Here&apos;s what sets us apart.
            </p>
            <Link href="#work" className="btn-primary mt-8 inline-flex">
              See before &amp; after photos
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
              >
                <span className="font-display text-3xl font-semibold text-maroon/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
