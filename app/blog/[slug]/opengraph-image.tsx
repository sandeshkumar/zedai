import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "ZED Labs Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title || "ZED Labs Blog";
  const category = post?.category.replace(/-/g, " ").toUpperCase() || "BLOG";
  const readTime = post?.readingTime || 5;

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
            marginBottom: "32px",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(249, 115, 22, 0.15)",
              color: "#f97316",
              fontSize: "16px",
              fontWeight: 700,
              padding: "8px 16px",
              borderRadius: "20px",
              letterSpacing: "0.1em",
            }}
          >
            {category}
          </div>
          <span style={{ color: "#64748b", fontSize: "18px" }}>
            {readTime} min read
          </span>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "32px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{ color: "#ffffff", fontSize: "24px", fontWeight: 900 }}
            >
              ZED{" "}
            </span>
            <span
              style={{ color: "#f97316", fontSize: "24px", fontWeight: 900 }}
            >
              Labs
            </span>
          </div>
          <span
            style={{ color: "#f97316", fontSize: "18px", fontWeight: 700 }}
          >
            zedai.tech/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
