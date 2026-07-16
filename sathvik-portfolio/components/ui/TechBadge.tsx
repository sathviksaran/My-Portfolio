"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  icon?: React.ReactNode;
  image?: string;
  href?: string;
  compact?: boolean;
  className?: string;
}

export default function TechBadge({
  label,
  icon,
  image,
  href,
  compact = false,
  className,
}: TechBadgeProps) {
  const content = (
    <>
      {image ? (
        <Image
          src={image}
          alt={label}
          width={compact ? 16 : 20}
          height={compact ? 16 : 20}
          className="object-contain"
        />
      ) : (
        icon && (
          <span className={compact ? "text-base" : "text-lg"}>
            {icon}
          </span>
        )
      )}

      <span>{label}</span>
    </>
  );

  const classes = cn(
    `
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-slate-200
    bg-white/70
    text-slate-700
    shadow-sm
    backdrop-blur-xl
    transition-all
    duration-300

    hover:-translate-y-0.5
    hover:border-blue-500
    hover:bg-white
    hover:text-blue-600
    hover:shadow-lg
    hover:shadow-blue-500/10

    dark:border-slate-700
    dark:bg-slate-900/70
    dark:text-slate-300
    dark:hover:border-blue-500
    dark:hover:bg-slate-900
    dark:hover:text-blue-400
    `,
    compact
      ? "px-3 py-1.5 text-xs"
      : "px-5 py-2.5 text-sm",
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </motion.div>
  );
}