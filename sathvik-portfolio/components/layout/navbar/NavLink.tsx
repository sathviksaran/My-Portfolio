"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { NavLinkProps } from "./types";

export default function NavLink({
  href,
  label,
  active,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  const isMobile = variant === "mobile";

  return (
    <Link
      href={href}
      scroll={false}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950",

        isMobile
          ? [
              "block rounded-xl px-4 py-3 text-base font-medium",
              active
                ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400",
            ]
          : [
              "rounded-md px-1 py-2 text-sm font-medium",
              active
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400",
            ]
      )}
    >
      {label}

      {!isMobile && active && (
        <motion.span
          layoutId="active-nav-indicator"
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 420,
                  damping: 34,
                }
          }
          className="
            absolute
            -bottom-1
            left-0
            h-0.5
            w-full
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-500
            to-indigo-500
          "
        />
      )}
    </Link>
  );
}