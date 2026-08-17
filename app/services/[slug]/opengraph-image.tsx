import { ImageResponse } from "next/og";
import { getServiceBySlug } from "@/lib/constants";

export const runtime = "nodejs";
export const alt = "ZED LABS Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service?.metaTitle || "ZED LABS Service";
  const description = service?.description || "";
  const icon = service?.icon || "";

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
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>{icon}</div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "48px",
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
            fontSize: "22px",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          {description}
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
