// Skills Data

import { Code, Code2, Database, Users, Zap } from "lucide-react";

const frontend = {
  title: "frontend",
  color: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
  icon: {
    element: Code2,
    color: "text-blue-600 dark:text-blue-40"
  },
  skills: [
   "React",
  "Next.js",
  "Angular",
  "Redux",
  "Tailwind",
  "Vite",
  "Ionic",
  ]
};
const backend = {
  title: "backend",
  color: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
  icon: {
    element: Zap,
    color: "text-green-600 dark:text-green-400"
  },
  skills: [
    "Node.js",
  "Express",
  "Spring Boot",
  "Prisma",
  "Kafka",
  "RabbitMQ",
  ]
};
const devOpsAndDB = {
  title: "database",
  color: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
  icon: {
    element: Database,
    color: "text-orange-600 dark:text-orange-400"
  },
  skills: [
     "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
  "Scrum",
  ]
};
const programmingLanguages = {
  title: "languages",
  color: 'from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50',
  icon: {
    element: Code,
    color: "text-slate-600 dark:text-slate-400"
  },
  skills: [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  ]
};
const softSkill = {
  title: "soft",
  color: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
  icon: {
    element: Users,
    color: "text-pink-600 dark:text-pink-400"
  },
  skills: [
    "teamwork",
    "communication",
    "proactive",
    "problem",
    "flexibility",
    "responsible",
    "cooperative",
    "agile",
  ]
};
export const SKILLS = [
  frontend,
  backend,
  devOpsAndDB,
  programmingLanguages,
  softSkill,
]



