import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { PartnerProgramClient } from "./PartnerProgramClient";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ZED Labs — White Label Partner Program | Run Your Own Digital Agency",
  description:
    "Launch your own digital agency with zero investment. ZED Labs handles design, development & delivery. You handle clients & earn 15-18% on every project.",
  keywords: [
    "partner program",
    "white label agency",
    "digital agency partner",
    "earn commission",
    "zero investment business",
    "ZED Labs partner",
  ],
  alternates: {
    canonical: "https://zedai.tech/zedlabs-partner-program",
  },
  openGraph: {
    title: "ZED Labs — Partner Program | Run Your Own Digital Agency",
    description:
      "Launch your own digital agency with zero investment. Earn ₹10,000–₹50,000+ per month in commissions.",
    url: "https://zedai.tech/zedlabs-partner-program",
  },
};

export default function PartnerProgramPage() {
  return <PartnerProgramClient fontClass={dmSans.variable} />;
}
