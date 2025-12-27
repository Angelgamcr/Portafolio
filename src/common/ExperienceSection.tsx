import { Badge, BadgeColors } from "@/components/Badge";
import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/layouts/SectionLayout";

export function ExperienceSection() {
  const { t } = useAppStore();

  return (
    <SectionLayout
      id="experience"
      className="bg-white dark:bg-slate-800/50 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
        {t("experience.title")}
      </h2>
      <div className="space-y-8">
        {/* Experience 1 */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t("experience.role1")}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                {t("experience.company1")}
              </p>
            </div>
            <span className="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">
              {t("experience.date1")}
            </span>
          </div>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement1")}
                </span>
                {t("experience.achievement1b")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement2")}
                </span>{" "}
                {t("experience.achievement2b")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement3")}
                </span>{" "}
                {t("experience.achievement3b")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement4")}
                </span>
                {t("experience.achievement4b")}
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge color={BadgeColors.Blue} className="rounded-full">
              React
            </Badge>
            <Badge color={BadgeColors.Green} className="rounded-full">
              Node.js
            </Badge>
            <Badge color={BadgeColors.Cyan} className="rounded-full">
              TypeScript
            </Badge>
            <Badge color={BadgeColors.Slate} className="rounded-full">
              Microservices
            </Badge>
            <Badge color={BadgeColors.Purple} className="rounded-full">
              Docker
            </Badge>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t("experience.role1")}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                {t("experience.company2")}
              </p>
            </div>
            <span className="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">
              {t("experience.date2")}
            </span>
          </div>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement5")}
                </span>{" "}
                {t("experience.achievement5b")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement6")}
                </span>{" "}
                {t("experience.achievement6b")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">
                ✓
              </span>
              <span>
                <span className="font-semibold">
                  {t("experience.achievement7")}
                </span>{" "}
                {t("experience.achievement7b")}
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge color={BadgeColors.Red} className="rounded-full">
              Angular
            </Badge>
            <Badge color={BadgeColors.Green} className="rounded-full">
              Node.js
            </Badge>
            <Badge color={BadgeColors.Blue} className="rounded-full">
              SQL Server
            </Badge>
            <Badge color={BadgeColors.Orange} className="rounded-full">
              Apache Tomcat
            </Badge>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
