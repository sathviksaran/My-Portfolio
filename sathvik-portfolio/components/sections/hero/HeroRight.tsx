"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      <div className="relative">

        {/* Floating Badge - Power Platform */}

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-8
            top-8
            z-20
            hidden
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            px-4
            py-2
            shadow-xl
            backdrop-blur-xl
            dark:border-slate-700
            dark:bg-slate-900/80
            lg:block
          "
        >
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            ⚡ Power Platform
          </p>
        </motion.div>

        {/* Floating Badge - Azure */}

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-8
            bottom-16
            z-20
            hidden
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            px-4
            py-2
            shadow-xl
            backdrop-blur-xl
            dark:border-slate-700
            dark:bg-slate-900/80
            lg:block
          "
        >
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            ☁ Azure & AWS
          </p>
        </motion.div>

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            rounded-full
            bg-blue-500/20
            blur-[90px]
          "
        />

        {/* Outer Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -inset-5
            rounded-full
            border
            border-blue-500/30
          "
        />

        {/* Second Ring */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -inset-10
            rounded-full
            border
            border-cyan-500/20
          "
        />

        {/* Profile */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            overflow-hidden
            rounded-full
            border-4
            border-blue-500
            bg-white
            p-2
            shadow-[0_0_60px_rgba(59,130,246,.35)]
            dark:bg-slate-950
          "
        >
          <Image
            src={portfolio.personal.profileImage}
            alt="Sathvik Saran Atchukolu"
            width={420}
            height={420}
            priority
            className="
              rounded-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </motion.div>

        {/* Experience Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
            absolute
            -bottom-10
            left-1/2
            w-52
            -translate-x-1/2
            rounded-2xl
            border
            border-slate-200
            bg-white/90
            px-5
            py-4
            text-center
            shadow-xl
            backdrop-blur-xl
            dark:border-slate-700
            dark:bg-slate-900/90
          "
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Experience
          </p>

          <h3 className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
            2+ Years
          </h3>
        </motion.div>

      </div>
    </motion.div>
  );
}