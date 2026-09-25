/**
 * ZED LABS wordmark, drawn as vector shapes to match the brand logo exactly:
 * squared letterforms with rounded corners and an
 * underline that ends in a glowing orange dot. No circle.
 *
 * tone="light" → white ZED, orange LABS, for dark backgrounds (the header)
 * tone="dark"  → black ZED, orange LABS, for light backgrounds
 * tone="mono"  → everything black
 */

export function Logo({
  tone = "dark",
  underline = false,
  className = "",
  title = "ZED LABS",
}: {
  tone?: "dark" | "light" | "mono";
  underline?: boolean;
  className?: string;
  title?: string;
}) {
  const zed = tone === "light" ? "#FFFFFF" : "#0B0D12";
  const labs = tone === "mono" ? zed : `url(#zl-logo-${tone}-labs)`;
  const id = `zl-logo-${tone}`;

  return (
    <svg viewBox={underline ? "0 0 1056 246" : "0 0 1050 178"} className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <linearGradient id={`${id}-labs`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FF9A2E" />
          <stop offset="0.5" stopColor="#FF7900" />
          <stop offset="1" stopColor="#FF5E00" />
        </linearGradient>
        <linearGradient id={`${id}-line`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={zed} />
          <stop offset="0.55" stopColor="#FFB060" />
          <stop offset="1" stopColor="#FF7900" />
        </linearGradient>
        <radialGradient id={`${id}-dot`}>
          <stop offset="0" stopColor="#FFF4D6" />
          <stop offset="0.35" stopColor="#FF7900" />
          <stop offset="1" stopColor="#FF7900" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Letter outlines measured from the brand logo (cap height 178). */}
      <g fill={zed} fillRule="evenodd">
        {/* Z */}
        <path d="M0 0 H150 V45 L60 133 H150 V178 H0 V135 L90 45 H0 Z" />
        {/* E, rounded on the left */}
        <path d="M310 0 H200 Q170 0 170 30 V148 Q170 178 200 178 H310 V135 H213 V110 H300 V68 H213 V43 H310 Z" />
        {/* D, square on the left, rounded on the right */}
        <path d="M330 0 H443 Q475 0 475 32 V146 Q475 178 443 178 H330 Z M373 43 V135 H424 Q432 135 432 127 V51 Q432 43 424 43 Z" />
      </g>

      <g fill={labs} fillRule="evenodd">
        {/* L */}
        <path d="M525 0 H568 V135 H617 V178 H525 Z" />
        {/* A, in the same squared style as ZED: rounded top, crossbar, square legs */}
        <path d="M630 178 V32 Q630 0 662 0 H743 Q775 0 775 32 V178 H732 V110 H673 V178 Z M673 51 V68 H732 V51 Q732 43 724 43 H681 Q673 43 673 51 Z" />
        {/* B, square on the left, two rounded bowls on the right */}
        <path d="M795 0 H882 Q910 0 910 28 V60 Q910 80 896 89 Q918 98 918 120 V150 Q918 178 890 178 H795 Z M838 41 V71 H860 Q869 71 869 62 V50 Q869 41 860 41 Z M838 107 V137 H866 Q876 137 876 127 V117 Q876 107 866 107 Z" />
        {/* S */}
        <path d="M1050 0 H963 Q935 0 935 28 V82 Q935 110 963 110 H1007 V135 H935 V178 H1022 Q1050 178 1050 150 V96 Q1050 68 1022 68 H978 V43 H1050 Z" />
      </g>

      {underline && (
        <>
          <rect x="0" y="220" width="1030" height="4" rx="2" fill={`url(#${id}-line)`} />
          <circle cx="1030" cy="222" r="22" fill={`url(#${id}-dot)`} />
          <circle cx="1030" cy="222" r="5" fill="#FFF4D6" />
        </>
      )}
    </svg>
  );
}
