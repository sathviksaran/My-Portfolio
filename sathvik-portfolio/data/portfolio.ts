import { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  personal: {
    fullName: "Sathvik Saran Atchukolu",
    firstName: "Sathvik Saran",
    lastName: "Atchukolu",
    title: "Associate IT Consultant",
    company: "ITC Infotech",
    experience: 2,
    education: "B.Tech in Computer Science & Engineering",
    location: "Ongole, Andhra Pradesh, India",
    email: "atchukolus@gmail.com",
    phone: "+91 XXXXXXXXXX",
    availability: "Open to Opportunities",
    resume: "/resume.pdf",
    profileImage: "/images/profile.jpg",
  },

  featuredTechnologies: [
  {
    name: "SharePoint",
    image: "/icons/sharepoint.svg",
  },
  {
    name: "Power Automate",
    image: "/icons/power-automate.svg",
  },
  {
    name: "Azure",
    image: "/icons/azure.svg",
  },
  {
    name: "AWS",
    image: "/icons/aws.svg",
  },
  {
    name: "Python",
    image: "/icons/python.svg",
  },
  {
    name: "React",
    image: "/icons/react.svg",
  },
],

  social: {
    github: "https://github.com/sathviksaran",
    linkedin:
      "https://linkedin.com/in/sathvik-saran-atchukolu-403733227",
    email: "mailto:atchukolus@gmail.com",
  },

  stats: [
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 10,
    suffix: "+",
    label: "Projects Built",
  },
  {
    value: 3,
    suffix: "+",
    label: "Certifications",
  },
],

  technologies: [
    {
      category: "Microsoft",
      items: [
        {
          name: "SharePoint",
          image: "/icons/sharepoint.svg",
        },
        {
          name: "Power Automate",
          image: "/icons/power-automate.svg",
        },
        {
          name: "Power Apps",
          image: "/icons/power-apps.svg",
        },
        {
          name: "Azure",
          image: "/icons/azure.svg",
        },
      ],
    },

    {
      category: "Frontend",
      items: [
        {
          name: "React",
          image: "/icons/react.svg",
        },
        {
          name: "Next.js",
          image: "/icons/nextjs.svg",
        },
        {
          name: "TypeScript",
          image: "/icons/typescript.svg",
        },
        {
          name: "Tailwind CSS",
          image: "/icons/tailwindcss.svg",
        },
      ],
    },

    {
      category: "Backend",
      items: [
        {
          name: "Python",
          image: "/icons/python.svg",
        },
        {
          name: "Flask",
          image: "/icons/flask.svg",
        },
        {
          name: "Django",
          image: "/icons/django.svg",
        },
      ],
    },

    {
      category: "Cloud",
      items: [
        {
          name: "Azure",
          image: "/icons/azure.svg",
        },
        {
          name: "AWS",
          image: "/icons/aws.svg",
        },
      ],
    },

    {
      category: "Database",
      items: [
        {
          name: "MySQL",
          image: "/icons/mysql.svg",
        },
      ],
    },

    {
      category: "Tools",
      items: [
        {
          name: "Git",
          image: "/icons/git.svg",
        },
        {
          name: "GitHub",
          image: "/icons/github.svg",
        },
        {
          name: "Vercel",
          image: "/icons/vercel.svg",
        },
      ],
    },
  ],

  experience: [
    {
      company: "ITC Infotech",
      role: "Associate IT Consultant",
      duration: "Aug 2024 - Present",

      description:
        "Working on enterprise workflow automation and SharePoint administration while gaining exposure to Azure, AWS, and modern web technologies.",

      responsibilities: [
        "SharePoint Administration",
        "Power Automate Workflow Development",
        "Workflow Migration",
        "Document Library Management",
        "Permission Management",
        "Power Platform Solutions",
      ],

      technologies: [
        "SharePoint",
        "Power Automate",
        "Azure",
        "AWS",
        "Python",
        "SQL",
      ],
    },
  ],

  projects: [
    {
  title: "PregBot",

  description:
    "AI-powered pregnancy healthcare chatbot with multilingual support and nearby hospital recommendations.",

  image: "/projects/pregbot.png",

  github: "https://github.com/username/pregbot",

  demo: "",

  year: "2024",

  status: "Completed",

  featured: true,

  technologies: [
    "Python",
    "Flask",
    "MySQL",
    "JavaScript",
  ],

  category: "ML",
},

    {
      title: "Crop Recommendation System",

      description:
        "Machine Learning application that recommends crops based on soil and weather conditions.",

      image: "/projects/crop.png",

      github: "",

      demo: "",

      year: "2024",

      status: "Completed",

      featured: false,

      technologies: [
        "Python",
        "Flask",
        "Machine Learning",
      ],

      category: "ML",
    },

    {
      title: "Drug Dosage Control System",

      description:
        "Web application for medicine dosage recommendations based on symptoms.",

      image: "/projects/drug.png",

      github: "",

      demo: "",

      year: "2024",

      status: "Completed",

      featured: true,

      technologies: [
        "Python",
        "Flask",
        "MySQL",
      ],

      category: "ML",
    },
  ],
  github: {
  username: "your-github-username",
  profile: "https://github.com/your-github-username",
  bio: "Associate IT Consultant passionate about automation, cloud computing, and full-stack development.",

  featuredRepositories: [
    {
      name: "PregBot",
      description: "AI-powered pregnancy support chatbot.",
      url: "https://github.com/...",
      technologies: [
        "Flask",
        "Python",
        "MySQL",
      ],
    },
  ],
},
};