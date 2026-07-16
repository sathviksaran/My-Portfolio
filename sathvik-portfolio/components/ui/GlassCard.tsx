"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/80
        bg-white/70
        p-6
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300

        dark:border-slate-800
        dark:bg-slate-900/60

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/20
        before:to-transparent
        before:pointer-events-none
        `,
        hover &&
          `
          hover:border-blue-500/40
          hover:shadow-2xl
          hover:shadow-blue-500/10
          `,
        className
      )}
    >
      {children}
    </motion.div>
  );
}