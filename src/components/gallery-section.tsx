import Image from "next/image";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    alt: "Freshly painted suburban home exterior",
    label: "Exterior residential",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    alt: "Painter working on interior wall",
    label: "Interior prep & paint",
  },
  {
    src: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    alt: "Modern kitchen with updated cabinetry",
    label: "Cabinet finishing",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: "Commercial building facade",
    label: "Commercial projects",
  },
] as const;

export function GallerySection() {
  return (
    <section className="bg-stone-100 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            Our work
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Recent projects
          </h2>
          <p className="mt-4 text-stone-600">
            Sample project styles—see the latest before-and-after photos on our Instagram feed.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <li key={item.src} className="group relative overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
