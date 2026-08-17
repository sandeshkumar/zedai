import { ImageResponse } from "next/og";
import { getServiceBySlug } from "@/lib/constants";
import { getCityBySlug, getCityServiceContent } from "@/lib/cities";

export const runtime = "nodejs";
export const alt = "ZED LABS Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city: citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlug(citySlug);
  const content = getCityServiceContent(citySlug, slug);

  const title = content?.metaTitle || `${service?.title || "Service"} in ${city?.name || "India"}`;
  const description = content?.heroDescription || service?.description || "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #080c14 0%, #0f1520 50%, #080c14 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "36px", fontWeight: 900 }}>
            ZED{" "}
          </span>
          <span style={{ color: "#f97316", fontSize: "36px", fontWeight: 900 }}>
            LABS
          </span>
        </div>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>
          {service?.icon || ""}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "44px",
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          {description.slice(0, 150)}{description.length > 150 ? "..." : ""}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            color: "#f97316",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          zedai.tech
        </div>
      </div>
    ),
    { ...size }
  );
}
