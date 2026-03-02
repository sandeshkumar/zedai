import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: `https://zedai.tech/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://zedai.tech",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...servicePages,
  ];
}
