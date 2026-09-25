"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { Prabhavali } from "./motifs";
import { Boat as PaintedBoat, Palm } from "./illustrations";

/**
 * Line-art Arabian Sea behind the hero: a horizon, a setting sun with its
 * Yakshagana crown and reflection, rows of drifting waves (nearer rows larger and faster), a
 * fishing boat and a few gulls. Scrolling sets the sun.
 */

const HORIZON = 64; // % from top of the scene
const SUN_X = "90%";

const WAVES = Array.from({ length: 9 }, (_, i) => {
  const t = i / 8;
  const amp = 1.2 + t * 6.5;
  const wl = Math.round(70 + t * 190);
  const alpha = (0.05 + t * 0.11).toFixed(3);
  const h = Math.ceil(amp * 2 + 3);
  const mid = amp + 1.5;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${wl}' height='${h}' viewBox='0 0 ${wl} ${h}'><path d='M0 ${mid} Q ${wl / 4} ${mid - amp} ${wl / 2} ${mid} T ${wl} ${mid}' fill='none' stroke='rgba(30,58,95,${alpha})' stroke-width='${(1 + t * 0.6).toFixed(2)}'/></svg>`;
  return {
    top: HORIZON + 1.2 + Math.pow(t, 1.55) * (100 - HORIZON - 3),
    h,
    wl,
    bg: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    duration: 46 - t * 30,
    offset: (i * 37) % wl,
  };
});

const GULLS = [
  { left: "58%", top: "20%", scale: 1, delay: 0, gx: "220px", gy: "-24px", dur: 26 },
  { left: "63%", top: "26%", scale: 0.75, delay: -6, gx: "180px", gy: "-12px", dur: 30 },
  { left: "70%", top: "16%", scale: 0.6, delay: -12, gx: "150px", gy: "-18px", dur: 34 },
];

function Gull({ scale }: { scale: number }) {
  return (
    <svg viewBox="0 0 24 10" width={24 * scale} height={10 * scale} aria-hidden="true" className="overflow-visible">
      <g style={{ transformOrigin: "12px 6px", animation: "flap 0.9s ease-in-out infinite" }}>
        <path d="M1 5 Q6 0 12 6 Q18 0 23 5" fill="none" stroke="#2A2F3A" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}


/**
 * The coast follows the clock in Mangalore: dawn, day, dusk and a moonlit
 * blue night. Server render uses dusk; the browser switches after mount.
 */
type Phase = "dawn" | "day" | "dusk" | "night";

const LOOK: Record<
  Phase,
  {
    sky: string; // colour near the horizon
    sea: string;
    disc: string;
    shadow: string;
    glow: string;
    reflection: string;
    crown: number; // opacity of the Yakshagana crown
    rise: [number, number]; // sun offset (% of its size) at top of page and after scrolling
    stars: boolean;
    gulls: boolean;
  }
> = {
  dawn: {
    sky: "rgba(249,214,200,0.9)",
    sea: "rgba(236,232,242,0.8)",
    disc: "radial-gradient(circle at 50% 40%, #FBC4A6 0%, #EE8F6B 55%, #D9714F 100%)",
    shadow: "0 0 70px 18px rgba(238,143,107,0.3)",
    glow: "rgba(238,143,107,0.22)",
    reflection: "#EE9D80",
    crown: 0.85,
    rise: [20, 70],
    stars: false,
    gulls: true,
  },
  day: {
    sky: "rgba(214,232,246,0.95)",
    sea: "rgba(222,236,248,0.85)",
    disc: "radial-gradient(circle at 50% 40%, #FFF3C9 0%, #F8D276 55%, #F0B84A 100%)",
    shadow: "0 0 80px 24px rgba(248,210,118,0.35)",
    glow: "rgba(248,210,118,0.2)",
    reflection: "#F2C46D",
    crown: 0.55,
    rise: [-70, -10],
    stars: false,
    gulls: true,
  },
  dusk: {
    sky: "rgba(245,225,208,0.9)",
    sea: "rgba(232,238,246,0.75)",
    disc: "radial-gradient(circle at 50% 40%, #F3A469 0%, #D26A34 55%, #B4532A 100%)",
    shadow: "0 0 60px 14px rgba(208,112,63,0.3)",
    glow: "rgba(208,112,63,0.22)",
    reflection: "#D0703F",
    crown: 0.9,
    rise: [45, 95],
    stars: false,
    gulls: true,
  },
  night: {
    sky: "rgba(205,214,238,0.95)",
    sea: "rgba(212,222,240,0.9)",
    disc: "radial-gradient(circle at 42% 38%, #FFFDF5 0%, #ECEAE0 55%, #D6D6D2 100%)",
    shadow: "0 0 70px 20px rgba(214,222,255,0.45)",
    glow: "rgba(170,190,240,0.25)",
    reflection: "#AFC0E4",
    crown: 0,
    rise: [-90, -40],
    stars: true,
    gulls: false,
  },
};

function phaseNow(): Phase {
  // ?coast=dawn|day|dusk|night previews a phase regardless of the time.
  const forced = new URLSearchParams(window.location.search).get("coast");
  if (forced && forced in LOOK) return forced as Phase;
  const h = Number(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "numeric", hour12: false }).format(new Date()));
  if (h >= 5 && h < 8) return "dawn";
  if (h >= 8 && h < 16) return "day";
  if (h >= 16 && h < 19) return "dusk";
  return "night";
}

function usePhase(): Phase {
  const [phase, setPhase] = useState<Phase>("dusk");
  useEffect(() => {
    const tick = () => setPhase(phaseNow());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 5 * 60_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);
  return phase;
}

// Fixed star positions (percent of the scene) so server and client agree.
const STARS = Array.from({ length: 28 }, (_, i) => ({
  left: 52 + ((i * 37) % 46),
  top: 6 + ((i * 53) % 48),
  size: i % 5 === 0 ? 3 : 2,
  delay: (i % 7) * 0.6,
}));

function Sun({ sink, glow, look, crown }: { sink: MotionValue<string>; glow: MotionValue<number>; look: (typeof LOOK)[Phase]; crown: boolean }) {
  return (
    <>
      {/* sky warmth around the sun */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: SUN_X,
          top: `${HORIZON}%`,
          width: "min(70vw, 900px)",
          height: "min(70vw, 900px)",
          x: "-50%",
          y: "-50%",
          opacity: glow,
          background: `radial-gradient(circle, ${look.glow} 0%, transparent 60%)`,
          transition: "background 1.5s ease",
        }}
      />
      {/* the sun (optionally wearing a Yakshagana crown), clipped at the horizon */}
      <div className="absolute overflow-hidden" style={{ left: `calc(${SUN_X} - 320px)`, top: 0, height: `${HORIZON}%`, width: 640 }}>
        <motion.div
          className="absolute"
          style={{
            width: "clamp(110px, 13vw, 200px)",
            height: "clamp(110px, 13vw, 200px)",
            left: "50%",
            bottom: 0,
            x: "-50%",
            y: sink,
          }}
        >
          {crown && (
            <Prabhavali className="absolute -inset-[62%] w-[224%] h-[224%]" spin={90} style={{ opacity: look.crown, transition: "opacity 1.5s ease" }} />
          )}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: look.disc,
              boxShadow: look.shadow,
              transition: "box-shadow 1.5s ease",
            }}
          />
        </motion.div>
      </div>
    </>
  );
}

export function HeroCoast({
  progress,
  scenery = true,
  boat = scenery,
  boatAt = "left",
  crown = true,
}: {
  progress: MotionValue<number>;
  scenery?: boolean; // palms and gulls
  boat?: boolean;
  boatAt?: "left" | "sun"; // foreground left, or sailing through the sun's reflection
  crown?: boolean;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const phase = usePhase();
  const look = LOOK[phase];
  // Sun position follows both scroll and the time-of-day phase.
  const riseFrom = useMotionValue(look.rise[0]);
  const riseTo = useMotionValue(look.rise[1]);
  useEffect(() => {
    riseFrom.set(look.rise[0]);
    riseTo.set(look.rise[1]);
  }, [look, riseFrom, riseTo]);
  const sink = useTransform([progress, riseFrom, riseTo], ([p, from, to]: number[]) =>
    `${reduce ? from : from + (to - from) * p}%`
  );
  const glow = useTransform(progress, [0, 1], [1, 1.6]);
  const skyWarm = useTransform(progress, [0, 1], [0.35, 0.9]);
  const boatX = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -60]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[1000px] sm:h-[min(100svh,980px)] sm:min-h-[640px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_80%,transparent)]"
    >
      {/* sky: warmer toward the horizon, warming further as the sun sets */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: skyWarm,
          background: `linear-gradient(to bottom, transparent 0%, ${look.sky.replace(/[\d.]+\)$/, "0.5)")} ${HORIZON - 18}%, ${look.sky} ${HORIZON}%, transparent ${HORIZON + 0.1}%)`,
          transition: "background 1.5s ease",
        }}
      />

      {look.stars &&
        STARS.map((st, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-brand/60 twinkle"
            style={{ left: `${st.left}%`, top: `${st.top}%`, width: st.size, height: st.size, animationDelay: `${st.delay}s` }}
          />
        ))}

      <Sun sink={sink} glow={glow} look={look} crown={crown} />

      {/* sea tint */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          top: `${HORIZON}%`,
          background: `linear-gradient(to bottom, ${look.sea}, transparent 70%)`,
          transition: "background 1.5s ease",
        }}
      />

      {/* horizon line */}
      <div className="absolute inset-x-0 h-px bg-brand/25" style={{ top: `${HORIZON}%` }} />

      {/* sun reflection */}
      <div className="absolute flex flex-col items-center gap-[7px]" style={{ left: SUN_X, top: `calc(${HORIZON}% + 8px)`, transform: "translateX(-50%)" }}>
        {[150, 120, 128, 92, 100, 64, 70, 40].map((w, i) => (
          <span
            key={i}
            className="block h-[2px] rounded-full"
            style={{
              background: look.reflection,
              width: `clamp(${w * 0.55}px, ${w / 12}vw, ${w}px)`,
              animation: `shimmer-line ${2.4 + (i % 3) * 0.7}s ease-in-out ${i * 0.25}s infinite`,
            }}
          />
        ))}
      </div>

      {/* waves */}
      {WAVES.map((w, i) => (
        <div
          key={i}
          className="absolute inset-x-0 bg-repeat-x"
          style={
            {
              top: `${w.top}%`,
              height: w.h,
              backgroundImage: w.bg,
              backgroundSize: `${w.wl}px ${w.h}px`,
              backgroundPositionX: `${-w.offset}px`,
              "--wl": `${w.wl}px`,
              animation: `wave-slide ${w.duration}s linear infinite`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* painted fishing boat in the foreground */}
      {boat && (
      <motion.div
        className={`absolute hidden ${boatAt === "sun" ? "min-[1360px]:block w-[110px]" : "sm:block w-[160px]"}`}
        style={
          boatAt === "sun"
            ? { left: `calc(${SUN_X} - 55px)`, top: `calc(${HORIZON}% + 1.5%)` }
            : { left: "7%", top: `calc(${HORIZON}% + 11%)`, x: boatX }
        }
      >
        <div style={{ animation: "drift 30s ease-in-out infinite alternate", ["--drift" as string]: boatAt === "sun" ? "0px" : "80px" }}>
          <div style={{ animation: "bob 3.2s ease-in-out infinite", transformOrigin: "50% 90%" }}>
            <PaintedBoat className="w-full h-auto" />
          </div>
        </div>
      </motion.div>
      )}

      {/* coconut palms, silhouetted against the sun */}
      {scenery && (
        <>
      <div className="absolute hidden lg:block right-[-50px] bottom-[6%] w-[230px] h-[380px]">
        <Palm className="w-full h-full" lean={-9} color="#16271D" />
      </div>
      <div className="absolute hidden lg:block right-[70px] bottom-[6%] w-[150px] h-[250px]">
        <Palm className="w-full h-full" lean={-3} color="#1F3B2A" />
      </div>

        </>
      )}

      {/* gulls */}
      {scenery && look.gulls && GULLS.map((g, i) => (
        <div
          key={i}
          className="absolute hidden sm:block"
          style={
            {
              left: g.left,
              top: g.top,
              "--gx": g.gx,
              "--gy": g.gy,
              animation: `glide ${g.dur}s ease-in-out ${g.delay}s infinite alternate`,
            } as React.CSSProperties
          }
        >
          <Gull scale={g.scale} />
        </div>
      ))}
    </div>
  );
}
