"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function GradientButton({
  children,
  href,
  className,
  icon,
  external = false,
  target,
  rel,
  disabled = false,
  loading = false,
  onClick,
  type = "button",
}: GradientButtonProps) {
  const classes = cn(
  `
  relative
  group
  overflow-hidden

  inline-flex items-center justify-center gap-2

  rounded-xl

  bg-gradient-to-r
  from-blue-600
  via-cyan-500
  to-indigo-600

  px-7 py-3.5

  font-semibold
  text-white

  shadow-lg
  shadow-blue-500/25

  transition-all
  duration-300

  hover:shadow-xl
  hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]

  disabled:cursor-not-allowed
  disabled:opacity-60
  `,
  className
);

  const content = (
    <>
      {loading ? (
        <motion.span
          className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear",
          }}
        />
      ) : (
        icon
      )}

      <span>{children}</span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          whileHover={!disabled ? { y: -3 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          <>
  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span className="relative z-10 flex items-center gap-2">
    {content}
  </span>
</>
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={!disabled ? { y: -3 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
      >
        <Link
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          <>
  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span className="relative z-10 flex items-center gap-2">
    {content}
  </span>
</>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={!disabled ? { y: -3 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      <>
  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span className="relative z-10 flex items-center gap-2">
    {content}
  </span>
</>
    </motion.button>
  );
}