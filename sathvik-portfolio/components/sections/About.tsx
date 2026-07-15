"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBriefcase className="text-2xl text-blue-400" />,
    title: "Experience",
    value: "2+ Years",
  },
  {
    icon: <FaLaptopCode className="text-2xl text-blue-400" />,
    title: "Projects",
    value: "10+ Completed",
  },
  {
    icon: <FaAward className="text-2xl text-blue-400" />,
    title: "Certifications",
    value: "3+",
  },
  {
    icon: <FaGraduationCap className="text-2xl text-blue-400" />,
    title: "Education",
    value: "B.Tech CSE",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="gradient-text">
              Me
            </span>
          </h2>

          <p className="text-center text-slate-400 mt-5 max-w-2xl mx-auto">
            Get to know more about my professional journey,
            technical expertise and passion for software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold">
              Associate IT Consultant
            </h3>

            <p className="text-blue-400 mt-2">
              ITC Infotech India Ltd.
            </p>

            <p className="mt-8 text-slate-300 leading-9">

              I&apos;m Sathvik Saran Atchukolu, an Associate IT Consultant with
              nearly 2 years of experience in enterprise automation and
              cloud technologies.

              <br /><br />

              My primary expertise is in SharePoint Online and Power Automate,
              where I design and automate business workflows that improve
              operational efficiency.

              <br /><br />

              I also have exposure to Azure Data Engineering, AWS services,
              Python, SQL and Full Stack Web Development. I enjoy building
              scalable applications and solving business problems through
              technology.

            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div>
                <p className="text-slate-500">Name</p>
                <h4 className="font-semibold">
                  Sathvik Saran Atchukolu
                </h4>
              </div>

              <div>
                <p className="text-slate-500">Location</p>
                <h4 className="font-semibold">
                  Ongole, Andhra Pradesh
                </h4>
              </div>

              <div>
                <p className="text-slate-500">Email</p>
                <h4 className="font-semibold break-all">
                  atchukolus@gmail.com
                </h4>
              </div>

              <div>
                <p className="text-slate-500">Current Role</p>
                <h4 className="font-semibold">
                  Associate IT Consultant
                </h4>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {cards.map((card) => (

              <div
                key={card.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >

                {card.icon}

                <h3 className="mt-6 text-3xl font-bold">
                  {card.value}
                </h3>

                <p className="text-slate-400 mt-2">
                  {card.title}
                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}