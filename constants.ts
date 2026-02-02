
import { Project, Experience, Education, Blog, ClientProfile } from './types';

export const PROFILE: ClientProfile = {
  fullName: "Obi Andrew",
  profession: "Data Scientist / Data Analyst",
  location: "Nigeria",
  github: "https://github.com/Andrewobi26",
  linkedin: "https://www.linkedin.com/in/andrewobi",
  email: "chineduobi264@gmail.com",
  phone: "+2349032136258"
};

export const CORE_SKILLS = [
  "SQL",
  "Power BI",
  "Python (Pandas, NumPy, Matplotlib)",
  "Excel",
  "Data Cleaning",
  "KPI Dashboards",
  "Data Visualization",
  "Insight Generation"
];

export const BUSINESS_SKILLS = [
  "CRM Strategy",
  "Sales Pipeline Analysis",
  "Customer Journey Analysis",
  "Workflow Optimization",
  "Stakeholder Reporting",
  "AI + Data Alignment"
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Freelance Data Analyst",
    duration: "2023 - Present (2 Years)",
    highlights: [
      "Cleaned and standardized datasets to improve data quality by 30% for local retail clients.",
      "Built interactive KPI dashboards using Power BI and Excel for real-time sales tracking.",
      "Delivered actionable insights for small businesses, leading to a 15% increase in operational efficiency."
    ]
  },
  {
    role: "Media Analyst / Director – Stage Production",
    duration: "6 Months",
    highlights: [
      "Spearheaded audience engagement analysis through digital survey data integration.",
      "Production workflow optimization by implementing centralized reporting systems.",
      "Ensured high operational accuracy in reporting for stakeholder reviews."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Global Water Access Analysis",
    tools: ["SQL", "Excel", "Data Visualization"],
    description: "Deep-dive analysis of global water access data, identifying socio-economic disparities and communicating critical insights using advanced pivot tables and data summaries.",
    githubUrl: "https://github.com/Andrewobi26",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Automated Performance Dashboard",
    tools: ["Python", "Pandas", "Matplotlib"],
    description: "Developed an automated KPI dashboard to visualize trends and performance metrics for sales pipelines, reducing manual reporting time by 80%.",
    githubUrl: "https://github.com/Andrewobi26",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Associate Degree, Data Analytics",
    institution: "Aptech Learning",
    year: "2025"
  },
  {
    degree: "Bachelor of Arts, Media Arts",
    institution: "Anambra State University",
    year: "2024"
  }
];

export const CERTIFICATIONS = [
  "Microsoft Excel Analysis (Coursera)",
  "Power BI for Data Analytics (Coursera)"
];

export const BLOGS: Blog[] = [
  {
    title: "The Power of SQL in Modern Business Intelligence",
    date: "Feb 10, 2024",
    excerpt: "Why SQL remains the backbone of any serious data professional's toolkit in the age of AI.",
    link: "#",
    category: "Data Engineering"
  },
  {
    title: "Visualizing Success: Why Power BI is a CRM Game-changer",
    date: "Jan 15, 2024",
    excerpt: "Exploring how interactive dashboards transform stale sales data into actionable strategies.",
    link: "#",
    category: "Business Analytics"
  }
];
