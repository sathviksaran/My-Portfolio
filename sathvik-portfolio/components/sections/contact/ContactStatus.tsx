"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ContactStatusState } from "@/types/contact";

interface ContactStatusProps {
  status: ContactStatusState | null;
}

export default function ContactStatus({
  status,
}: ContactStatusProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {status && (
        <motion.div
          key={status.type}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          role="status"
          aria-live="polite"
          className={cn(
            "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm",
            status.type === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
              : "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
          )}
        >
          {status.type === "success" ? (
            <CheckCircle2
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            />
          ) : (
            <AlertCircle
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            />
          )}

          <span>{status.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}