import { site, serviceAreas } from "@/lib/site";

type Props = {
  siteUrl: string;
};

export function LocalBusinessSchema({ siteUrl }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: site.name,
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
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
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: site.licenseClass,
      recognizedBy: {
        "@type": "Organization",
        name: "California Contractors State License Board",
        url: "https://www.cslb.ca.gov",
      },
      identifier: site.license,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
