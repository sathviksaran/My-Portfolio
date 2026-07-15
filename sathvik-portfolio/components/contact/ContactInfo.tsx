"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/YOUR_GITHUB_USERNAME",
    icon: FaGithub,
    color: "hover:border-white/30",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    icon: FaLinkedin,
    color: "hover:border-blue-500/40",
  },
  {
    name: "Resume",
    href: "/Sathvik_Saran_Resume.pdf",
    icon: FileText,
    color: "hover:border-green-500/40",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-3xl font-bold">
          Let&apos;s Connect 👋
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          I&apos;m always open to discussing new
          opportunities, freelance work,
          collaborations, or simply talking
          about technology.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-5">

        {/* Email */}

        <a
          href="mailto:atchukolus@gmail.com"
          className="
            group
            flex
            items-center
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-500/40
          "
        >
          <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
            <Mail size={24} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-medium">
              atchukolus@gmail.com
            </p>
          </div>
        </a>

        {/* Phone */}

        <a
          href="tel:+916302947720"
          className="
            group
            flex
            items-center
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-green-500/40
          "
        >
          <div className="rounded-xl bg-green-500/20 p-3 text-green-400">
            <Phone size={24} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p className="font-medium">
              +91 63029 47720
            </p>
          </div>
        </a>

        {/* Location */}

        <div
          className="
            flex
            items-center
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-xl
          "
        >
          <div className="rounded-xl bg-indigo-500/20 p-3 text-indigo-400">
            <MapPin size={24} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Location
            </p>

            <p className="font-medium">
              Ongole, Andhra Pradesh, India
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}

      <div>
        <h4 className="mb-4 text-lg font-semibold">
          Find me online
        </h4>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                target={
                  item.name === "Resume"
                    ? "_blank"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${item.color}
                `}
              >
                <Icon className="h-5 w-5" />

                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}