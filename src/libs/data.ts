// types.ts
export interface Certification {
  title: string;
  institution: string;
  date: string;
  color: string; // Tailwind color (por ejemplo, 'blue', 'green', etc.)
}

// Certificados
export const certifications: Certification[] = [
  {
    title: "React from Zero to Expert (Hooks and MERN)",
    institution: "Udemy",
    date: "Dec 2024",
    color: "blue",
  },
  {
    title: "Scrum Fundamentals Certified",
    institution: "ScrumStudy",
    date: "May 2021",
    color: "green",
  },
  {
    title: "API REST with NodeJS and SQL Server",
    institution: "Udemy",
    date: "Jul 2021",
    color: "orange",
  },
  {
    title: "Visual Studio Code & GitHub Copilot",
    institution: "Codigo Facilito",
    date: "Mar 2025",
    color: "slate",
  },
];

// Skills Data
export const frontend = [
  "React",
  "Next.js",
  "Angular",
  "Redux",
  "Tailwind",
  "Vite",
  "Ionic",
];
export const backend = [
  "Node.js",
  "Express",
  "Spring Boot",
  "Prisma",
  "Kafka",
  "RabbitMQ",
];
export const devOpsAndDB = [
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
  "Scrum",
];
export const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
];
export const softSkill = [
  "teamwork",
  "communication",
  "proactive",
  "problem",
  "flexibility",
  "responsible",
  "cooperative",
  "agile",
];
