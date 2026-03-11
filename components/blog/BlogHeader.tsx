import type { BlogPost } from "@/lib/types/blog";
import { Breadcrumbs } from "./Breadcrumbs";

interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: post.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/blog/category/${post.category}`,
    },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <header className="mb-10">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading font-[800] text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.03em] leading-[1.15] mb-4">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-[0.82rem] text-text-dim">
        <span>{post.author}</span>
        <span className="w-1 h-1 rounded-full bg-text-dim/50" />
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span className="w-1 h-1 rounded-full bg-text-dim/50" />
        <span>{post.readingTime} min read</span>
      </div>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.7rem] px-2.5 py-1 rounded-full bg-surface-card border border-border-subtle text-text-dim"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
