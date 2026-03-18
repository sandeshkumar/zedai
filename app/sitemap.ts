import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { getAllPosts, getAllCategories } from "@/lib/blog";

// Static page dates — update these only when you actually change page content
const SERVICE_PAGES_UPDATED = "2026-03-18";
const PARTNER_PAGE_UPDATED = "2026-03-18";
const TRUST_PAGES_UPDATED = "2026-03-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Blog listing & category dates auto-update based on latest post
  const latestPostDate = posts.length > 0
    ? new Date(posts[0].publishedAt)
    : new Date(SERVICE_PAGES_UPDATED);

  const servicePages = SERVICES.map((service) => ({
    url: `https://zedai.tech/services/${service.slug}`,
    lastModified: new Date(SERVICE_PAGES_UPDATED),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `https://zedai.tech/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const categories = getAllCategories();
  const categoryPages = categories.map((cat) => ({
    url: `https://zedai.tech/blog/category/${cat}`,
    lastModified: latestPostDate,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: "https://zedai.tech",
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://zedai.tech/blog",
      lastModified: latestPostDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...servicePages,
    ...blogPages,
    ...categoryPages,
    {
      url: "https://zedai.tech/partner",
      lastModified: new Date(PARTNER_PAGE_UPDATED),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://zedai.tech/privacy",
      lastModified: new Date(TRUST_PAGES_UPDATED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://zedai.tech/terms",
      lastModified: new Date(TRUST_PAGES_UPDATED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
