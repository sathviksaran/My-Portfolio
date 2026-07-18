"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import { GitHubRepository } from "@/types/portfolio";

interface GitHubRepoCardProps {
  repo: GitHubRepository;
}

export default function GitHubRepoCard({
  repo,
}: GitHubRepoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className="group flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <FaGithub className="text-2xl text-blue-500" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {repo.name}
            </h3>
          </div>

          <Link
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${repo.name} repository`}
          >
            <FaExternalLinkAlt className="transition group-hover:text-blue-500" />
          </Link>
        </div>

        <p className="flex-1 text-slate-600 dark:text-slate-400">
          {repo.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {repo.technologies.map((tech) => (
            <TechBadge
              key={tech}
              label={tech}
              compact
            />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}