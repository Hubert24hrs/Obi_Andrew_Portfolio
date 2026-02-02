
export interface Project {
  title: string;
  tools: string[];
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  image: string;
}

export interface Experience {
  role: string;
  company?: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Blog {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  category: string;
}

export interface ClientProfile {
  fullName: string;
  profession: string;
  location: string;
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}
