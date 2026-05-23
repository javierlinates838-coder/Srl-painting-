import Link from "next/link";
import { pillars, site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-charcoal text-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="accent-rule bg-brand-light" />
            <p className="label mt-4 text-brand-light">About SRL Painting</p>
            <h2 className="display-lg mt-3 text-white">
              A local contractor you can trust
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
              SRL Painting is a California-licensed painting contractor serving homeowners and businesses
              across Kern County and Los Angeles. We&apos;re not a lead-gen platform or a franchise —
              when you hire us, you get a licensed crew that shows up, preps properly, and stands behind the work.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
              License #{site.license} · {site.licenseClass} · Licensed &amp; bonded.
            </p>
            <div className="mt-8">
              <Link href="#contact" className="btn btn-brand">
                Request Estimate
              </Link>
            </div>
          </div>

          <ul className="space-y-4">
            {pillars.map((p, i) => (
              <li key={p.title} className="surface-dark p-6">
                <span className="font-display text-[13px] font-bold text-brand-light">0{i + 1}</span>
                <h3 className="font-display mt-2 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
