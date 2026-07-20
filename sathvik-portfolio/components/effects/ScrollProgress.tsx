"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-x-0
        top-0
        z-[999]
        h-1
        origin-left
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-indigo-600
        shadow-[0_0_12px_rgba(59,130,246,0.5)]
        will-change-transform
      "
      style={{ scaleX: scrollYProgress }}
    />
  );
}