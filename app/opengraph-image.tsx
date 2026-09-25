import { coastalCard, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "ZED LABS | Coastal craft, world-class software from Mangalore";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OGImage() {
  return coastalCard({
    eyebrow: "Software studio · Mangalore, India",
    title: "Coastal craft.",
    accent: "World-class software.",
    subtitle: "Websites, apps, ERP, CRM and AI agents. 150+ projects across 20+ industries.",
  });
}
