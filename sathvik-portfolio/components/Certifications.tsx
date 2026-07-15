"use client";

import { certifications } from "@/data/certifications";
import { FaAward } from "react-icons/fa";

export default function Certifications() {
  return (
    <section className="py-24 px-6 lg:px-12">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-4xl md:text-5xl font-bold">

          Certifications

        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {certifications.map((item) => (

            <div
              key={item.title}
              className="
              rounded-3xl
              bg-slate-900
              border
              border-slate-800
              p-8
              hover:border-blue-500
              transition
              "
            >

              <FaAward
                className="text-4xl text-blue-500"
              />

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.provider}
              </p>

              <p className="mt-2">
                {item.badge}
              </p>

              <p className="text-slate-500">
                {item.year}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}