"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "@/components/home/motion";
import { MirrorDot } from "@/components/home/motifs";

// Counts committed page mounts in this browser tab. The first load stays at 0,
// so the curtain only plays on in-site navigation.
let mounts = 0;

const ROWS = 7;

/** Rows of Mangalore roof tiles that sweep away to reveal the next page. */
function TileCurtain({ onDone }: { onDone: () => void }) {
  return (
    <div className="fixed inset-0 z-[300] pointer-events-none flex flex-col" aria-hidden="true">
      {Array.from({ length: ROWS }, (_, i) => (
        <motion.div
          key={i}
          className="tile-roof flex-1 -my-px"
          initial={{ x: "0%" }}
          animate={{ x: i % 2 ? "-102%" : "102%" }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.05 + i * 0.045 }}
          onAnimationComplete={i === ROWS - 1 ? onDone : undefined}
        />
      ))}
      <motion.div
        className="absolute inset-0 grid place-items-center"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <MirrorDot className="w-14 h-14" />
      </motion.div>
    </div>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [curtain, setCurtain] = useState(() => typeof window !== "undefined" && mounts > 0);

  useEffect(() => {
    mounts += 1;
  }, []);

  return (
    <>
      {curtain && !reduce && <TileCurtain onDone={() => setCurtain(false)} />}
      {children}
    </>
  );
}
