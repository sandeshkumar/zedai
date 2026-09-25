import { getServiceBySlug } from "@/lib/constants";
import { clip, coastalCard, OG_SIZE, splitHeadline } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "ZED LABS service";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const { title, accent } = splitHeadline(service?.heroTitle || service?.title || "Software, built in Mangalore");

  return coastalCard({
    eyebrow: `${service?.title ?? "Services"} · Made in Mangalore`,
    title,
    accent,
    subtitle: clip(service?.description ?? "", 72),
  });
}
