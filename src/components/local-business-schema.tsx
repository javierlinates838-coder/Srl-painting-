import { site, serviceAreas } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: site.name,
    description: site.description,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://srl-painting.vercel.app",
    image: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://srl-painting.vercel.app"}/logo.png`,
    sameAs: [site.instagram],
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: a.city,
    })),
    priceRange: "$$",
    knowsAbout: [
      "Interior painting",
      "Exterior painting",
      "Cabinet refinishing",
      "Commercial painting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
