"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";

const KNOB_TRAVEL = 40;

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const shouldReduceMotion = useReducedMotion();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      role="switch"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-checked={isDark}
      onClick={toggleTheme}
      className="
        relative
        h-10
        w-20
        overflow-hidden
        rounded-full
        border
        border-border
        bg-muted/60
        p-1
        backdrop-blur
        transition-colors
        duration-300
        hover:border-primary/40
        focus-visible:ring-2
        focus-visible:ring-primary
      "
    >
      {/* Background Icons */}
      <Sun
        className="
          absolute
          left-2
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-amber-500
          opacity-70
        "
      />

      <Moon
        className="
          absolute
          right-2
          top-1/2
          h-4
          w-4
          -translate-y-1/2
          text-slate-500
          dark:text-slate-300
          opacity-70
        "
      />

      {/* Sliding Knob */}
      <motion.div
        className="
          absolute
          left-1
          top-1
          z-10
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-background
          shadow-md
        "
        animate={{
          x: isDark ? KNOB_TRAVEL : 0,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 500,
                damping: 35,
                mass: 0.8,
              }
        }
      >
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={
            shouldReduceMotion
              ? false
              : {
                  rotate: -180,
                  opacity: 0,
                  scale: 0.7,
                }
          }
          animate={{
            rotate: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-blue-500" />
          ) : (
            <Sun className="h-4 w-4 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </Button>
  );
}