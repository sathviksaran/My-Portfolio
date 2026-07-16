"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function GradientButton({
  href,
  children,
  icon,
  className,
  external = false,
}: GradientButtonProps) {
  const classes = cn(
    `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-gradient-to-r
    from-blue-600
    via-cyan-500
    to-indigo-600
    px-7
    py-3.5
    font-semibold
    text-white
    shadow-lg
    shadow-blue-500/25
    transition-all
    duration-300

    hover:shadow-xl
    hover:shadow-blue-500/40
    `,
    className
  );

  const content = (
    <>
      {icon && (
        <motion.span
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          {icon}
        </motion.span>
      )}

      {children}
    </>
  );

  if (external) {
    return (
      <motion.a
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link href={href} className={classes}>
        {content}
      </Link>
    </motion.div>
  );
}