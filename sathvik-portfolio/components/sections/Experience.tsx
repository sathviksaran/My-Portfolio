"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const achievements = [
  "Managed SharePoint Online sites, document libraries, permissions and custom views.",
  "Developed Power Automate workflows for enterprise business process automation.",
  "Migrated legacy Nintex workflows to Microsoft Power Automate.",
  "Worked on Azure Data Factory, Azure Synapse Analytics and Azure Databricks.",
  "Built ETL pipelines using PySpark and Spark SQL.",
  "Worked with AWS Glue, Amazon Redshift and Amazon S3.",
  "Improved business process efficiency through workflow automation."
];

const technologies = [
  "SharePoint",
  "Power Automate",
  "Azure",
  "AWS",
  "Python",
  "SQL",
  "Databricks",
  "ADF"
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-12 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <p className="mt-5 text-center text-slate-400 max-w-2xl mx-auto">
            My professional journey focused on enterprise automation,
            cloud technologies and modern software development.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
          mt-20
          rounded-3xl
          border
          border-slate-800
          bg-slate-950
          p-10
          hover:border-blue-500
          transition-all
          duration-300
          "
        >

          {/* Header */}

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            <div className="flex items-center gap-5">

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-blue-600
                flex
                items-center
                justify-center
                text-2xl
                "
              >
                <FaBriefcase />
              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Associate IT Consultant
                </h3>

                <p className="text-blue-400 text-lg">
                  ITC Infotech India Ltd.
                </p>

              </div>

            </div>

            <div
              className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-blue-500
              px-5
              py-3
              "
            >
              <FaCalendarAlt />

              Aug 2024 – Present

            </div>

          </div>

          {/* Achievements */}

          <div className="mt-10">

            <h4 className="text-xl font-semibold mb-6">
              Key Responsibilities
            </h4>

            <div className="space-y-5">

              {achievements.map((item) => (

                <div
                  key={item}
                  className="flex gap-4"
                >

                  <FaCheckCircle
                    className="text-blue-500 mt-1 flex-shrink-0"
                  />

                  <p className="text-slate-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Technologies */}

          <div className="mt-10">

            <h4 className="text-xl font-semibold mb-6">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                  rounded-full
                  border
                  border-blue-500/40
                  bg-blue-500/10
                  px-4
                  py-2
                  text-sm
                  "
                >

                  {tech}

                </span>

              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}