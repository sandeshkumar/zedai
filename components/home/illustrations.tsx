/**
 * Coastal Karnataka illustrations, drawn as flat vector art in one shared style:
 * limited palette, bold shapes, gentle CSS animation (disabled by the global
 * reduced-motion rule). No hooks, so these render on the server too.
 */

import { GOLD, INK, KUMKUM, PrabhavaliShapes, TURMERIC } from "./motifs";

const SEA = "#1E3A5F";
const TILE = "#B4532A";
const TILE_DEEP = "#8A3A1C";
const PALM = "#1F3B2A";
const CREAM = "#F4EBDD";
const LATERITE = "#A9543A";
const WOOD = "#5A3A28";
const GREEN = "#1F6B4A";
const FACE = "#EFA24A";

const r3 = (n: number) => Math.round(n * 1000) / 1000;

/* ------------------------------------------------------------------ */
/* Coconut palm                                                        */
/* ------------------------------------------------------------------ */

const FROND =
  "M0 0 C 18 -16 42 -16 66 4 L 60 2 L 58 9 L 52 3 L 49 11 L 43 4 L 39 12 L 33 4 L 29 11 L 23 3 L 18 9 L 12 2 Z";

export function Palm({
  className = "",
  color = PALM,
  lean = 0,
  sway = true,
}: {
  className?: string;
  color?: string;
  lean?: number; // degrees; negative leans left
  sway?: boolean;
}) {
  const fronds = [
    { r: -165, s: 1.05 },
    { r: -140, s: 0.9 },
    { r: -115, s: 0.7 },
    { r: -60, s: 0.72 },
    { r: -35, s: 0.92 },
    { r: -12, s: 1.05 },
    { r: 20, s: 0.95 },
    { r: 160, s: 0.95 },
  ];
  return (
    <svg viewBox="0 0 160 260" className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <g transform={`rotate(${lean} 80 258)`}>
        <path d="M74 258 C 76 200, 80 140, 86 76 L 94 76 C 90 140, 86 200, 86 258 Z" fill={color} />
        {[240, 215, 190, 165, 140, 115, 95].map((y, i) => (
          <path key={i} d={`M${76 + i * 1.3} ${y} q 5 -3 10 0`} stroke={CREAM} strokeOpacity="0.18" strokeWidth="1.4" fill="none" />
        ))}
        <g
          style={
            sway
              ? { transformOrigin: "90px 74px", animation: "palm-sway 5.5s ease-in-out infinite alternate", transformBox: "view-box" }
              : undefined
          }
        >
          {fronds.map((f, i) => (
            <path key={i} d={FROND} fill={color} transform={`translate(90 74) rotate(${f.r}) scale(${f.s})`} />
          ))}
          <circle cx="86" cy="80" r="5" fill={color} />
          <circle cx="94" cy="81" r="5" fill={color} />
          <circle cx="90" cy="86" r="5" fill={color} />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Tile-roofed house                                                   */
/* ------------------------------------------------------------------ */

export function TileHouse({
  className = "",
  wall = CREAM,
  doorOpen = false,
  id = "th",
}: {
  className?: string;
  wall?: string;
  doorOpen?: boolean;
  id?: string;
}) {
  return (
    <svg viewBox="0 0 240 180" className={className} aria-hidden="true">
      <defs>
        <pattern id={`${id}-tiles`} width="14" height="8" patternUnits="userSpaceOnUse">
          <rect width="14" height="8" fill={TILE} />
          <path d="M0 0a7 6 0 0 0 14 0" fill="none" stroke={TILE_DEEP} strokeWidth="1.3" />
        </pattern>
      </defs>
      {/* plinth and steps */}
      <rect x="24" y="150" width="192" height="14" fill={LATERITE} />
      <rect x="98" y="164" width="44" height="6" fill={LATERITE} />
      <rect x="92" y="170" width="56" height="6" fill="#8E4630" />
      {/* walls */}
      <rect x="34" y="78" width="172" height="72" fill={wall} />
      <rect x="34" y="78" width="172" height="8" fill="#000" opacity="0.08" />
      {/* windows with wooden bars */}
      {[56, 160].map((x) => (
        <g key={x}>
          <rect x={x} y="98" width="26" height="30" fill={WOOD} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x + 3 + i * 6} y="101" width="2" height="24" fill="#C8A57A" />
          ))}
        </g>
      ))}
      {/* door */}
      <rect x="104" y="92" width="32" height="58" fill={WOOD} />
      {doorOpen ? (
        <>
          <rect x="108" y="96" width="24" height="54" fill="#F2C46D" />
          <path d="M108 96 L 98 100 L 98 146 L 108 150 Z" fill="#7A4E36" />
        </>
      ) : (
        <>
          <rect x="108" y="96" width="11" height="54" fill="#7A4E36" />
          <rect x="121" y="96" width="11" height="54" fill="#7A4E36" />
          <circle cx="119" cy="124" r="1.6" fill={GOLD} />
          <circle cx="121" cy="124" r="1.6" fill={GOLD} />
        </>
      )}
      {/* verandah posts */}
      {[40, 88, 152, 200].map((x) => (
        <rect key={x} x={x - 3} y="74" width="6" height="76" fill={WOOD} />
      ))}
      {/* hipped tile roof with deep eaves */}
      <path d="M6 80 L 54 22 L 186 22 L 234 80 Z" fill={`url(#${id}-tiles)`} />
      <path d="M6 80 L 234 80 L 226 86 L 14 86 Z" fill={TILE_DEEP} />
      <path d="M54 22 L 186 22" stroke={TILE_DEEP} strokeWidth="4" strokeLinecap="round" />
      <path d="M54 22 L 6 80 M186 22 L 234 80" stroke={TILE_DEEP} strokeWidth="2.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Lighthouse with a sweeping beam                                     */
/* ------------------------------------------------------------------ */

export function Lighthouse({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-120 0 200 180" className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="lh-beam" x1="1" x2="0" y1="0" y2="0">
          <stop offset="0" stopColor="#FFE3A3" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFE3A3" stopOpacity="0" />
        </linearGradient>
        <clipPath id="lh-tower">
          <path d="M20 48 L 40 48 L 46 160 L 14 160 Z" />
        </clipPath>
      </defs>
      <path
        d="M30 34 L -120 10 L -120 60 Z"
        fill="url(#lh-beam)"
        style={{ transformOrigin: "30px 34px", animation: "beam 6s ease-in-out infinite", transformBox: "view-box" }}
      />
      <path d="M0 170 Q 30 150 60 170 Z" fill="#3B4A57" />
      <g clipPath="url(#lh-tower)">
        <rect x="0" y="40" width="60" height="130" fill="#F7F3EC" />
        {[62, 94, 126].map((y) => (
          <rect key={y} x="0" y={y} width="60" height="14" fill={KUMKUM} />
        ))}
      </g>
      <rect x="16" y="44" width="28" height="5" fill={INK} />
      <rect x="21" y="28" width="18" height="16" fill="#F2C46D" stroke={INK} strokeWidth="2" />
      <path d="M19 28 Q 30 14 41 28 Z" fill={KUMKUM} />
      <rect x="29" y="12" width="2" height="6" fill={INK} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Fishing boat                                                        */
/* ------------------------------------------------------------------ */

export function Boat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
      <path d="M58 8v44M58 10l26 36M58 14L34 46" stroke={INK} strokeWidth="1.6" fill="none" />
      <path d="M40 22 L 58 12 L 58 40 Z" fill={KUMKUM} opacity="0.9" />
      <path d="M64 38h20v14H64z" fill="#F7F3EC" stroke={INK} strokeWidth="1.6" />
      <rect x="68" y="42" width="5" height="5" fill={SEA} />
      <path d="M6 52h108l-14 14H20z" fill={SEA} />
      <path d="M6 52h108l-3 4H9z" fill={TURMERIC} />
      <path d="M22 58h76" stroke="#F7F3EC" strokeWidth="1.4" strokeDasharray="4 5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Kambala: a buffalo pair and runner racing through water              */
/* ------------------------------------------------------------------ */

function Buffalo({ x = 0, y = 0, shade = INK, cloth = KUMKUM }: { x?: number; y?: number; shade?: string; cloth?: string }) {
  const leg = { stroke: shade, strokeWidth: 8, strokeLinecap: "round" as const };
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* legs, two poses swapped by CSS for a gallop */}
      <g className="kambala-pose-a">
        <line x1="120" y1="56" x2="138" y2="80" {...leg} />
        <line x1="110" y1="58" x2="98" y2="82" {...leg} />
        <line x1="42" y1="58" x2="58" y2="82" {...leg} />
        <line x1="34" y1="56" x2="14" y2="76" {...leg} />
      </g>
      <g className="kambala-pose-b">
        <line x1="120" y1="56" x2="112" y2="84" {...leg} />
        <line x1="110" y1="58" x2="126" y2="82" {...leg} />
        <line x1="42" y1="58" x2="30" y2="84" {...leg} />
        <line x1="34" y1="56" x2="46" y2="82" {...leg} />
      </g>
      {/* tail */}
      <path d="M22 36 C 10 36, 4 46, 2 58" stroke={shade} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* body with a hump over the shoulders */}
      <path
        d="M20 40 C 22 24, 46 16, 76 18 C 96 12, 114 14, 126 26 C 134 34, 132 50, 126 56 C 110 64, 60 64, 34 60 C 22 58, 18 50, 20 40 Z"
        fill={shade}
      />
      {/* decorated saddle cloth */}
      <path d="M62 20 L 104 17 L 106 40 L 64 44 Z" fill={cloth} />
      <path d="M64 44 L 106 40" stroke={GOLD} strokeWidth="3" strokeDasharray="3 3" />
      {/* head, lowered and charging */}
      <path d="M120 28 C 132 24, 144 30, 150 42 C 154 50, 150 58, 144 60 C 136 62, 128 54, 124 46 Z" fill={shade} />
      {/* swept-back horns */}
      <path d="M130 30 C 124 16, 110 10, 98 14 C 110 16, 120 22, 126 34 Z" fill={shade} />
      <path d="M136 30 C 136 18, 128 10, 118 8 C 126 14, 130 22, 132 32 Z" fill={shade} opacity="0.85" />
      <circle cx="140" cy="40" r="2" fill="#F7F3EC" />
      {/* garland */}
      <path d="M118 36 Q 124 52 132 50" stroke={TURMERIC} strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
}

export function KambalaRace({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 130" className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      {/* splash trail */}
      <g className="kambala-splash">
        {[
          [18, 96, 10],
          [36, 104, 7],
          [8, 108, 6],
          [58, 110, 8],
          [150, 112, 7],
          [176, 106, 9],
          [196, 114, 6],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#EAF2F8" opacity="0.9" />
        ))}
        <path d="M0 100 Q 30 70 60 104" stroke="#EAF2F8" strokeWidth="3" fill="none" />
        <path d="M150 108 Q 175 84 200 110" stroke="#EAF2F8" strokeWidth="3" fill="none" />
      </g>
      {/* runner behind the pair, turban in kumkum */}
      <g transform="translate(20 20)">
        <g className="kambala-pose-a">
          <line x1="40" y1="70" x2="26" y2="96" stroke={INK} strokeWidth="6" strokeLinecap="round" />
          <line x1="40" y1="70" x2="58" y2="94" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        </g>
        <g className="kambala-pose-b">
          <line x1="40" y1="70" x2="48" y2="98" stroke={INK} strokeWidth="6" strokeLinecap="round" />
          <line x1="40" y1="70" x2="36" y2="96" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        </g>
        <path d="M28 64 L 52 62 L 48 78 L 32 78 Z" fill="#F7F3EC" />
        <path d="M36 36 L 52 64 L 30 66 Z" fill={INK} />
        <line x1="46" y1="44" x2="96" y2="46" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <circle cx="38" cy="28" r="9" fill={INK} />
        <path d="M28 24 Q 38 12 48 22 L 46 26 Q 38 20 30 27 Z" fill={KUMKUM} />
        <path d="M30 26 L 20 30" stroke={KUMKUM} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* reins and yoke */}
      <line x1="116" y1="66" x2="232" y2="44" stroke={WOOD} strokeWidth="3" />
      <rect x="220" y="30" width="8" height="30" rx="3" fill={WOOD} />
      <Buffalo x={138} y={-8} shade="#3A3A44" cloth={TURMERIC} />
      <Buffalo x={100} y={22} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Yakshagana performer                                                */
/* ------------------------------------------------------------------ */

export function YakshaganaPerformer({ className = "" }: { className?: string }) {
  const mirror = (cx: number, cy: number, r = 5, k = 0) => (
    <g key={`${cx}-${cy}`}>
      <circle cx={cx} cy={cy} r={r + 2} fill={GOLD} />
      <circle cx={cx} cy={cy} r={r} fill="#FFF8E7" className="twinkle" style={{ animationDelay: `${(k % 7) * 0.4}s` }} />
    </g>
  );

  // Collar (edehara) arcs with mirrors.
  const collar = [0, 1, 2].map((i) => {
    const sag = 402 + i * 22;
    const d = `M${118 - i * 8} ${360 + i * 4} Q 200 ${sag + 30} ${282 + i * 8} ${360 + i * 4}`;
    return { d, i };
  });

  return (
    <svg viewBox="0 0 400 520" className={className} role="img" aria-label="Illustration of a Yakshagana performer in full headdress">
      <g style={{ transformOrigin: "200px 520px", animation: "sway 6s ease-in-out infinite alternate", transformBox: "view-box" }}>
        {/* great headdress (kedige mundale) behind the head */}
        <g transform="translate(200 210) scale(1.9)">
          <PrabhavaliShapes />
        </g>
        <circle cx="200" cy="210" r="112" fill={GREEN} />
        <circle cx="200" cy="210" r="112" fill="none" stroke={GOLD} strokeWidth="5" strokeDasharray="2 7" />
        <circle cx="200" cy="210" r="96" fill={KUMKUM} />

        {/* shoulder ornaments (bhujakeerthi) */}
        {[1, -1].map((s) => (
          <g key={s} transform={`translate(200 0) scale(${s} 1) translate(-200 0)`}>
            <path d="M118 392 C 84 372, 58 336, 44 292 C 74 310, 100 336, 136 368 Z" fill={GOLD} />
            <path d="M116 380 C 92 364, 74 340, 64 314 C 84 328, 102 346, 126 368 Z" fill={KUMKUM} />
            {mirror(82, 342, 5, s > 0 ? 1 : 4)}
            {mirror(100, 360, 3.5, s > 0 ? 2 : 5)}
          </g>
        ))}

        {/* costume */}
        <path d="M58 520 C 66 420, 120 360, 200 354 C 280 360, 334 420, 342 520 Z" fill={KUMKUM} />
        <path d="M150 520 L 164 380 L 236 380 L 250 520 Z" fill={GREEN} opacity="0.9" />
        {/* collar */}
        {collar.map(({ d, i }) => (
          <path key={i} d={d} stroke={i === 1 ? "#F4D27A" : GOLD} strokeWidth={i === 1 ? 7 : 10} fill="none" strokeLinecap="round" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((k) => {
          const t = (k + 1) / 8;
          const x = 118 + t * 164;
          const y = 360 + 4 * t * (1 - t) * 60;
          return mirror(r3(x), r3(y + 12), 4, k);
        })}
        {/* pendant */}
        <path d="M188 440 L 212 440 L 200 468 Z" fill={GOLD} />
        {mirror(200, 450, 5, 3)}

        {/* neck */}
        <rect x="178" y="296" width="44" height="62" rx="12" fill={FACE} />
        <rect x="178" y="330" width="44" height="10" fill={GOLD} />

        {/* ear discs (kivichakra) */}
        {[132, 268].map((cx, k) => (
          <g key={cx}>
            <circle cx={cx} cy="240" r="28" fill={GOLD} />
            <circle cx={cx} cy="240" r="20" fill={KUMKUM} />
            {mirror(cx, 240, 8, k + 2)}
            <path d={`M${cx - 6} 268 L ${cx} 292 L ${cx + 6} 268 Z`} fill={GOLD} />
          </g>
        ))}

        {/* face */}
        <ellipse cx="200" cy="238" rx="60" ry="74" fill={FACE} />
        {/* white rice-paste border along the jaw */}
        <path d="M146 262 Q 200 330 254 262" stroke="#FFF8E7" strokeWidth="5" strokeDasharray="1 7" strokeLinecap="round" fill="none" />
        {/* forehead mark */}
        <path d="M188 160 L 192 206 Q 200 214 208 206 L 212 160" stroke="#FFF8E7" strokeWidth="5" fill="none" strokeLinecap="round" />
        <line x1="200" y1="164" x2="200" y2="204" stroke={KUMKUM} strokeWidth="4" strokeLinecap="round" />

        {/* brows */}
        <path d="M146 206 Q 168 186 192 200" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M254 206 Q 232 186 208 200" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
        {/* eyes with swept wings */}
        {[
          { c: 171, wing: "M150 222 L 132 208" },
          { c: 229, wing: "M250 222 L 268 208" },
        ].map((e) => (
          <g key={e.c}>
            <path d={`M${e.c - 21} 222 Q ${e.c} 206 ${e.c + 21} 222 Q ${e.c} 236 ${e.c - 21} 222 Z`} fill="#FFFDF7" stroke={INK} strokeWidth="5" />
            <path d={e.wing} stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <circle cx={e.c} cy="222" r="6" fill={INK} className="glance" />
          </g>
        ))}
        {/* red accents under the eyes */}
        <path d="M152 236 Q 170 246 190 238" stroke={KUMKUM} strokeWidth="3" fill="none" />
        <path d="M248 236 Q 230 246 210 238" stroke={KUMKUM} strokeWidth="3" fill="none" />
        {/* nose */}
        <path d="M200 226 L 196 256 Q 200 260 206 256" stroke="#B8702C" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* curled moustache */}
        {[1, -1].map((s) => (
          <path
            key={s}
            transform={`translate(200 0) scale(${s} 1) translate(-200 0)`}
            d="M200 268 C 184 262, 164 262, 150 272 C 142 278, 142 290, 152 290 C 150 282, 160 276, 174 278 C 186 279, 194 274, 200 272 Z"
            fill={INK}
          />
        ))}
        {/* lips */}
        <path d="M184 288 Q 200 298 216 288 Q 200 304 184 288 Z" fill={KUMKUM} />

        {/* crown band across the forehead */}
        <path d="M136 176 Q 200 128 264 176 L 258 186 Q 200 142 142 186 Z" fill={GOLD} />
        {[150, 172, 200, 228, 250].map((x, k) => mirror(x, 168 - (x === 200 ? 12 : x === 172 || x === 228 ? 8 : 0), 3.5, k))}
        {/* crown peak */}
        <path d="M176 142 Q 200 70 224 142 Z" fill={GOLD} />
        <path d="M186 138 Q 200 92 214 138 Z" fill={KUMKUM} />
        {mirror(200, 122, 6, 6)}
        <circle cx="200" cy="80" r="6" fill={GOLD} />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Pili Vesha tiger face, painted in stages                            */
/* ------------------------------------------------------------------ */

function taper(x: number, y: number, len: number, w: number, angle: number, bend = 0) {
  // Tapered stripe from (x, y) pointing along `angle` degrees.
  const a = (angle * Math.PI) / 180;
  const nx = Math.cos(a);
  const ny = Math.sin(a);
  const px = -ny;
  const py = nx;
  const tipX = x + nx * len + px * bend;
  const tipY = y + ny * len + py * bend;
  const midX = x + nx * len * 0.55 + px * bend * 0.6;
  const midY = y + ny * len * 0.55 + py * bend * 0.6;
  return `M${r3(x + (px * w) / 2)} ${r3(y + (py * w) / 2)} Q${r3(midX + (px * w) / 3)} ${r3(midY + (py * w) / 3)} ${r3(tipX)} ${r3(tipY)} Q${r3(midX - (px * w) / 3)} ${r3(midY - (py * w) / 3)} ${r3(x - (px * w) / 2)} ${r3(y - (py * w) / 2)}Z`;
}

const HEAD =
  "M150 40 C 205 40, 245 70, 258 110 L 274 126 L 258 138 L 278 158 L 256 170 L 270 192 L 244 196 C 230 240, 196 264, 150 264 C 104 264, 70 240, 56 196 L 30 192 L 44 170 L 22 158 L 42 138 L 26 126 L 42 110 C 55 70, 95 40, 150 40 Z";

const STRIPES = [
  // forehead
  taper(150, 44, 46, 12, 90),
  taper(132, 48, 34, 9, 100, -6),
  taper(168, 48, 34, 9, 80, 6),
  taper(116, 58, 24, 7, 115, -4),
  taper(184, 58, 24, 7, 65, 4),
  // around the eyes
  taper(92, 100, 30, 9, 20, 4),
  taper(208, 100, 30, 9, 160, -4),
  // cheeks, growing in from the ruff
  ...[0, 1, 2].flatMap((i) => [
    taper(54 + i * 2, 138 + i * 22, 44 - i * 6, 10, 8 - i * 6, 5),
    taper(246 - i * 2, 138 + i * 22, 44 - i * 6, 10, 172 + i * 6, -5),
  ]),
  // chin
  taper(126, 252, 22, 7, -70, 3),
  taper(174, 252, 22, 7, -110, -3),
].join("");

export function TigerFace({ stage = 4, className = "", sketch = INK }: { stage?: number; className?: string; sketch?: string }) {
  const show = (n: number) => ({
    opacity: stage >= n ? 1 : 0,
    transition: "opacity 0.7s ease, transform 0.7s ease",
    transform: stage >= n ? "scale(1)" : "scale(0.96)",
    transformOrigin: "150px 150px",
    transformBox: "view-box" as const,
  });

  return (
    <svg viewBox="0 0 300 300" className={className} role="img" aria-label="Illustration of a Pili Vesha tiger face being painted">
      {/* stage 0: the sketch */}
      <path d={HEAD} fill="none" stroke={sketch} strokeWidth="2.5" strokeDasharray="6 6" opacity={stage >= 1 ? 0 : 0.9} style={{ transition: "opacity 0.5s" }} />
      {/* stage 1: turmeric base coat and ears */}
      <g style={show(1)}>
        {[78, 222].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="62" r="28" fill={INK} />
            <circle cx={cx} cy="64" r="20" fill={TURMERIC} />
            <circle cx={cx} cy="68" r="11" fill="#FFF8E7" />
          </g>
        ))}
        <path d={HEAD} fill={TURMERIC} />
        <path d={HEAD} fill="url(#tf-shade)" />
        <defs>
          <radialGradient id="tf-shade" cx="0.5" cy="0.35" r="0.7">
            <stop offset="0.5" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#B85A10" stopOpacity="0.45" />
          </radialGradient>
        </defs>
      </g>
      {/* stage 2: white patches */}
      <g style={show(2)} fill="#FFF8E7">
        <ellipse cx="112" cy="116" rx="24" ry="12" />
        <ellipse cx="188" cy="116" rx="24" ry="12" />
        <path d="M150 168 C 118 166, 96 186, 98 208 C 100 232, 128 244, 150 238 C 172 244, 200 232, 202 208 C 204 186, 182 166, 150 168 Z" />
        <path d="M70 196 C 84 226, 112 248, 150 252 C 188 248, 216 226, 230 196 C 210 214, 190 222, 150 224 C 110 222, 90 214, 70 196 Z" />
      </g>
      {/* stage 3: stripes */}
      <path d={STRIPES} fill={INK} style={show(3)} />
      {/* stage 4: eyes, nose, whiskers, it comes alive */}
      <g style={show(4)}>
        {[112, 188].map((cx) => (
          <g key={cx} className="blink" style={{ transformOrigin: `${cx}px 140px`, transformBox: "view-box" }}>
            <path d={`M${cx - 22} 140 Q ${cx} 122 ${cx + 22} 140 Q ${cx} 154 ${cx - 22} 140 Z`} fill="#F2C14E" stroke={INK} strokeWidth="4" />
            <circle cx={cx} cy="140" r="7" fill={INK} />
            <circle cx={cx + 2} cy="137" r="2" fill="#fff" />
          </g>
        ))}
        <path d="M134 170 L 166 170 Q 150 192 134 170 Z" fill="#7A2E2E" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M150 188 L 150 200 M150 200 Q 138 214 124 204 M150 200 Q 162 214 176 204" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {[
          [124, 190],
          [116, 198],
          [128, 200],
          [176, 190],
          [184, 198],
          [172, 200],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" fill={INK} />
        ))}
        {/* painted fangs, as Pili Vesha dancers wear them */}
        <path d="M136 214 L 140 228 L 144 214 Z M156 214 L 160 228 L 164 214 Z" fill="#FFF" stroke={INK} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Goli baje with a glass of chai                                      */
/* ------------------------------------------------------------------ */

export function GoliBaje({ className = "" }: { className?: string }) {
  const baje = [
    [92, 86],
    [126, 80],
    [158, 90],
    [110, 108],
    [144, 112],
    [76, 106],
  ];
  return (
    <svg viewBox="0 0 300 180" className={className} role="img" aria-label="Illustration of a plate of goli baje with coconut chutney and a glass of chai">
      <defs>
        <radialGradient id="gb" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#E7A94A" />
          <stop offset="1" stopColor="#A9611E" />
        </radialGradient>
      </defs>
      {/* steel plate */}
      <ellipse cx="124" cy="112" rx="112" ry="46" fill="#C9CED4" />
      <ellipse cx="124" cy="106" rx="100" ry="38" fill="#E3E7EB" />
      {/* chutney bowl */}
      <ellipse cx="192" cy="104" rx="26" ry="12" fill="#BFC5CB" />
      <ellipse cx="192" cy="101" rx="21" ry="8" fill="#F4F1E6" />
      <circle cx="186" cy="100" r="2" fill="#2F6B3A" />
      <circle cx="196" cy="102" r="1.6" fill="#2F6B3A" />
      <circle cx="200" cy="99" r="1.4" fill="#B3261E" />
      {/* goli baje */}
      {baje.map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y + 8} rx="18" ry="6" fill="#000" opacity="0.08" />
          <circle cx={x} cy={y} r="17" fill="url(#gb)" />
          {[0, 1, 2, 3].map((k) => (
            <circle key={k} cx={x - 8 + ((k * 7 + i * 3) % 16)} cy={y - 6 + ((k * 5 + i * 2) % 12)} r="1.4" fill="#7A4312" opacity="0.6" />
          ))}
        </g>
      ))}
      {/* cutting chai glass */}
      <path d="M238 60 L 282 60 L 276 150 L 244 150 Z" fill="#F1E7DA" opacity="0.6" stroke="#9AA3AB" strokeWidth="2" />
      <path d="M241 84 L 279 84 L 276 150 L 244 150 Z" fill="#B9772F" />
      <path d="M241 84 L 279 84" stroke="#E9C79B" strokeWidth="3" />
      {/* steam */}
      {[250, 262, 272].map((x, i) => (
        <path
          key={x}
          d={`M${x} 52 q -6 -10 0 -20 q 6 -10 0 -20`}
          stroke="#9AA3AB"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="steam"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Yakshagana stage curtain (tere)                                     */
/* ------------------------------------------------------------------ */

export function Tere({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="none" className={className} aria-hidden="true">
      <rect width="400" height="300" fill={KUMKUM} />
      <rect y="0" width="400" height="26" fill={GOLD} />
      <rect y="274" width="400" height="26" fill={GOLD} />
      {Array.from({ length: 20 }, (_, i) => (
        <g key={i}>
          <circle cx={10 + i * 20} cy="13" r="5" fill="#FFF8E7" />
          <circle cx={10 + i * 20} cy="287" r="5" fill="#FFF8E7" />
        </g>
      ))}
      <g transform="translate(200 150) scale(0.9)">
        <PrabhavaliShapes />
      </g>
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={i * 50 - 2} y="26" width="4" height="248" fill="#000" opacity="0.08" />
      ))}
    </svg>
  );
}
