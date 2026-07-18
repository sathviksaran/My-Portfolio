"use client";

import { portfolio } from "@/data/portfolio";

import GitHubRepoCard from "./GitHubRepoCard";

export default function FeaturedRepos() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Featured
        </p>

        <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          Repositories
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.github.featuredRepositories.map((repo) => (
          <GitHubRepoCard
            key={repo.name}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );
}