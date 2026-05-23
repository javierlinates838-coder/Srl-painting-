export const site = {
  name: "SRL Painting",
  tagline: "Licensed & bonded painting across Central and Southern California",
  description:
    "Residential and commercial painting, cabinet refurbishing, and new cabinet finishes. Serving Bakersfield, Shafter, Tehachapi, and Los Angeles.",
  license: "1108313",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
} as const;

export const services = [
  {
    title: "Residential Painting",
    description:
      "Interior and exterior finishes for homes—prep, prime, and coats that hold up to California sun and weather.",
    icon: "home",
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail, and multi-unit properties painted on schedule with minimal disruption to your business.",
    icon: "building",
  },
  {
    title: "Cabinet Refurbishing",
    description:
      "Refresh existing cabinets with professional prep, repair, and durable finishes—without a full kitchen remodel.",
    icon: "cabinet",
  },
  {
    title: "New Cabinets",
    description:
      "Factory-smooth finishes on new cabinet installs so your kitchen or bath looks built-in from day one.",
    icon: "sparkle",
  },
] as const;

export const serviceAreas = [
  "Bakersfield",
  "Shafter",
  "Tehachapi",
  "Los Angeles",
] as const;

export const trustPoints = [
  "California C-33 Painting & Decorating contractor",
  "Licensed & bonded (verify anytime on CSLB)",
  "Residential, commercial, and cabinet specialists",
  "Free estimates—reach out on Instagram to get started",
] as const;
