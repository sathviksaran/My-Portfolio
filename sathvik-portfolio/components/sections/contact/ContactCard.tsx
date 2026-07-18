"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const isExternal = href?.startsWith("http");

  const content = (
    <div className="flex items-start gap-4">
      <div
        className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl
          bg-blue-500/10
          text-blue-600
          dark:bg-blue-500/20
          dark:text-blue-400
        "
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>

        <p className="mt-1 break-all text-slate-600 transition-colors dark:text-slate-400">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="p-6">
        {href ? (
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={
              isExternal
                ? "noopener noreferrer"
                : undefined
            }
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`${title}: ${value}`}
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </GlassCard>
    </motion.div>
  );
}