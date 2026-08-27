import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "SRL Painting",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111114",
    theme_color: "#111114",
    icons: [
      {
        src: "/images/srl-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
