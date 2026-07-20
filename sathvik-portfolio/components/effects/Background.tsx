"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Background() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[size:45px_45px]
          bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
          dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        "
      />

      {/* Left Blob */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 80, 0],
                y: [0, -60, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-10
          h-[320px]
          w-[320px]
          md:h-[500px]
          md:w-[500px]
          rounded-full
          bg-blue-600/20
          blur-[140px]
          will-change-transform
        "
      />

      {/* Right Blob */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1.15, 1, 1.15],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-10
          h-[320px]
          w-[320px]
          md:h-[500px]
          md:w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
          will-change-transform
        "
      />

      {/* Center Blob */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.12, 1],
                opacity: [0.15, 0.3, 0.15],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          md:h-[400px]
          md:w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/20
          blur-[120px]
          will-change-transform
        "
      />
    </div>
  );
}