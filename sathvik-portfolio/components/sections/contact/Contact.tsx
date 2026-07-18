"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
    >
      <SectionHeader
        badge="Get In Touch"
        title="Contact Me"
        description="Have a project, job opportunity, or just want to say hello? I'd love to hear from you."
        titleId="contact-heading"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}