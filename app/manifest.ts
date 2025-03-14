import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RentaCal",
    short_name: "RentaCal",
    description: "Calculez votre rentabilité en quelques secondes",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFDFF",
    theme_color: "#FAFDFF",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
