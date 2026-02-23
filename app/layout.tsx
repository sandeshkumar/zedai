import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zedai.tech"),
  title: "ZED Labs — Websites & Apps That Grow Your Business | Get Free Quote",
  description:
    "ZED Labs builds fast, SEO-optimized websites and mobile apps that convert visitors into customers. 150+ projects delivered across 20+ industries.",
  keywords: [
    "web development",
    "website design",
    "mobile app development",
    "SEO services",
    "e-commerce website",
    "business website",
    "custom software development",
    "digital marketing",
    "website redesign",
    "React",
    "Next.js",
    "India",
  ],
  authors: [{ name: "ZED Labs", url: "https://zedai.tech" }],
  creator: "ZED Labs",
  publisher: "ZED Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zedai.tech",
  },
  openGraph: {
    title: "ZED Labs — Websites & Apps That Grow Your Business",
    description:
      "Fast, SEO-optimized websites and mobile apps that convert visitors into customers. 150+ projects delivered.",
    url: "https://zedai.tech",
    siteName: "ZED Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZED Labs — Websites & Apps That Grow Your Business",
    description:
      "Fast, SEO-optimized websites and mobile apps that convert visitors into customers. 150+ projects delivered.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
