import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    lang: "en-NG",
    categories: ["business", "education", "productivity"],
    background_color: "#f5faff",
    theme_color: "#061745",
    icons: [
      {
        src: "/samsilo-favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/samsilo-favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/samsilo-favicon-256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/samsilo-favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/samsilo-favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    shortcuts: [
      {
        name: "View Services",
        short_name: "Services",
        description: "Open Samsilo Digital Hub services.",
        url: "/services",
        icons: [{ src: "/samsilo-favicon-192.png", sizes: "192x192", type: "image/png" }]
      },
      {
        name: "Service Packages",
        short_name: "Packages",
        description: "View student and department service packages.",
        url: "/packages",
        icons: [{ src: "/samsilo-favicon-192.png", sizes: "192x192", type: "image/png" }]
      },
      {
        name: "Contact Samsilo",
        short_name: "Contact",
        description: "Request campus digital support.",
        url: "/contact",
        icons: [{ src: "/samsilo-favicon-192.png", sizes: "192x192", type: "image/png" }]
      }
    ]
  };
}
