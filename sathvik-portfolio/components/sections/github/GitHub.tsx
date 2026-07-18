"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GitHubProfile from "./GithubProfile";
import GitHubStats from "./GithubStats";
import FeaturedRepos from "./FeaturedRepos";

export default function GitHub() {
  return (
    <Section id="github">
      <SectionHeader
        badge="Open Source"
        title="GitHub"
        description="Explore my open-source work, featured projects, and coding activity."
      />

      <div className="mt-12 space-y-12">
        <GitHubProfile />

        <GitHubStats />

        <FeaturedRepos />
      </div>
    </Section>
  );
}