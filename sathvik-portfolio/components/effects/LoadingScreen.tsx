"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/constants/site";

export default function LoadingScreen() {
  const shouldReduceMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <AnimatePresence>
      {!mounted && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(8px)",
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950"
        >
          {/* Background Glow */}
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px] md:h-[500px] md:w-[500px]" />

          <div className="relative flex flex-col items-center px-6">
            {/* Logo */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      scale: 0,
                      rotate: -180,
                      opacity: 0,
                    }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                    }
              }
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 text-4xl font-bold text-white shadow-2xl shadow-blue-500/30 md:h-28 md:w-28 md:text-5xl"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [0.4, 0, 0.4],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-3xl border-2 border-cyan-400"
              />

              <span>SA</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center text-3xl font-bold tracking-wide text-white md:text-5xl"
            >
              {SITE.name}
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-3 text-center text-base text-slate-400 md:text-lg"
            >
              {SITE.role}
            </motion.p>

            {/* Animated Loader */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "16rem" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-10 h-1 overflow-hidden rounded-full bg-slate-800 md:w-72"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: ["-100%", "100%"],
                      }
                }
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}