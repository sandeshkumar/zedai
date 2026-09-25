import { ImageResponse } from "next/og";
import { iconSvg } from "@/lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const src = `data:image/svg+xml;base64,${Buffer.from(iconSvg(64)).toString("base64")}`;
  // eslint-disable-next-line @next/next/no-img-element
  return new ImageResponse(<img src={src} width={64} height={64} alt="" />, size);
}
