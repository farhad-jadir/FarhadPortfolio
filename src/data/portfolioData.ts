// src/data/portfolioData.ts
import { PersonalInfo, SkillCategory, Project, Experience } from "../types";

export const personalInfo: PersonalInfo & { whatsapp: string } = {
  name: "MD Farhad Hossain Jony",
  role: "Full-Stack Web Developer",
  bio: "Passionate about building modern, scalable, and high-performance web applications using Next.js, TypeScript, and modern cloud technologies.",
  location: "Bangladesh",
  email: "farhadjony.math@gmail.com",
  github: "https://github.com/farhad-jadir",
  linkedin: "https://www.linkedin.com/in/md-farhad-hoossain/",
  whatsapp: "+8801932494712",
  availableForWork: true,
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "MongoDB Atlas", "Supabase", "Firebase", "REST APIs"],
  },
  {
    category: "Cloud, Tools & DevOps",
    skills: ["Git & GitHub", "Netlify", "Google Cloud Platform", "Vercel"],
  },
];

export const projectsData: (Project & { imageUrl?: string })[] = [
  {
    id: "project-0",
    title: "Social E-Commerce Platform",
    description: "A feature-rich social commerce application combining social feeds, interactive product showcases, dynamic checkout, and Supabase real-time data sync.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://fjony.netlify.app/",
    githubUrl: "https://github.com/farhad-jadir",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Ffjony.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    featured: true,
  },
  {
    id: "project-1",
    title: "Bagherpara Municipality Portal",
    description: "A modern digital citizen service platform featuring real-time notices, complaints management, and automated citizen services.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://bpmunicipality.netlify.app/",
    githubUrl: "https://github.com/farhad-jadir",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fbpmunicipality.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    featured: true,
  },
  {
    id: "project-2",
    title: "Political Portfolio & Campaign Portal",
    description: "A dedicated responsive portal presenting political milestones, organizational campaigns, activities, and official press releases.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://sifullahjewel.netlify.app/",
    githubUrl: "https://github.com/farhad-jadir",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fsifullahjewel.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    featured: true,
  },
  {
    id: "project-3",
    title: "To-Let House Rent Solution",
    description: "A comprehensive property listing and rental search application with real-time database integration and dynamic filtering.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://toletatik.netlify.app/",
    githubUrl: "https://github.com/farhad-jadir",
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Ftoletatik.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    featured: true,
  },
];

export const experiencesData: Experience[] = [
  {
    role: "Open for Full-Time / Remote Opportunities",
    organization: "Tech Companies, Startups & Product Teams",
    period: "Actively Looking",
    description: "Ready to contribute to engineering teams as a Full-Stack / Frontend Developer. Skilled in Next.js, TypeScript, RESTful APIs, modern databases, and clean scalable architecture.",
  },
  {
    role: "Full-Stack Web Developer",
    organization: "Freelance & Production Projects",
    period: "2024 - Present",
    description: "Architected, developed, and deployed modern scalable web applications, client management portals, and cloud database integrations using Next.js, Supabase, and MongoDB Atlas.",
  },
];