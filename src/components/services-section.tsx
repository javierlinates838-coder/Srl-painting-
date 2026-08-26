import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="What we paint"
            title="Four kinds of work. One standard of prep."
            description="Homes, businesses, and cabinets — finished with the same rule: the coating is only as good as what is under it."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4} layout="contents">
              <article className="card group overflow-hidden">
                <div className="relative aspect-[16/8] overflow-hidden bg-paper-2">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {s.kicker}
                  </span>
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <h3 className="font-display text-[1.45rem] font-medium leading-snug text-black">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{s.summary}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-2.5 text-[14px] leading-relaxed text-zinc-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="btn btn-brand mt-6 w-full !text-[13px] sm:w-auto">
                    Estimate this work
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
