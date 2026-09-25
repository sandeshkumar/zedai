import { ImageResponse } from "next/og";
import { iconSvg } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const src = `data:image/svg+xml;base64,${Buffer.from(iconSvg(180)).toString("base64")}`;
  // eslint-disable-next-line @next/next/no-img-element
  return new ImageResponse(<img src={src} width={180} height={180} alt="" />, size);
}
