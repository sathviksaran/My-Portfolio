"use client";


import Section from "@/components/ui/Section";
import SkillsGrid from "./SkillsGrid";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        badge="Skills"
        title="Technical"
        highlight="Expertise"
        description="Technologies and tools I use to build enterprise workflow automation, cloud solutions and modern web applications."
      />

      <SkillsGrid />
    </Section>
  );
}