"use client";


import Section from "@/components/ui/Section";
import ProjectGrid from "./ProjectGrid";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        badge="Portfolio"
        title="Featured"
        highlight="Projects"
        description="A collection of projects demonstrating my experience in enterprise automation, AI, machine learning, and full-stack development."
      />

      <ProjectGrid />
    </Section>
  );
}