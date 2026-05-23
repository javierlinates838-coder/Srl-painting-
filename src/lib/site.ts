export const site = {
  name: "SRL Painting",
  tagline: "Licensed & bonded painting across California",
  description:
    "Professional residential and commercial painting, cabinet refurbishing, and new cabinet finishes. Serving Bakersfield, Shafter, Tehachapi, and Los Angeles.",
  license: "1108313",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
} as const;

export const services = [
  {
    number: "01",
    title: "Residential Painting",
    description:
      "Interior and exterior repaints with thorough prep, premium coatings, and clean job sites from start to finish.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Commercial Painting",
    description:
      "Retail, office, and multi-unit projects completed on schedule with minimal disruption to your operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Cabinet Refurbishing",
    description:
      "Transform existing cabinets with expert sanding, repair, and durable finishes—without a full remodel.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "New Cabinets",
    description:
      "Flawless spray finishes on new cabinet installs for kitchens and baths that look built-in from day one.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const serviceAreas = [
  { city: "Bakersfield", region: "Kern County" },
  { city: "Shafter", region: "Kern County" },
  { city: "Tehachapi", region: "Kern County" },
  { city: "Los Angeles", region: "LA County" },
] as const;

export const process = [
  {
    step: "01",
    title: "Consult & estimate",
    text: "Tell us about your project on Instagram. We'll discuss scope, timeline, and provide a free estimate.",
  },
  {
    step: "02",
    title: "Prep & protect",
    text: "We mask, cover, and prep every surface properly—because great paint starts before the first coat.",
  },
  {
    step: "03",
    title: "Paint & finish",
    text: "Skilled application with quality materials for a smooth, durable finish inside or out.",
  },
  {
    step: "04",
    title: "Final walkthrough",
    text: "We inspect every detail with you and leave your space clean and ready to enjoy.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Professional from start to finish. Our home looks brand new and they left everything spotless.",
    author: "Homeowner",
    location: "Bakersfield, CA",
  },
  {
    quote:
      "Great communication and quality work on our cabinet refresh. Highly recommend SRL Painting.",
    author: "Client",
    location: "Kern County, CA",
  },
  {
    quote:
      "They handled our commercial repaint on time and on budget. Will hire again.",
    author: "Business Owner",
    location: "Los Angeles, CA",
  },
] as const;
