import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { AmbientOrbs } from "@/components/ui/AmbientOrbs";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
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
  title: "ZED Labs — Complete Software Solutions That Grow Your Business | Get Free Quote",
  description:
    "ZED Labs builds custom websites, apps, ERP, CRM, POS systems, and AI solutions that grow your business. 150+ projects delivered across 20+ industries.",
  keywords: [
    "web development",
    "website design",
    "mobile app development",
    "SEO services",
    "e-commerce website",
    "ERP software",
    "CRM software",
    "hospitality POS",
    "AI solutions",
    "custom software development",
    "digital marketing",
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
    title: "ZED Labs — Complete Software Solutions That Grow Your Business",
    description:
      "Custom websites, apps, ERP, CRM, POS, and AI solutions that grow your business. 150+ projects delivered.",
    url: "https://zedai.tech",
    siteName: "ZED Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZED Labs — Complete Software Solutions That Grow Your Business",
    description:
      "Custom websites, apps, ERP, CRM, POS, and AI solutions that grow your business. 150+ projects delivered.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1619624449150563');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1619624449150563&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <ScrollProgress />
        <AmbientOrbs />
        {children}
      </body>
    </html>
  );
}
