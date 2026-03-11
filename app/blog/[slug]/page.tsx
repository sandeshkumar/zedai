import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { compileMdx } from "@/lib/mdx";
import {
  wrapInGraph,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { RelatedServices } from "@/components/blog/RelatedServices";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { MDXContent } from "./mdx-content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ZED Labs Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://zedai.tech/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://zedai.tech/blog/${post.slug}`,
      siteName: "ZED Labs",
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const compiledSource = await compileMdx(post.content);
  const relatedPosts = getRelatedPosts(slug);

  const jsonLd = wrapInGraph(
    generateArticleSchema(post),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://zedai.tech" },
      { name: "Blog", url: "https://zedai.tech/blog" },
      {
        name: post.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        url: `https://zedai.tech/blog/category/${post.category}`,
      },
      { name: post.title, url: `https://zedai.tech/blog/${post.slug}` },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-32 pb-20 px-5">
        <div className="max-w-[1100px] mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-16">
            <article className="min-w-0 max-w-[720px]">
              <BlogHeader post={post} />
              <MDXContent compiledSource={compiledSource} />
              <RelatedServices serviceSlugs={post.relatedServices} />
            </article>
            <aside className="hidden lg:block">
              <TableOfContents content={post.content} />
            </aside>
          </div>
          <RelatedPosts posts={relatedPosts} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
