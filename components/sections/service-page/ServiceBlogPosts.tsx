import Link from "next/link";
import { getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import type { ServiceItem } from "@/lib/constants";
import { MirrorDot } from "@/components/home/motifs";

interface ServiceBlogPostsProps {
  service: ServiceItem;
}

export function ServiceBlogPosts({ service }: ServiceBlogPostsProps) {
  const posts = getPostsByCategory(service.slug).slice(0, 6);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 px-5 lg:px-10">
      <div className="max-w-[1360px] mx-auto">
        <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-5">
          <MirrorDot className="w-5 h-5" />
          From our notebook
        </p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="display text-[clamp(1.9rem,3.6vw,3rem)] text-ink">
            {service.title} insights
          </h2>
          <Link
            href={`/blog/category/${service.slug}`}
            className="text-[0.9rem] text-ink font-medium border-b border-ink/30 pb-0.5 hover:border-ink transition-colors hidden sm:block"
          >
            View all articles
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Link
          href={`/blog/category/${service.slug}`}
          className="mt-6 text-[0.85rem] text-accent hover:text-accent-light transition-colors font-semibold sm:hidden block text-center"
        >
          View all articles
        </Link>
      </div>
    </section>
  );
}
