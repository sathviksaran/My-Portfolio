"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function HeroScroll() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="mt-16 flex justify-center"
    >
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-slate-300
          bg-white/70
          shadow-md
          backdrop-blur-xl
          transition
          hover:border-blue-500
          hover:text-blue-600
          dark:border-slate-700
          dark:bg-slate-900/70
          dark:hover:text-blue-400
        "
      >
        <FaArrowDown />
      </a>
    </motion.div>
  );
}