import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern home exterior with fresh paint",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    alt: "Interior living space paint finish",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    alt: "Residential property repaint",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd09?auto=format&fit=crop&w=800&q=80",
    alt: "Kitchen cabinet finish",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    alt: "Interior design paint detail",
    span: "",
  },
];

export function GallerySection() {
  return (
    <section id="work" className="bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-label !text-maroon-light before:!bg-maroon-light">Portfolio</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Quality you can see
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Exteriors, interiors, and cabinet work across Kern County and Los Angeles.
              Follow us on Instagram for the latest before-and-after photos.
            </p>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !shrink-0 !border-white/20 !bg-white/10 !text-white hover:!border-white/40"
          >
            {site.instagramHandle}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {gallery.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-xl ${item.span || "aspect-[4/3] lg:aspect-auto"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
