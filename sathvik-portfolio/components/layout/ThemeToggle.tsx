"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-label="Toggle theme"
      aria-checked={isDark}
      onClick={toggleTheme}
      className="
        relative
        flex
        h-10
        w-20
        items-center
        rounded-full
        border
        border-border
        bg-muted/60
        p-1
        shadow-sm
        backdrop-blur
        transition-colors
        duration-300
        hover:border-primary/40
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
      "
    >
      {/* Background Icons */}
      <Sun
        className="
          absolute
          left-2
          h-4
          w-4
          text-amber-500
          opacity-70
        "
      />

      <Moon
        className="
          absolute
          right-2
          h-4
          w-4
          text-slate-500
          dark:text-slate-300
          opacity-70
        "
      />

      {/* Sliding Knob */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 550,
          damping: 32,
        }}
        animate={{
          x: isDark ? "100%" : "0%",
        }}
        className="
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
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-blue-500" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}