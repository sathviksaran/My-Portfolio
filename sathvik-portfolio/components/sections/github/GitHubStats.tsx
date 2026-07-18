"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";

import GlassCard from "@/components/ui/GlassCard";
import { portfolio } from "@/data/portfolio";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${portfolio.github.username}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubUser();
  }, []);

  const stats = [
    {
      icon: FaBook,
      label: "Repositories",
      value: user?.public_repos ?? "-",
    },
    {
      icon: FaUsers,
      label: "Followers",
      value: user?.followers ?? "-",
    },
    {
      icon: FaUserFriends,
      label: "Following",
      value: user?.following ?? "-",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >
            <GlassCard className="flex flex-col items-center p-8 text-center">
              <Icon className="mb-4 text-4xl text-blue-500" />

              <h3 className="text-4xl font-bold">
                {loading ? "..." : stat.value}
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}