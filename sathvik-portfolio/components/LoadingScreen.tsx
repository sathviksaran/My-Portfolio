"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
        >
          {/* Background Blur */}

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

          <div className="relative flex flex-col items-center">

            {/* Animated Logo */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -180,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-blue-600
                via-cyan-500
                to-indigo-600
                text-5xl
                font-bold
                text-white
                shadow-2xl
                shadow-blue-500/30
              "
            >
              {/* Animated Ring */}

              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-3xl border-2 border-cyan-400"
              />

              {/* Logo */}

              <div className="flex">

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  S
                </motion.span>

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                  }}
                >
                  A
                </motion.span>

              </div>

            </motion.div>

            {/* Name */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-10 text-5xl font-bold tracking-wide"
            >
              Sathvik Saran
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-3 text-lg text-slate-400"
            >
              Associate IT Consultant
            </motion.p>

            {/* Loading */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-12 w-72"
            >
              <div className="h-1 overflow-hidden rounded-full bg-slate-800">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                />

              </div>

              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="mt-4 text-center text-sm tracking-widest text-slate-500"
              >
                LOADING PORTFOLIO...
              </motion.p>

            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}