/**
 * Brand constants shared by the site, structured data and share images.
 * Letter outlines match components/home/Logo.tsx (cap height 178).
 */

export const SITE_URL = "https://zedai.tech";
export const SLOGAN = "Coastal craft. World-class software.";
export const BRAND_DESCRIPTION =
  "Software company in Mangalore building websites, mobile apps, ERP, CRM and AI agents for businesses in India and abroad. 150+ projects across 20+ industries.";

export const BRAND = {
  ink: "#0B0D12",
  paper: "#F7F7F5",
  sea: "#1E3A5F",
  seaTint: "#E8EEF6",
  tile: "#B4532A",
  orange: "#FF7900",
  kumkum: "#B3261E",
  gold: "#D9A43B",
};

const ZED = [
  "M0 0 H150 V45 L60 133 H150 V178 H0 V135 L90 45 H0 Z",
  "M310 0 H200 Q170 0 170 30 V148 Q170 178 200 178 H310 V135 H213 V110 H300 V68 H213 V43 H310 Z",
  "M330 0 H443 Q475 0 475 32 V146 Q475 178 443 178 H330 Z M373 43 V135 H424 Q432 135 432 127 V51 Q432 43 424 43 Z",
];

const LABS = [
  "M525 0 H568 V135 H617 V178 H525 Z",
  "M630 178 V32 Q630 0 662 0 H743 Q775 0 775 32 V178 H732 V110 H673 V178 Z M673 51 V68 H732 V51 Q732 43 724 43 H681 Q673 43 673 51 Z",
  "M795 0 H882 Q910 0 910 28 V60 Q910 80 896 89 Q918 98 918 120 V150 Q918 178 890 178 H795 Z M838 41 V71 H860 Q869 71 869 62 V50 Q869 41 860 41 Z M838 107 V137 H866 Q876 137 876 127 V117 Q876 107 866 107 Z",
  "M1050 0 H963 Q935 0 935 28 V82 Q935 110 963 110 H1007 V135 H935 V178 H1022 Q1050 178 1050 150 V96 Q1050 68 1022 68 H978 V43 H1050 Z",
];

/** The wordmark as a standalone SVG string: black ZED, orange LABS. */
export function logoSvg({ zed = BRAND.ink, pad = 0 }: { zed?: string; pad?: number } = {}) {
  const w = 1050 + pad * 2;
  const h = 178 + pad * 2;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${w} ${h}" width="${w}" height="${h}">` +
    `<defs><linearGradient id="l" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FF9A2E"/><stop offset="0.5" stop-color="#FF7900"/><stop offset="1" stop-color="#FF5E00"/></linearGradient></defs>` +
    `<g fill="${zed}" fill-rule="evenodd">${ZED.map((d) => `<path d="${d}"/>`).join("")}</g>` +
    `<g fill="url(#l)" fill-rule="evenodd">${LABS.map((d) => `<path d="${d}"/>`).join("")}</g>` +
    `</svg>`
  );
}

export const logoDataUri = (opts?: Parameters<typeof logoSvg>[0]) =>
  `data:image/svg+xml;base64,${Buffer.from(logoSvg(opts)).toString("base64")}`;

/** The Z from the wordmark, for app icons. */
export const Z_PATH = ZED[0];

/** App icon: white Z on an ink square with an orange bar, as an SVG string. */
export function iconSvg(size: number) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="${size}" height="${size}">` +
    `<rect width="256" height="256" rx="56" fill="${BRAND.ink}"/>` +
    `<g transform="translate(72 34) scale(0.75)"><path d="${Z_PATH}" fill="#FFFFFF"/></g>` +
    `<rect x="72" y="188" width="112.5" height="16" rx="8" fill="${BRAND.orange}"/>` +
    `</svg>`
  );
}
