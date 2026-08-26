import Link from "next/link";
import Image from "next/image";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const stats = [
  { v: `#${site.license}`, l: "CSLB License" },
  { v: "C-33", l: "Classification" },
  { v: "Bonded", l: "Fully insured" },
  { v: "Free", l: "Estimates" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            light
            label="The SRL standard"
            title={<>The craft is in the prep.<br /><span className="text-gold">The pride is in the finish.</span></>}
            description="SRL Painting is a California-licensed contractor serving Kern County and Los Angeles. You get a real crew that protects the space, prepares every surface, and stands behind the result."
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative min-h-[430px] overflow-hidden sm:min-h-[540px]">
              <Image
                src="/projects/cabinets-after.jpg"
                alt="Freshly refinished kitchen cabinets by SRL Painting"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-black/50 p-5 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-gold">Our promise</p>
                <p className="font-display mt-2 text-2xl leading-tight">Your home stays protected. Your expectations stay clear.</p>
              </div>
            </div>
          </Reveal>

          <div>
            <div className="grid grid-cols-2 border border-white/10">
              {stats.map((s, index) => (
                <div key={s.l} className={`p-5 ${index % 2 ? "border-l border-white/10" : ""} ${index > 1 ? "border-t border-white/10" : ""}`}>
                  <p className="font-display text-2xl text-white">{s.v}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-stone-500">{s.l}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 flex flex-col">
            {pillars.map((p, i) => (
                <li key={p.title} className="list-none border-t border-white/10 py-6 last:border-b">
                  <article className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="font-display text-3xl text-gold/50" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl leading-snug text-white">
                      {p.title}
                    </h3>
                      <p className="mt-2 text-[13px] leading-6 text-stone-400">{p.text}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Request an estimate <span aria-hidden>↗</span>
              </Link>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full sm:w-auto"
              >
                Verify CSLB license
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
