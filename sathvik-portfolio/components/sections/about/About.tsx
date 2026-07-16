"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import AboutContent from "./AboutContent";
import AboutFacts from "./AboutFacts";
import AboutTech from "./AboutTech";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        badge="About Me"
        title="Building"
        highlight="Enterprise Solutions"
        description="Associate IT Consultant with nearly 2 years of experience delivering workflow automation, enterprise applications and modern web solutions."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <AboutContent />

        <AboutFacts />
      </div>

      <AboutTech />
    </Section>
  );
}