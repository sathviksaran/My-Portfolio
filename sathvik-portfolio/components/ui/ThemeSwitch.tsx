"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const TRACK_WIDTH = 68;
const TRACK_HEIGHT = 36;
const PADDING = 4;
const KNOB_SIZE = 28;

const TRAVEL = TRACK_WIDTH - KNOB_SIZE - PADDING * 2;

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const shouldReduceMotion = useReducedMotion();

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      role="switch"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-checked={isDark}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.03,
            }
      }
      whileTap={
        shouldReduceMotion
          ? undefined
          : {
              scale: 0.96,
            }
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative overflow-hidden rounded-full border transition-colors",
        "border-border",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary"
      )}
      style={{
        width: TRACK_WIDTH,
        height: TRACK_HEIGHT,
        padding: PADDING,
      }}
      animate={{
        backgroundColor: isDark
          ? "rgb(15 23 42)"
          : "rgb(248 250 252)",
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.25,
      }}
    >
      {/* Left Icon */}
      <motion.div
        animate={{
          opacity: isDark ? 0.35 : 1,
          scale: isDark ? 0.9 : 1,
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        <Sun className="h-4 w-4 text-amber-500" />
      </motion.div>

      {/* Right Icon */}
      <motion.div
        animate={{
          opacity: isDark ? 1 : 0.35,
          scale: isDark ? 1 : 0.9,
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <Moon className="h-4 w-4 text-blue-500" />
      </motion.div>

      {/* Knob */}
      <motion.div
        animate={{
          x: isDark ? TRAVEL : 0,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 520,
                damping: 34,
                mass: 0.8,
              }
        }
        className="
          absolute
          left-1
          top-1
          flex
          items-center
          justify-center
          rounded-full
          bg-background
          shadow-xl
          ring-1
          ring-black/5
          dark:ring-white/10
        "
        style={{
          width: KNOB_SIZE,
          height: KNOB_SIZE,
        }}
      />
    </motion.button>
  );
}