export const site = {
  name: "SRL Painting",
  tagline: "Bakersfield & surrounding areas",
  description:
    "Licensed & bonded painting contractor in Bakersfield, CA. Residential and commercial painting, cabinet refurbishing, and new cabinets across Kern County and Southern California.",
  phone: "(661) 595-7530",
  phoneTel: "6615957530",
  license: "1108313",
  licenseClass: "C-33 Painting & Decorating",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
  googleReviews:
    "https://www.google.com/maps/place/SRL+Painting/@35.2935235,-118.9054431,9z/data=!4m8!3m7!1s0x6254c68840d28bd5:0xe19578bc03c18746!8m2!3d35.2935235!4d-118.905443!9m1!1b1!16s%2Fg%2F11xrl4r8p_?entry=ttu",
  instagramDm: "https://ig.me/m/srl_painting",
  siteUrl: "https://srl-painting.vercel.app",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#studio", label: "Color studio" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
] as const;

export const services = [
  {
    id: "exterior",
    num: "01",
    icon: "home",
    title: "Exterior painting",
    text: "Stucco, siding, trim, fascia, doors, and garage doors, prepped and coated to stand up to Central Valley sun.",
    tags: ["Stucco", "Trim & fascia", "Doors", "Pergolas"],
    image: "/projects/exterior-after.jpg",
    alt: "Freshly painted white stucco home with a dark garage door",
  },
  {
    id: "interior",
    num: "02",
    icon: "roller",
    title: "Interior painting",
    text: "Walls, ceilings, baseboards, and accent walls with floors and furniture fully protected and a clean site when we leave.",
    tags: ["Walls", "Ceilings", "Baseboards", "Accent walls"],
    image: "/projects/interior-after.jpg",
    alt: "SRL painter spraying a ceiling with floors and walls masked off",
  },
  {
    id: "cabinets",
    num: "03",
    icon: "cabinet",
    title: "Cabinets: refurbished or new",
    text: "Give tired kitchen and bath cabinets a smooth, durable new finish, or let us finish and install new cabinets.",
    tags: ["Refurbishing", "New cabinets", "Kitchens", "Baths"],
    image: "/projects/cabinets-before.jpg",
    alt: "Bright white painted kitchen cabinets with black hardware",
  },
] as const;

export type ProjectCategory = "Exterior" | "Interior" | "Cabinets" | "Outdoor";

export const projects: {
  src: string;
  alt: string;
  title: string;
  category: ProjectCategory;
  tall?: boolean;
}[] = [
  { src: "/projects/exterior-after.jpg", alt: "White stucco home with black garage door and trim", title: "Full exterior repaint", category: "Exterior" },
  { src: "/projects/cabinets-before.jpg", alt: "White kitchen cabinets with matte black hardware", title: "Kitchen cabinet refresh", category: "Cabinets", tall: true },
  { src: "/projects/gazebo-after.jpg", alt: "Painted wood pergola over a backyard patio", title: "Backyard pergola", category: "Outdoor" },
  { src: "/projects/interior-after.jpg", alt: "Painter on a ladder spraying a ceiling in a fully masked room", title: "Ceilings, second coat", category: "Interior", tall: true },
  { src: "/projects/interior-before.jpg", alt: "Painter rolling a fresh coat on an interior wall", title: "Residential interior", category: "Interior", tall: true },
  { src: "/projects/cabinets-after.jpg", alt: "White cabinets and display shelving above a tiled kitchen bar", title: "Built-ins & kitchen bar", category: "Cabinets", tall: true },
  { src: "/projects/lake-before.jpg", alt: "Single-story home with blue-gray siding and white trim", title: "Lake Isabella home", category: "Exterior" },
  { src: "/projects/lake-after.jpg", alt: "Freshly painted stucco wall and eaves along a side yard", title: "Eaves & side elevation", category: "Exterior", tall: true },
  { src: "/projects/gazebo-before.jpg", alt: "Stone fireplace and pergola with freshly painted posts", title: "Patio cover & posts", category: "Outdoor" },
  { src: "/projects/exterior-before.jpg", alt: "Side yard of a white stucco home with dark window trim", title: "Stucco & window trim", category: "Exterior" },
];

export const serviceAreas = [
  { city: "Bakersfield", note: "Home base" },
  { city: "Shafter", note: "Residential & agricultural" },
  { city: "Tehachapi", note: "Mountain properties" },
  { city: "Lake Isabella", note: "Lake & mountain homes" },
  { city: "Los Angeles", note: "Commercial & residential" },
] as const;

export const process = [
  {
    num: "01",
    title: "Walkthrough",
    text: "We look at your space together, talk colors, prep, and timing, then put the scope and price in writing.",
  },
  {
    num: "02",
    title: "Protect & prep",
    text: "Floors, furniture, and landscaping covered. Patching, scraping, sanding, and primer where it's needed.",
  },
  {
    num: "03",
    title: "Paint",
    text: "Quality products chosen for your surfaces and climate, applied with clean lines and even coverage.",
  },
  {
    num: "04",
    title: "Final walkthrough",
    text: "We walk it with you room by room, handle touch-ups, and leave the site clean.",
  },
] as const;

export const promises = [
  { title: "Licensed & bonded", text: `California C-33 license #${site.license}. Verify it any time with the CSLB.` },
  { title: "Prep comes first", text: "Masking, patching, and priming are part of the job, not an upsell." },
  { title: "You stay in the loop", text: "Clear scope up front and a contractor who answers the phone." },
  { title: "Clean when we leave", text: "Drop cloths up, tape off, debris gone. Your home, back to normal." },
] as const;

export const faqs = [
  {
    q: "How do free estimates work?",
    a: `Call or text ${site.phone}, fill out the estimate form, or message ${site.instagramHandle} on Instagram. An inquiry is free and doesn't book work or create a contract. Scope, pricing, and scheduling are confirmed separately in writing.`,
  },
  {
    q: "What areas do you serve?",
    a: "Bakersfield and surrounding communities including Shafter, Tehachapi, and Lake Isabella, plus projects in Los Angeles. Somewhere else in Kern County or Southern California? Just ask.",
  },
  {
    q: "Are you licensed and bonded?",
    a: `Yes. SRL Painting is licensed and bonded, with California C-33 Painting & Decorating license #${site.license}. You can check current license status directly with the CSLB before hiring.`,
  },
  {
    q: "Do you do cabinets?",
    a: "Yes. We refurbish existing kitchen and bathroom cabinets with a fresh, durable finish, and we also work on new cabinets. Tell us how many doors and drawers you have and we'll take it from there.",
  },
  {
    q: "Do you take commercial jobs?",
    a: "Yes. Offices, retail, and other business spaces. We'll talk through scheduling so the work fits around your hours.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope, surface condition, drying time, weather, and access. You'll get a project-specific schedule before work is booked.",
  },
] as const;
