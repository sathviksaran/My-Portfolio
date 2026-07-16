"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import GradientButton from "@/components/ui/GradientButton";

export default function AboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="space-y-6"
    >
      <h3
        className="
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Hi, I&apos;m{" "}
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
          {portfolio.personal.fullName}
        </span>
      </h3>

      <p
        className="
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        I&apos;m an{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {portfolio.personal.title}
        </span>{" "}
        at{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {portfolio.personal.company}
        </span>
        , specializing in enterprise workflow automation and modern web
        development.
      </p>

      <p
        className="
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        My primary expertise includes{" "}
        <span className="font-semibold">
          SharePoint Administration
        </span>
        ,{" "}
        <span className="font-semibold">
          Power Automate
        </span>
        ,{" "}
        <span className="font-semibold">
          Azure
        </span>
        ,{" "}
        <span className="font-semibold">
          AWS
        </span>
        ,{" "}
        <span className="font-semibold">
          Python
        </span>
        , and building scalable enterprise solutions that improve productivity
        through automation.
      </p>

      <p
        className="
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        I enjoy learning new technologies, solving real-world business
        problems, and building applications that deliver measurable value.
        My goal is to continue growing as a software engineer while
        contributing to impactful products.
      </p>

      <div className="pt-4">
        <GradientButton
          href={portfolio.personal.resume}
          icon={<Download size={18} />}
        >
          Download Resume
        </GradientButton>
      </div>
    </motion.div>
  );
}