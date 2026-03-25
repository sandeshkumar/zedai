import type { ServiceItem } from "@/lib/constants";
import type { BlogPost, HowToStep } from "@/lib/types/blog";

const SITE_URL = "https://zedai.tech";

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "ZED Labs",
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9380341684",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    // TODO: Add your social media profile URLs here
    sameAs: [
      // "https://www.linkedin.com/company/zedlabs",
      // "https://www.instagram.com/zedlabs",
      // "https://www.facebook.com/zedlabs",
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "ZED Labs",
    telephone: "+91-9380341684",
    email: "contact@zedai.tech",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    priceRange: "$$",
    image: `${SITE_URL}/og-image.png`,
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "ZED Labs",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function generateWebPageSchema(
  url: string,
  name: string,
  description: string
) {
  return {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(service: ServiceItem) {
  return {
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "ZED Labs",
      url: SITE_URL,
    },
    name: service.title,
    description: service.heroDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: { "@type": "Country", name: "India" },
    serviceType: service.title,
  };
}

export function generateFAQSchema(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "ZED Labs",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ZED Labs",
      url: SITE_URL,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    ...(post.coverImage && { image: `${SITE_URL}${post.coverImage}` }),
    wordCount: post.content.split(/\s+/).length,
  };
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
) {
  return {
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateReviewSchema(
  reviews: readonly {
    stars: number;
    quote: string;
    name: string;
    role: string;
  }[]
) {
  return reviews.map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.stars.toString(),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.quote,
    itemReviewed: { "@id": `${SITE_URL}/#organization` },
  }));
}

export function wrapInGraph(...schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
