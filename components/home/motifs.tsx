/**
 * Coastal Karnataka motifs, drawn from scratch as vector art:
 * - Pili Vesha: the tiger dance of Mangalore and Udupi, turmeric body paint with black stripes.
 * - Yakshagana: the prabhavali, the radiant crown with petals and mirror work, in kumkum red and gold.
 * No hooks here, so these work in server and client components alike.
 */

export const KUMKUM = "#B3261E";
export const GOLD = "#D9A43B";
export const TURMERIC = "#EDA721";
export const TURMERIC_DEEP = "#D9791A";
export const INK = "#0B0D12";

// Round trig output so server and client render identical attribute strings.
const r3 = (n: number) => Math.round(n * 1000) / 1000;

const uri = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

// Small deterministic PRNG so stripes render identically on server and client.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** One tapered, slightly bent tiger stripe growing from an edge. */
function stripe(x: number, edgeY: number, dir: 1 | -1, len: number, width: number, bend: number) {
  const tipY = edgeY + dir * len;
  const midY = edgeY + dir * len * 0.55;
  return `M${x - width / 2} ${edgeY} Q${x - width / 2 + bend * 0.7} ${midY} ${x + bend} ${tipY} Q${x + width / 2 + bend * 0.4} ${midY} ${x + width / 2} ${edgeY}Z`;
}

/**
 * Tiger stripe tile. `reach` is how far stripes grow in from each edge
 * (0.5 or more covers the whole tile, below that leaves a clear middle band).
 */
export function tigerSvg({
  w = 260,
  h = 120,
  reach = 0.62,
  count = 7,
  seed = 7,
  bg = "none",
  color = INK,
}: { w?: number; h?: number; reach?: number; count?: number; seed?: number; bg?: string; color?: string } = {}) {
  const r = rng(seed);
  const paths: string[] = [];
  const step = w / count;
  for (let i = 0; i < count; i++) {
    for (const [edge, dir] of [[0, 1], [h, -1]] as const) {
      const x = step * i + step * (dir === 1 ? 0.25 : 0.75) + (r() - 0.5) * step * 0.3;
      const len = h * reach * (0.55 + r() * 0.45);
      const width = step * (0.28 + r() * 0.18);
      const bend = (r() - 0.5) * step * 0.9;
      paths.push(stripe(x, edge, dir, len, width, bend));
      // Occasional fork, like real tiger paint.
      if (r() > 0.6) paths.push(stripe(x + width * 0.9, edge, dir, len * 0.45, width * 0.5, bend * 0.6));
      // Stripes that wrap around the tile edge so the pattern tiles seamlessly.
      if (x < step) paths.push(stripe(x + w, edge, dir, len, width, bend));
      if (x > w - step) paths.push(stripe(x - w, edge, dir, len, width, bend));
    }
  }
  const back = bg === "none" ? "" : `<rect width='${w}' height='${h}' fill='${bg}'/>`;
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${back}<path d='${paths.join("")}' fill='${color}'/></svg>`;
}

/** Turmeric-and-stripes fill for big numerals (use with background-clip: text). */
export const TIGER_FILL = [
  uri(tigerSvg({ w: 180, h: 140, reach: 0.72, count: 5, seed: 11, color: INK })),
  `linear-gradient(170deg, ${TURMERIC} 0%, #F0B53A 40%, ${TURMERIC_DEEP} 100%)`,
].join(", ");

/** Festival band: turmeric with stripes from both edges and a clear middle for text. */
export const TIGER_BAND = uri(tigerSvg({ w: 300, h: 150, reach: 0.3, count: 8, seed: 3, bg: TURMERIC }));

/** Yakshagana border: kumkum ground, gold scallops with mirror dots along both edges. */
export const YAKSHA_BAND = uri(
  `<svg xmlns='http://www.w3.org/2000/svg' width='44' height='150' viewBox='0 0 44 150'>` +
    `<rect width='44' height='150' fill='${KUMKUM}'/>` +
    `<rect y='6' width='44' height='2' fill='${GOLD}'/><rect y='142' width='44' height='2' fill='${GOLD}'/>` +
    `<path d='M0 10a22 16 0 0 0 44 0z' fill='${GOLD}'/><circle cx='22' cy='16' r='4.5' fill='#fff'/><circle cx='22' cy='16' r='4.5' fill='none' stroke='${KUMKUM}' stroke-width='1.2'/>` +
    `<path d='M0 140a22 16 0 0 1 44 0z' fill='${GOLD}'/><circle cx='22' cy='134' r='4.5' fill='#fff'/><circle cx='22' cy='134' r='4.5' fill='none' stroke='${KUMKUM}' stroke-width='1.2'/>` +
    `</svg>`
);

/**
 * Yakshagana prabhavali: scalloped gold rim, alternating red and gold petals,
 * a ring of mirror work, and an open centre. Drawn around (0, 0), radius ~98,
 * so it can be dropped into any SVG with a transform.
 */
export function PrabhavaliShapes({ spin = 0, muted = false }: { spin?: number; muted?: boolean }) {
  const red = muted ? "rgba(179,38,30,0.9)" : KUMKUM;
  const petals = 24;
  const scallops = 36;
  const mirrors = 24;
  const petal = "M0 -86 C 7 -76 7 -64 0 -56 C -7 -64 -7 -76 0 -86Z";

  return (
    <g style={spin ? { transformOrigin: "0 0", transformBox: "view-box", animation: `spin-slow ${spin}s linear infinite` } : undefined}>
      {/* scalloped rim */}
      {Array.from({ length: scallops }, (_, i) => {
        const a = (i / scallops) * Math.PI * 2;
        return <circle key={`s${i}`} cx={r3(Math.sin(a) * 90)} cy={r3(-Math.cos(a) * 90)} r="7.5" fill={GOLD} />;
      })}
      <circle r="88" fill={red} />
      <circle r="88" fill="none" stroke={INK} strokeOpacity="0.25" strokeWidth="0.8" />
      {/* petals */}
      {Array.from({ length: petals }, (_, i) => (
        <path
          key={`p${i}`}
          d={petal}
          transform={`rotate(${(i / petals) * 360})`}
          fill={i % 2 ? GOLD : "#F4D27A"}
          stroke={INK}
          strokeOpacity="0.2"
          strokeWidth="0.6"
        />
      ))}
      {/* rays between petals */}
      {Array.from({ length: petals }, (_, i) => (
        <line key={`r${i}`} y1="-84" y2="-58" transform={`rotate(${((i + 0.5) / petals) * 360})`} stroke={GOLD} strokeWidth="1.2" />
      ))}
      {/* mirror work */}
      <circle r="52" fill={GOLD} />
      {Array.from({ length: mirrors }, (_, i) => {
        const a = (i / mirrors) * Math.PI * 2;
        return (
          <g key={`m${i}`} transform={`translate(${r3(Math.sin(a) * 47)} ${r3(-Math.cos(a) * 47)})`}>
            <circle r="3.6" fill="#FFF8E7" />
            <circle r="3.6" fill="none" stroke={red} strokeWidth="1" />
          </g>
        );
      })}
      <circle r="41" fill={red} />
      <circle r="37" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="1.5 3.2" />
    </g>
  );
}

export function Prabhavali({
  className = "",
  spin = 0,
  style,
  muted = false,
}: {
  className?: string;
  spin?: number; // seconds per revolution, 0 = still
  style?: React.CSSProperties;
  muted?: boolean;
}) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} style={style} aria-hidden="true">
      <PrabhavaliShapes spin={spin} muted={muted} />
    </svg>
  );
}

/** Small ornament for timelines and separators: a mirror set in a gold and red ring. */
export function MirrorDot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-10 -10 20 20" className={className} aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return <circle key={i} cx={r3(Math.sin(a) * 8.2)} cy={r3(-Math.cos(a) * 8.2)} r="1.8" fill={GOLD} />;
      })}
      <circle r="7.4" fill={KUMKUM} />
      <circle r="4" fill="#FFF8E7" stroke={GOLD} strokeWidth="1.2" />
    </svg>
  );
}
