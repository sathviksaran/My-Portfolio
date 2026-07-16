"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export default function SocialButton({
  href,
  icon,
  label,
  className,
}: SocialButtonProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={cn(
          `
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white/70
          text-slate-700
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300

          hover:border-blue-500
          hover:bg-blue-600
          hover:text-white
          hover:shadow-lg
          hover:shadow-blue-500/30

          dark:border-slate-700
          dark:bg-slate-900/70
          dark:text-slate-300
          dark:hover:border-blue-500
          dark:hover:bg-blue-600
          dark:hover:text-white
          `,
          className
        )}
      >
        {icon}
      </Link>
    </motion.div>
  );
}