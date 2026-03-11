import Link from "next/link";
import { getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import type { ServiceItem } from "@/lib/constants";

interface ServiceBlogPostsProps {
  service: ServiceItem;
}

export function ServiceBlogPosts({ service }: ServiceBlogPostsProps) {
  const posts = getPostsByCategory(service.slug).slice(0, 6);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
          <span className="w-[18px] h-[2px] bg-accent inline-block" />
          Resources
        </div>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading font-[800] text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.03em] leading-[1.12]">
            {service.title} Insights
          </h2>
          <Link
            href={`/blog/category/${service.slug}`}
            className="text-[0.85rem] text-accent hover:text-accent-light transition-colors font-semibold hidden sm:block"
          >
            View all articles →
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
          View all articles →
        </Link>
      </div>
    </section>
  );
}
