import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CustomCursor } from "@/components/home/CustomCursor";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  title: "ZED LABS | Coastal craft, world-class software from Mangalore",
  description:
    "Software company in Mangalore building websites, mobile apps, ERP, CRM and AI agents for businesses in India and abroad. 150+ projects across 20+ industries.",
  keywords: [
    "AI software company India",
    "AI-powered web development",
    "AI chatbot development",
    "website design",
    "mobile app development",
    "SEO services",
    "e-commerce website",
    "ERP software",
    "CRM software",
    "AI automation",
    "custom software development",
    "digital marketing",
    "India",
  ],
  authors: [{ name: "ZED LABS", url: "https://zedai.tech" }],
  creator: "ZED LABS",
  publisher: "ZED LABS",
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
    title: "ZED LABS | Coastal craft, world-class software from Mangalore",
    description:
      "Software company in Mangalore building websites, mobile apps, ERP, CRM and AI agents for businesses in India and abroad. 150+ projects across 20+ industries.",
    url: "https://zedai.tech",
    siteName: "ZED LABS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZED LABS | Coastal craft, world-class software from Mangalore",
    description:
      "Software company in Mangalore building websites, mobile apps, ERP, CRM and AI agents for businesses in India and abroad. 150+ projects across 20+ industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          id="ga4"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GWTQN7W81N"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GWTQN7W81N');
            `,
          }}
        />
        {/* Google Search Console — Replace content with your verification code */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
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
      <body className="theme-light">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
