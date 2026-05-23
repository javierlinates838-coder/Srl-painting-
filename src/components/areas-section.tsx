import { serviceAreas } from "@/lib/site";
import { IconMapPin } from "./icons";

export function AreasSection() {
  return (
    <section id="areas" className="border-y border-stone-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Where we work
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Service areas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Based in Kern County and serving clients across Central and Southern California.
              Not sure if we cover your project? Send a message—we&apos;ll let you know quickly.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 font-medium text-stone-800"
              >
                <IconMapPin className="h-5 w-5 shrink-0 text-brand-600" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
