// types.ts
export interface Certification {
  title: string;
  institution: string;
  date: string;
  color: string; // Tailwind color (por ejemplo, 'blue', 'green', etc.)
}

// data.ts
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
