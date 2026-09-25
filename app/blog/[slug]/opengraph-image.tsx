import { getPostBySlug } from "@/lib/blog";
import { clip, coastalCard, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "ZED LABS blog";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const category = post?.category.replace(/-/g, " ") ?? "Blog";

  return coastalCard({
    eyebrow: `${category} · ${post?.readingTime ?? 5} min read`,
    title: clip(post?.title ?? "From the ZED LABS notebook", 90),
    footer: "zedai.tech/blog  ·  Made in Mangalore",
  });
}
