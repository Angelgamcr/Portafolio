import { Code, Code2, Database, Users, Zap } from "lucide-react";

// types.ts
export interface Certification {
  title: string;
  institution: string;
  date: string;
  text: string;
  color: string; // Tailwind color (por ejemplo, 'blue', 'green', etc.)
}

// Certificados

export const certifications: Certification[] = [
  {
    title: "React from Zero to Expert (Hooks and MERN)",
    institution: "Udemy",
    date: "Dec 2024",
    color: "border-blue-500 dark:border-blue-400",
    text: 'group-hover:text-blue-600'
  },
  {
    title: "Scrum Fundamentals Certified",
    institution: "ScrumStudy",
    date: "May 2021",
    color: "border-green-500 dark:border-green-400",
    text: 'group-hover:text-green-600'

  },
  {
    title: "API REST with NodeJS and SQL Server",
    institution: "Udemy",
    date: "Jul 2021",
    color: "border-orange-500 dark:border-orange-400",
    text: 'group-hover:text-orange-600'
  },
  {
    title: "Visual Studio Code & GitHub Copilot",
    institution: "Codigo Facilito",
    date: "Mar 2025",
    color: "border-slate-500 dark:border-slate-400",
    text: 'group-hover:text-slate-600'
  },
];

