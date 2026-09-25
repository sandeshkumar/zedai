"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ClientCity } from "./data";

type Vec3 = [number, number, number];

const TILE: Vec3 = [0.93, 0.5, 0.27];
const TILE_DIM: Vec3 = [0.55, 0.3, 0.2];
const SEA_LIGHT: Vec3 = [0.85, 0.9, 1];

// Rotation that brings a lat/lon to the front of a cobe globe.
const anglesFor = (lat: number, lon: number): [number, number] => [
  Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

const shortest = (from: number, to: number) => {
  const d = (to - from) % (Math.PI * 2);
  return ((d + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
};

export function Globe({
  home,
  cities,
  active,
}: {
  home: ClientCity;
  cities: ClientCity[];
  active: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(wrapRef, { margin: "200px 0px" });
  const reduce = useReducedMotion();
  const [anchors, setAnchors] = useState(false);

  // Shared between the render loop and React.
  const state = useRef({ phi: anglesFor(home.lat, home.lon)[0], theta: 0.25, drag: 0, dragging: false, lastX: 0, idleUntil: 0 });
  const globeRef = useRef<{ update: (s: object) => void; destroy: () => void } | null>(null);
  const activeRef = useRef(active);

  const markersFor = (a: number) => [
    { location: [home.lat, home.lon] as [number, number], size: 0.09, color: TILE, id: home.id },
    ...cities.map((c, i) => ({
      location: [c.lat, c.lon] as [number, number],
      size: i === a ? 0.07 : 0.035,
      color: i === a ? TILE : SEA_LIGHT,
      id: c.id,
    })),
  ];
  const arcsFor = (a: number) =>
    cities.map((c, i) => ({
      from: [home.lat, home.lon] as [number, number],
      to: [c.lat, c.lon] as [number, number],
      color: i === a ? TILE : TILE_DIM,
      id: `${home.id}-${c.id}`,
    }));

  useEffect(() => {
    const t = setTimeout(() => setAnchors(typeof CSS !== "undefined" && CSS.supports("anchor-name", "--a")), 0);
    return () => clearTimeout(t);
  }, []);

  // Create the globe once it is near the viewport.
  useEffect(() => {
    if (!inView || globeRef.current || !canvasRef.current || !wrapRef.current) return;
    let frame = 0;
    let cancelled = false;
    let ro: ResizeObserver | undefined;

    import("cobe").then(({ default: createGlobe }) => {
      if (cancelled || !canvasRef.current || !wrapRef.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = () => wrapRef.current!.offsetWidth;
      let w = size();

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: dpr,
        width: w * dpr,
        height: w * dpr,
        phi: state.current.phi,
        theta: state.current.theta,
        dark: 1,
        diffuse: 1.3,
        mapSamples: 20000,
        mapBrightness: 5.5,
        mapBaseBrightness: 0.02,
        baseColor: [0.16, 0.24, 0.36],
        markerColor: TILE,
        glowColor: [0.2, 0.3, 0.45],
        markers: markersFor(activeRef.current),
        arcs: arcsFor(activeRef.current),
        arcColor: TILE_DIM,
        arcWidth: 0.6,
        arcHeight: 0.28,
        markerElevation: 0.01,
        opacity: 0.95,
      });
      globeRef.current = globe;

      ro = new ResizeObserver(() => {
        w = size();
        globe.update({ width: w * dpr, height: w * dpr });
      });
      ro.observe(wrapRef.current);

      const loop = (now: number) => {
        const s = state.current;
        if (!s.dragging && !reduce) {
          if (now > s.idleUntil) {
            // Ease toward the active city, then drift gently.
            const focus = cities[activeRef.current] ?? home;
            const [tp, tt] = anglesFor(focus.lat, focus.lon);
            s.phi += shortest(s.phi, tp) * 0.035 + 0.0006;
            s.theta += (Math.max(-0.4, Math.min(0.6, tt * 0.8)) - s.theta) * 0.035;
          } else {
            s.phi += 0.002;
          }
        }
        globe.update({ phi: s.phi + s.drag, theta: s.theta });
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);

      requestAnimationFrame(() => canvasRef.current && (canvasRef.current.style.opacity = "1"));
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      ro?.disconnect();
    };
    // Globe is created once; later changes flow through refs and update().
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => () => globeRef.current?.destroy(), []);

  // Highlight the active city and its route.
  useEffect(() => {
    activeRef.current = active;
    globeRef.current?.update({ markers: markersFor(active), arcs: arcsFor(active) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const s = state.current;
  const activeCity = cities[active];

  return (
    <div ref={wrapRef} className="relative aspect-square w-full select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing opacity-0 transition-opacity duration-1000 touch-pan-y"
        onPointerDown={(e) => {
          s.dragging = true;
          s.lastX = e.clientX;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!s.dragging) return;
          s.phi += (e.clientX - s.lastX) / 180;
          s.lastX = e.clientX;
        }}
        onPointerUp={() => {
          s.dragging = false;
          s.idleUntil = performance.now() + 5000;
        }}
        onPointerCancel={() => {
          s.dragging = false;
        }}
        aria-label="Globe showing routes from Mangalore to client cities"
        role="img"
      />

      {anchors && (
        <>
          <span className="globe-label globe-label-home" style={{ positionAnchor: `--cobe-${home.id}`, opacity: `var(--cobe-visible-${home.id}, 0)` } as React.CSSProperties}>
            {home.city}
          </span>
          {activeCity && (
            <span
              key={activeCity.id}
              className="globe-label"
              style={{ positionAnchor: `--cobe-${activeCity.id}`, opacity: `var(--cobe-visible-${activeCity.id}, 0)` } as React.CSSProperties}
            >
              {activeCity.city}
            </span>
          )}
        </>
      )}
    </div>
  );
}
