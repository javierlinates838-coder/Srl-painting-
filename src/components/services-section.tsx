import { services } from "@/lib/site";
import {
  IconBuilding,
  IconCabinet,
  IconHome,
  IconSparkle,
} from "./icons";

const iconMap = {
  home: IconHome,
  building: IconBuilding,
  cabinet: IconCabinet,
  sparkle: IconSparkle,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-stone-50 py-20 text-stone-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            What we do
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Painting services
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            From full exterior repaints to cabinet refinishing—prep, product, and finish done right.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <li
                key={service.title}
                className="group rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition hover:border-brand-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-700 transition group-hover:bg-brand-100">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
