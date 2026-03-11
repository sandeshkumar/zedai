import Link from "next/link";
import type { BlogPost } from "@/lib/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-surface-card border border-border-subtle rounded-[var(--radius-md)] overflow-hidden hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(249,115,22,0.08)] transition-all duration-300"
    >
      {post.coverImage && (
        <div className="aspect-[16/9] overflow-hidden bg-bg-secondary">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">
            {post.category.replace(/-/g, " ")}
          </span>
          <span className="text-[0.72rem] text-text-dim">
            {post.readingTime} min read
          </span>
        </div>
        <h3 className="font-heading font-bold text-[1.1rem] leading-[1.3] mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-text-subtle text-[0.85rem] leading-[1.6] line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border-subtle">
          <span className="text-[0.72rem] text-text-dim">
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-[0.78rem] font-semibold text-accent group-hover:translate-x-1 transition-transform duration-200">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
