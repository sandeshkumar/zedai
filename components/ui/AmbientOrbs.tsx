"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

export function AmbientOrbs() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const rawY1 = useTransform(scrollY, [0, 2000], [0, -180]);
  const rawY2 = useTransform(scrollY, [0, 2000], [0, -90]);
  const rawY3 = useTransform(scrollY, [0, 2000], [0, -240]);

  const springConfig = { stiffness: 40, damping: 20, restDelta: 0.5 };
  const y1 = useSpring(rawY1, springConfig);
  const y2 = useSpring(rawY2, springConfig);
  const y3 = useSpring(rawY3, springConfig);

  if (prefersReducedMotion) {
    return (
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-[15%] -left-[8%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[40%] -left-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)" }}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.07] will-change-transform"
        style={{
          background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)",
          y: y1,
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />
      <motion.div
        className="absolute -bottom-[15%] -left-[8%] w-[500px] h-[500px] rounded-full opacity-[0.04] will-change-transform"
        style={{
          background: "radial-gradient(circle, #F97316 0%, transparent 70%)",
          y: y2,
          animation: "float-slower 12s ease-in-out infinite",
        }}
      />
      <motion.div
        className="absolute top-[40%] -left-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05] will-change-transform"
        style={{
          background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)",
          y: y3,
          animation: "float-slow 10s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
