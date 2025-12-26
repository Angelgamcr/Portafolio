import { Rocket, Users, Zap } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/layouts/SectionLayout";

export function AboutSection() {
  const { t } = useAppStore();

  return (
    <SectionLayout
      id="about"
      className="bg-slate-200/50 dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
        {t.about.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {t.about.intro1}{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {t.about.years}
            </span>{" "}
            {t.about.intro2}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {t.about.intro3}
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <Rocket
              className="text-blue-600 dark:text-blue-400 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                {t.about.microservices}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t.about.microservicesDesc}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <Zap
              className="text-yellow-600 dark:text-yellow-400 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                {t.about.interfaces}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t.about.interfacesDesc}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <Users
              className="text-green-600 dark:text-green-400 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                {t.about.mvp}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t.about.mvpDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
