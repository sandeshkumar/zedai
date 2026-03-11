import type { Metadata } from "next";
import { getAllCategories, getPostsByCategory } from "@/lib/blog";
import { getServiceBySlug } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { wrapInGraph, generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const service = getServiceBySlug(category);
  const name = service?.title || category.replace(/-/g, " ");

  return {
    title: `${name} Articles | ZED Labs Blog`,
    description: `Expert guides and insights on ${name.toLowerCase()}. Practical tips to help your business grow with ${name.toLowerCase()} solutions.`,
    alternates: {
      canonical: `https://zedai.tech/blog/category/${category}`,
    },
    openGraph: {
      title: `${name} Articles | ZED Labs Blog`,
      description: `Expert guides and insights on ${name.toLowerCase()}.`,
      url: `https://zedai.tech/blog/category/${category}`,
      siteName: "ZED Labs",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  const service = getServiceBySlug(category);
  const categoryName = service?.title || category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = wrapInGraph(
    generateBreadcrumbSchema([
      { name: "Home", url: "https://zedai.tech" },
      { name: "Blog", url: "https://zedai.tech/blog" },
      { name: categoryName, url: `https://zedai.tech/blog/category/${category}` },
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
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: categoryName, href: `/blog/category/${category}` },
            ]}
          />

          <div className="mb-12">
            <div className="flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
              <span className="w-[18px] h-[2px] bg-accent inline-block" />
              {categoryName}
            </div>
            <h1 className="font-heading font-[800] text-[clamp(1.9rem,4vw,3rem)] tracking-[-0.03em] leading-[1.12] mb-3">
              {categoryName} Insights
            </h1>
            {service && (
              <p className="text-text-subtle max-w-[520px] text-base leading-[1.7]">
                {service.description}{" "}
                <Link
                  href={`/services/${service.slug}`}
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Learn more about our {service.title} service →
                </Link>
              </p>
            )}
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-dim text-lg mb-4">
                No articles in this category yet.
              </p>
              <Link
                href="/blog"
                className="text-accent hover:text-accent-light transition-colors font-semibold"
              >
                ← Browse all articles
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
