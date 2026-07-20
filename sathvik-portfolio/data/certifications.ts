export interface Certification {
  id: string;
  title: string;
  provider: string;
  badge: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: "az-900",
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    badge: "AZ-900 (Score: 750/1000)",
    year: "2025",
  },
  {
    id: "nptel-python",
    title: "Programming in Python",
    provider: "NPTEL",
    badge: "Certified",
    year: "2023",
  },
  {
    id: "nptel-python-data-science",
    title: "Python for Data Science",
    provider: "NPTEL",
    badge: "Elite (83%)",
    year: "2023",
  },
];