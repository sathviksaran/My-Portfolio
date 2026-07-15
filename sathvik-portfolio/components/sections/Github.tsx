"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaBook,
  FaCodeBranch,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface GithubUser {
  avatar_url: string;
  html_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export default function Github() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithub() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch("https://api.github.com/users/sathviksaran"),
          fetch(
            "https://api.github.com/users/sathviksaran/repos?sort=updated&per_page=6"
          ),
        ]);

        const userData = await userRes.json();
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(repoData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithub();
  }, []);

  if (loading) {
    return (
      <section className="py-24">
        <h2 className="text-center text-xl">
          Loading GitHub...
        </h2>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section
      id="github"
      className="py-24 px-6 lg:px-12 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            GitHub{" "}
            <span className="gradient-text">
              Dashboard
            </span>
          </h2>

          <p className="mt-5 text-center text-slate-400">
            Live GitHub profile and latest repositories
          </p>

        </motion.div>

        {/* Profile Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <div className="grid gap-10 lg:grid-cols-3 items-center">

            <div className="flex justify-center">

              <Image
                src={user.avatar_url}
                alt={user.name}
                width={220}
                height={220}
                className="rounded-full border-4 border-blue-500"
              />

            </div>

            <div className="lg:col-span-2">

              <h3 className="text-4xl font-bold">
                {user.name}
              </h3>

              <p className="text-blue-400 mt-2">
                @{user.login}
              </p>

              <p className="mt-6 text-slate-300 leading-8">
                {user.bio}
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10">

                <div className="rounded-2xl bg-slate-950 p-5 text-center">

                  <FaBook className="mx-auto text-blue-500 text-2xl" />

                  <h4 className="text-3xl font-bold mt-3">
                    {user.public_repos}
                  </h4>

                  <p className="text-slate-400">
                    Repositories
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-950 p-5 text-center">

                  <FaUsers className="mx-auto text-blue-500 text-2xl" />

                  <h4 className="text-3xl font-bold mt-3">
                    {user.followers}
                  </h4>

                  <p className="text-slate-400">
                    Followers
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-950 p-5 text-center">

                  <FaGithub className="mx-auto text-blue-500 text-2xl" />

                  <h4 className="text-3xl font-bold mt-3">
                    {user.following}
                  </h4>

                  <p className="text-slate-400">
                    Following
                  </p>

                </div>

              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
              >
                <FaGithub />

                Visit GitHub
              </a>

            </div>

          </div>
        </motion.div>

        {/* Latest Repositories */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold mb-10">
            Latest Repositories
          </h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {repos.map((repo) => (

              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7 hover:border-blue-500 transition-all hover:-translate-y-2"
              >

                <h4 className="text-2xl font-bold">
                  {repo.name}
                </h4>

                <p className="mt-4 text-slate-400 min-h-[90px] leading-7">
                  {repo.description || "No description available."}
                </p>

                <div className="flex gap-6 mt-6">

                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {repo.stargazers_count}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>

                </div>

                <div className="mt-5 text-blue-400">
                  {repo.language ?? "Unknown"}
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Updated{" "}
                  {new Date(repo.updated_at).toLocaleDateString()}
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt />

                  Repository
                </a>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}