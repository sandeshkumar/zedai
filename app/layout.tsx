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
  title: "ZED Labs — Websites & Apps That Grow Your Business | Get Free Quote",
  description:
    "ZED Labs builds fast, SEO-optimized websites and mobile apps that convert visitors into customers. 150+ projects delivered.",
  openGraph: {
    title: "ZED Labs — Websites & Apps That Grow Your Business",
    description:
      "Fast, SEO-optimized websites and mobile apps that convert visitors into customers.",
    type: "website",
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
