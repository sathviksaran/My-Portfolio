"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";

export default function GitHubProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <GlassCard className="p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Image
            src={`https://github.com/${portfolio.github.username}.png`}
            alt={portfolio.personal.fullName}
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {portfolio.personal.fullName}
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {portfolio.github.bio}
            </p>

            <div className="mt-6">
              <GradientButton
  href={portfolio.github.profile}
  target="_blank"
  rel="noopener noreferrer"
  external
  icon={<FaGithub />}
>
  View GitHub Profile
</GradientButton>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}