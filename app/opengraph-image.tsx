import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "ZED Labs — AI-Powered Software Solutions That Grow Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          <span style={{ color: "#ffffff", fontSize: "48px", fontWeight: 900 }}>
            ZED{" "}
          </span>
          <span style={{ color: "#f97316", fontSize: "48px", fontWeight: 900 }}>
            Labs
          </span>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          AI-Powered Software That Grows Your Business
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            lineHeight: 1.5,
          }}
        >
          AI Chatbots · Smart Websites · Apps · ERP · CRM · Automation
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
