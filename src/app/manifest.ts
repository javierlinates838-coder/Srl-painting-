import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "SRL Painting",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#171411",
    theme_color: "#171411",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
