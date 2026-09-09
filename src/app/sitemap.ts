import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : site.siteUrl);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${siteUrl}/accessibility`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
