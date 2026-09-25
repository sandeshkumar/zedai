import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND, logoDataUri } from "@/lib/brand";

export const OG_SIZE = { width: 1200, height: 630 };

async function fonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [semi, medium, mono] = await Promise.all([
    readFile(join(dir, "Geist-SemiBold.ttf")),
    readFile(join(dir, "Geist-Medium.ttf")),
    readFile(join(dir, "GeistMono-Medium.ttf")),
  ]);
  return [
    { name: "Geist", data: semi, weight: 600 as const, style: "normal" as const },
    { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Geist Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

// Wave rows under the horizon: [top offset px, opacity].
const WAVES: [number, number][] = [
  [14, 0.18],
  [34, 0.24],
  [62, 0.3],
];

/**
 * Share card in the coastal theme: paper background, black-and-orange
 * wordmark, a headline, and the Arabian Sea horizon with the setting sun.
 */
export async function coastalCard({
  eyebrow,
  title,
  accent,
  subtitle,
  footer = "zedai.tech  ·  Made in Mangalore",
}: {
  eyebrow: string;
  title: string;
  accent?: string; // optional last line in terracotta
  subtitle?: string;
  footer?: string;
}) {
  const horizon = 505;
  const titleSize = title.length + (accent?.length ?? 0) > 70 ? 54 : title.length > 40 ? 62 : 72;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: BRAND.paper, fontFamily: "Geist" }}>
        {/* warm sky near the horizon */}
        <div style={{ position: "absolute", left: 0, right: 0, top: 300, height: horizon - 300, background: "linear-gradient(to bottom, rgba(245,233,223,0), rgba(245,225,208,0.95))", display: "flex" }} />
        {/* sun glow and sun, half set */}
        <div style={{ position: "absolute", left: 830, top: horizon - 230, width: 460, height: 460, borderRadius: 999, background: "radial-gradient(circle, rgba(208,112,63,0.28) 0%, rgba(208,112,63,0) 62%)", display: "flex" }} />
        <div style={{ position: "absolute", left: 960, top: horizon - 100, width: 200, height: 100, overflow: "hidden", display: "flex" }}>
          <div style={{ width: 200, height: 200, borderRadius: 999, background: "radial-gradient(circle at 50% 40%, #F3A469 0%, #D26A34 55%, #B4532A 100%)", display: "flex" }} />
        </div>
        {/* sea */}
        <div style={{ position: "absolute", left: 0, right: 0, top: horizon, bottom: 0, background: `linear-gradient(to bottom, ${BRAND.seaTint}, ${BRAND.paper})`, display: "flex" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: horizon, height: 2, background: "rgba(30,58,95,0.3)", display: "flex" }} />
        {WAVES.map(([y, o], i) => (
          <div key={i} style={{ position: "absolute", left: 0, right: 0, top: horizon + y, height: 2, background: `rgba(30,58,95,${o})`, display: "flex" }} />
        ))}
        {/* sun reflection */}
        {[140, 110, 90, 60].map((w, i) => (
          <div key={`r${i}`} style={{ position: "absolute", left: 1060 - w / 2, top: horizon + 10 + i * 12, width: w, height: 3, borderRadius: 3, background: "rgba(208,112,63,0.75)", display: "flex" }} />
        ))}

        {/* content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "64px 72px", width: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri()} width={236} height={40} alt="" />
          <div style={{ display: "flex", marginTop: 54, fontFamily: "Geist Mono", fontSize: 20, letterSpacing: 3, color: BRAND.kumkum, textTransform: "uppercase" }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 18, maxWidth: 820, fontSize: titleSize, fontWeight: 600, lineHeight: 1.04, letterSpacing: -2.5, color: BRAND.ink }}>
            <span>{title}</span>
            {accent && <span style={{ color: BRAND.tile }}>{accent}</span>}
          </div>
          {subtitle && (
            <div style={{ display: "flex", marginTop: 22, maxWidth: 980, fontSize: 25, fontWeight: 500, lineHeight: 1.4, color: "#5B6270" }}>{subtitle}</div>
          )}
        </div>
        <div style={{ position: "absolute", left: 72, bottom: 30, display: "flex", fontFamily: "Geist Mono", fontSize: 19, letterSpacing: 2, color: BRAND.sea }}>
          {footer}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts() }
  );
}

/** Split a headline so its last two words can carry the accent colour. */
export function splitHeadline(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length < 4) return { title: text, accent: undefined };
  return { title: words.slice(0, -2).join(" "), accent: words.slice(-2).join(" ") };
}

/** Trim to a whole word under `max` characters. */
export function clip(text: string, max = 120) {
  if (!text || text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}
