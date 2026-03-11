import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: `https://zedai.tech/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `https://zedai.tech/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const categories = getAllCategories();
  const categoryPages = categories.map((cat) => ({
    url: `https://zedai.tech/blog/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: "https://zedai.tech",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://zedai.tech/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...servicePages,
    ...blogPages,
    ...categoryPages,
    {
      url: "https://zedai.tech/partner",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://zedai.tech/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://zedai.tech/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
