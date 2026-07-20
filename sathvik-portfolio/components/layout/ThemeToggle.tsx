"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const shouldReduceMotion = useReducedMotion();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      role="switch"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
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
        hover:border-primary/40
      "
    >
      {/* Background Icons */}
      <Sun className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500 opacity-70" />
      <Moon className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 opacity-70 dark:text-slate-300" />

      {/* Sliding Knob */}
      <motion.div
        layout
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
        className={cn(
          "absolute top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md",
          isDark ? "right-1" : "left-1"
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-blue-500" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </motion.div>
    </Button>
  );
}