import { Code2, Users, Zap } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/layouts/SectionLayout";
import { Badge } from "@/components/Badge";
import {
  backend,
  devOpsAndDB,
  frontend,
  programmingLanguages,
  softSkill,
} from "@/libs/data";

export function SkillSection() {
  const { t } = useAppStore();

  return (
    <SectionLayout
      id="skills"
      backgroundUrl={"background.png"}
      backgroundScrollable={false}
      className="bg-white dark:bg-slate-800/50 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-white mb-12">
        {t("skills.title")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
            {t("skills.frontend")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {frontend.map((skill) => (
              <Badge key={skill} className={"rounded-lg shadow-sm"}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className="text-green-600 dark:text-green-400" size={24} />
            {t("skills.backend")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {backend.map((skill) => (
              <Badge key={skill} className={"rounded-lg shadow-sm"}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <svg
              className="text-orange-600 dark:text-orange-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
            {t("skills.database")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {devOpsAndDB.map((skill) => (
              <Badge key={skill} className={"rounded-lg shadow-sm"}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <svg
              className="text-slate-600 dark:text-slate-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            {t("skills.languages")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {programmingLanguages.map((skill) => (
              <Badge key={skill} className={"rounded-lg shadow-sm"}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl md:col-span-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="text-pink-600 dark:text-pink-400" size={24} />
            {t("skills.soft")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {softSkill.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-lg text-sm font-medium shadow-sm text-center"
              >
                {t(`skills.${skill}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
