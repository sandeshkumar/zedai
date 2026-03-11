export interface BlogFrontmatter {
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  excerpt: string;
  author: string;
  category: string; // maps to service slug
  tags: string[];
  relatedServices: string[];
  coverImage?: string;
  featured?: boolean;
  schemaType?: "Article" | "HowTo";
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
  readingTime: number;
}

export interface HowToStep {
  name: string;
  text: string;
}
