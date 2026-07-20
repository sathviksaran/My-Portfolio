"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  if (!certifications.length) return null;

  return (
    <section
      id="certifications"
      className="py-24 px-6 lg:px-12"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="certifications-heading"
            className="text-4xl font-bold md:text-5xl"
          >
            Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Professional certifications that demonstrate my commitment to
            continuous learning and expertise in modern technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => {
            const Card = (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-8
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:shadow-xl
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <FaAward className="text-2xl text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item.provider}
                </p>

                <p className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {item.badge}
                </p>

                <p className="mt-4 text-sm text-muted-foreground">
                  {item.year}
                </p>
              </motion.article>
            );

            return item.url ? (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${item.title} certificate`}
              >
                {Card}
              </Link>
            ) : (
              <div key={item.id}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}