import { getServiceBySlug } from "@/lib/constants";
import { getCityBySlug, getCityServiceContent } from "@/lib/cities";
import { clip, coastalCard, OG_SIZE, splitHeadline } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "ZED LABS service";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OGImage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);
  const content = getCityServiceContent(citySlug, slug);
  const { title, accent } = splitHeadline(
    content?.heroTitle || `${service?.title ?? "Software"} in ${city?.name ?? "India"}`
  );

  return coastalCard({
    eyebrow: `${service?.title ?? "Services"} · ${city?.name ?? "India"}`,
    title,
    accent,
    subtitle: clip(content?.heroDescription || service?.description || "", 72),
  });
}
