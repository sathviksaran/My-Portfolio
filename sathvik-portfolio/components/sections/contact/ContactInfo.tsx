"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import ContactCard from "./ContactCard";
import SocialLinks from "@/components/ui/SocialLinks";
import { portfolio } from "@/data/portfolio";

export default function ContactInfo() {
  const { contact } = portfolio;

  return (
    <div className="space-y-6">
      <ContactCard
        icon={<Mail className="h-6 w-6" />}
        title="Email"
        value={contact.email}
        href={`mailto:${contact.email}`}
      />

      <ContactCard
        icon={<Phone className="h-6 w-6" />}
        title="Phone"
        value={contact.phone}
        href={`tel:${contact.phone}`}
      />

      <ContactCard
        icon={<MapPin className="h-6 w-6" />}
        title="Location"
        value={contact.location}
      />

      <div className="pt-2">
        <h3 className="mb-4 text-lg font-semibold">
          Connect with me
        </h3>

        <SocialLinks className="pt-4" />
      </div>
    </div>
  );
}