import Image from "next/image";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="section-label">Services</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Everything your property needs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            From full exterior repaints to precision cabinet work—we handle residential,
            commercial, and specialty finishes with the same attention to detail.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm transition hover:shadow-lg lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[260px] lg:min-h-[340px] ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/10" />
              </div>

              <div
                className={`flex flex-col justify-center p-8 lg:p-12 xl:p-16 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <span className="font-display text-5xl font-semibold text-maroon/20">
                  {service.number}
                </span>
                <h3 className="mt-2 font-display text-3xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
