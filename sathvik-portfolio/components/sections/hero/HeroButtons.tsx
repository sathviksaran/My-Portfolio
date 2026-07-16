"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      {/* Resume Button */}
      <motion.a
        href={portfolio.personal.resume}
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-8
          py-4
          font-semibold
          text-white
          shadow-lg
          shadow-blue-500/30
          transition-all
          duration-300
          hover:shadow-xl
          hover:shadow-blue-500/40
        "
      >
        <motion.span
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          ⬇
        </motion.span>

        Download Resume
      </motion.a>

      {/* Projects Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-slate-300
          bg-white
          px-8
          py-4
          font-semibold
          text-slate-900
          transition-all
          duration-300
          hover:border-blue-500
          hover:bg-blue-50
          hover:text-blue-600
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:hover:bg-slate-800
          dark:hover:text-blue-400
        "
      >
        🚀 View Projects
      </motion.a>
    </div>
  );
}