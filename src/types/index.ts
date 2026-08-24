// src/types/index.ts

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  availableForWork: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}