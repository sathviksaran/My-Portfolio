"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">

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
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/20
          blur-[150px]
        "
      />

      {/* Right Blob */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[160px]
        "
      />

      {/* Center Blob */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/20
          blur-[130px]
        "
      />

    </div>
  );
}