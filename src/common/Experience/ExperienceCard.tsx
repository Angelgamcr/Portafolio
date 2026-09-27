import { Badge, BadgeColors } from "@/components/Badge";
import { useAppStore } from "@/hooks/useAppStore";

 interface ExperienceCard {
    company: string;
    role: string;
    date: string;
    tasks: { label1: string; label2: string }[];
    technologies: { color: BadgeColors; label: string }[];
}
export const ExperienceCard = ({ company, role, date, tasks, technologies }: ExperienceCard) => {
  const { t } = useAppStore();
  return (
    <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-500 hover:scale-105">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t(role)}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
            {t(company)}
          </p>
        </div>
        <span className="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">
          {t(date)}
        </span>
      </div>
      <ul className="space-y-3 text-slate-700 dark:text-slate-300">
        {tasks.map((task, index) =>
          <li key={'item' + company + index} className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
              ✓
            </span>
            <span>
              <span className="font-semibold">
                {t(task.label1)}
              </span>
              {t(task.label2)}
            </span>
          </li>
        )}

      </ul>
      <div className="flex flex-wrap gap-2 mt-6">
        {
          technologies.map((tech, index) =>
            <Badge key={'badge' + company + index} color={tech.color} className="rounded-full">
              {tech.label}
            </Badge>)
        }


      </div>
    </div>
  )
}
