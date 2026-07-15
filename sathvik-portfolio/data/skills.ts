import {
  FaMicrosoft,
  FaCloud,
  FaPython,
  FaReact,
} from "react-icons/fa";

export const skillCategories = [
  {
    icon: FaMicrosoft,
    title: "Enterprise",
    level: "Professional",

    description:
      "Building enterprise workflow automation and document management solutions.",

    skills: [
      "SharePoint Online",
      "Power Automate",
      "Microsoft 365",
      "Workflow Automation",
    ],
  },

  {
    icon: FaCloud,
    title: "Cloud",

    level: "Intermediate",

    description:
      "Experience with Azure and AWS data engineering technologies.",

    skills: [
      "Azure Data Factory",
      "Azure Synapse",
      "Azure Databricks",
      "AWS Glue",
      "Amazon Redshift",
      "Amazon S3",
    ],
  },

  {
    icon: FaPython,

    title: "Programming",

    level: "Advanced",

    description:
      "Building backend services and automation using Python and SQL.",

    skills: [
      "Python",
      "SQL",
      "Core Java",
      "JavaScript",
    ],
  },

  {
    icon: FaReact,

    title: "Web Development",

    level: "Intermediate",

    description:
      "Developing responsive web applications and REST-based systems.",

    skills: [
      "React",
      "Flask",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
];