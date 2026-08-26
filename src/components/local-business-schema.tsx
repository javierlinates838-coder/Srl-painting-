import { faqs, site, serviceAreas } from "@/lib/site";

type Props = {
  siteUrl: string;
};

export function LocalBusinessSchema({ siteUrl }: Props) {
  const business = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: site.name,
    description: site.description,
    url: siteUrl,
    image: [`${siteUrl}/logo.png`, `${siteUrl}/projects/exterior-after.jpg`],
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
      "New cabinet finishing",
      "Commercial painting",
      "Stucco painting",
      "Wood staining",
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

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
