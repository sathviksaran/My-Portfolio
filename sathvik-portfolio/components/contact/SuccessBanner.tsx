"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SuccessBannerProps {
  show: boolean;
}

export default function SuccessBanner({
  show,
}: SuccessBannerProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.98,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            mb-6
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-green-500/30
            bg-green-500/10
            p-4
            backdrop-blur-xl
          "
        >
          <CheckCircle2
            className="
              mt-0.5
              h-6
              w-6
              shrink-0
              text-green-400
            "
          />

          <div>
            <h4 className="font-semibold text-green-400">
              Message Sent Successfully
            </h4>

            <p className="mt-1 text-sm text-slate-300">
              Thank you for contacting me.
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}