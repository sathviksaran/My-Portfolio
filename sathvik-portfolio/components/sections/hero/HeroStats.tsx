"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mt-28"
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {portfolio.stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white/70
              p-6
              text-center
              shadow-lg
              backdrop-blur-xl
              dark:border-slate-800
              dark:bg-slate-900/60
            "
          >
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
              />
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}