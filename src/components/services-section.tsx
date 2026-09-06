"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "./reveal";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section id="services" className="section-pad bg-stone">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28 lg:self-start">
              <Image
                key={service.id}
                src={service.image}
                alt={`${service.title} painting — SRL project`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-opacity duration-500"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={1}>
              <p className="meta-brand">Services</p>
              <h2 className="editorial-lg mt-4 text-ink">What we paint.</h2>
              <p className="body-text mt-4 max-w-md">
                One crew, one standard — prep-first work on every interior, exterior, cabinet, and commercial job.
              </p>
            </Reveal>

            <div className="mt-10" role="tablist" aria-label="Services">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`service-list-btn ${i === active ? "is-active" : ""}`}
                >
                  <span className="meta text-ink-light">{s.index}</span>
                  <span className="font-display text-2xl">{s.title}</span>
                </button>
              ))}
            </div>

            <div className="mt-8" role="tabpanel">
              <p className="body-text">{service.summary}</p>
              <ul className="mt-5 space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="body-sm flex gap-3">
                    <span className="text-brand" aria-hidden>—</span>
                    {d}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="btn btn-primary mt-10">
                Request estimate
                <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
