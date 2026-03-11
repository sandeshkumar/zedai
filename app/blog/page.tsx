import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { getServiceBySlug } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { wrapInGraph, generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | ZED Labs — Software Development Insights & Guides",
  description:
    "Expert insights on web development, ERP, CRM, AI, mobile apps, and digital marketing. Practical guides to grow your business with technology.",
  keywords: [
    "software development blog",
    "web development tips",
    "ERP guide",
    "CRM guide",
    "AI business solutions",
    "digital marketing tips",
  ],
  alternates: {
    canonical: "https://zedai.tech/blog",
  },
  openGraph: {
    title: "Blog | ZED Labs — Software Development Insights",
    description:
      "Expert insights on web development, ERP, CRM, AI, and digital marketing.",
    url: "https://zedai.tech/blog",
    siteName: "ZED Labs",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://zedai.tech" },
    { name: "Blog", url: "https://zedai.tech/blog" },
  ]);

  const jsonLd = wrapInGraph(breadcrumbSchema);

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
            ]}
          />

          <div className="mb-12">
            <div className="flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
              <span className="w-[18px] h-[2px] bg-accent inline-block" />
              Blog
            </div>
            <h1 className="font-heading font-[800] text-[clamp(1.9rem,4vw,3rem)] tracking-[-0.03em] leading-[1.12] mb-3">
              Insights & Guides
            </h1>
            <p className="text-text-subtle max-w-[520px] text-base leading-[1.7]">
              Practical advice on building software that grows your business.
            </p>
          </div>

          {/* Category filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <Link
                href="/blog"
                className="text-[0.78rem] font-semibold px-4 py-1.5 rounded-full bg-accent text-white transition-colors"
              >
                All
              </Link>
              {categories.map((cat) => {
                const service = getServiceBySlug(cat);
                return (
                  <Link
                    key={cat}
                    href={`/blog/category/${cat}`}
                    className="text-[0.78rem] font-semibold px-4 py-1.5 rounded-full border border-border-subtle text-text-dim hover:border-accent hover:text-accent transition-colors"
                  >
                    {service?.title || cat.replace(/-/g, " ")}
                  </Link>
                );
              })}
            </div>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-dim text-lg">
                No articles yet. Check back soon!
              </p>
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
