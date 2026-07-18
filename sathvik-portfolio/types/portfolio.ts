import { ReactNode } from "react";

export interface Personal {
  fullName: string;
  firstName: string;
  lastName:string;
  title: string;
  company: string;
  experience: number;
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  resume: string;
  profileImage: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface TechnologyItem {
  name: string;
  image: string;
}

export interface FeaturedTechnology {
  name: string;
  image: string;
}

export interface TechnologyCategory {
  category: string;
  items: TechnologyItem[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;

  image: string;

  github?: string;
  demo?: string;

  technologies: string[];

  featured?: boolean;

  status?: "Completed" | "In Progress";

  year?: string;

  category?: "Web" | "AI" | "ML" | "Automation";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}


export interface GitHubRepository {
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

export interface GitHub {
  username: string;
  profile: string;
  bio: string;
  featuredRepositories: GitHubRepository[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface Portfolio {
  personal: Personal;
  social: SocialLink[];
  stats: Stat[];
  featuredTechnologies: FeaturedTechnology[];
  technologies: TechnologyCategory[];
  experience: Experience[];
  projects: Project[];
  github: GitHub;
  contact: Contact;
}

