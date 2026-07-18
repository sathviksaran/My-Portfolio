"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import SocialLinks from "@/components/ui/SocialLinks";

import { portfolio } from "@/data/portfolio";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Greeting */}

      <p className="mb-4 font-semibold text-blue-600 dark:text-blue-400">
        👋 Hello, I&apos;m
      </p>

      {/* Name */}

      <h1
        className="
          text-5xl
          font-extrabold
          leading-tight
          tracking-tight
          text-slate-900
          dark:text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        {portfolio.personal.firstName}
        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-indigo-500
            bg-clip-text
            text-transparent
          "
        >
          {portfolio.personal.lastName}
        </span>
      </h1>

      {/* Typing Animation */}

      <div
        className="
          mt-8
          h-16
          text-xl
          font-semibold
          text-slate-700
          dark:text-slate-200
          sm:text-2xl
        "
      >
        <TypeAnimation
          sequence={[
            "Associate IT Consultant",
            2000,
            "SharePoint Administrator",
            2000,
            "Power Automate Developer",
            2000,
            "Python Developer",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </div>

      {/* Availability */}

      <div
        className="
          mt-4
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-500/30
          bg-emerald-500/10
          px-4
          py-2
          text-sm
          text-emerald-600
          dark:text-emerald-300
        "
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        {portfolio.personal.availability}
      </div>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-9
          text-slate-600
          dark:text-slate-300
        "
      >
        Associate IT Consultant with nearly{" "}

        <span className="font-semibold text-blue-600 dark:text-blue-400">
          2 years of experience
        </span>{" "}

        building enterprise workflow automation using{" "}

        <span className="font-medium text-blue-600 dark:text-blue-400">
          SharePoint
        </span>
        ,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          Power Automate
        </span>
        ,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          Python
        </span>
        ,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          Azure
        </span>{" "}
        and{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          AWS
        </span>
        .

        <br />
        <br />

        I enjoy building scalable automation solutions,
        enterprise applications, and modern web experiences
        with a strong focus on clean architecture,
        performance, and user experience.
      </p>

      {/* Buttons */}

      <HeroButtons />

      {/* Social */}

      {/* Social Links */}

        <SocialLinks className="mt-10" />
    </motion.div>
  );
}