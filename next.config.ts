import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Ensure consistent URLs — no trailing slashes
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // www → non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zedai.tech" }],
        destination: "https://zedai.tech/:path*",
        permanent: true,
      },
      // Old partner program URL
      {
        source: "/zedlabs-partner-program",
        destination: "/partner",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
