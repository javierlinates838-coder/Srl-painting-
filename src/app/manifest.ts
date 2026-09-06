import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "SRL Painting",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ef",
    theme_color: "#f7f4ef",
    icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }],
  };
}
