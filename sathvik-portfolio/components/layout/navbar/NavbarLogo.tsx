"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { SITE } from "@/lib/constants/site";

export default function NavbarLogo() {
  const shouldReduceMotion = useReducedMotion();
  const initials = SITE.name
  .split(" ")
  .map((part) => part[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

  return (
    <Link
      href="#home"
      scroll={false}
      aria-label={`Go to ${SITE.name} home section`}
      className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-indigo-600
          font-bold
          text-white
          shadow-lg
          shadow-blue-500/25
        "
      >
        {initials}
      </motion.div>

      <div className="hidden sm:block">
        <h1 className="text-base font-bold text-slate-900 dark:text-white">
          {SITE.name}
        </h1>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          {SITE.role}
        </p>
      </div>
    </Link>
  );
}