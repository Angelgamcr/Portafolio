import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/components/SectionLayout";
import { ExperienceCard } from "./ExperienceCard";
import { EXPERIENCES } from "../../mocks/experiences.mock";

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

        {
          EXPERIENCES.map((experience, index) =>
            <ExperienceCard
              key={'experience' + index}
              {...experience}
            />)
        }
      </div>
    </SectionLayout>
  );
}
