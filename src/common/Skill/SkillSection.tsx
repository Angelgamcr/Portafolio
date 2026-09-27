import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/layouts/SectionLayout";
import {
  skills,
} from "@/libs/data";
import { SkillCard } from "./SkillCard";

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


       {
          skills.map(skill =>
            <SkillCard
              title={skill.title}
              color={skill.color}
              icon={<skill.icon.element className={skill.icon.color} size={24} />}
              skills={skill.skills}
            />
          )
        }
      </div>
    </SectionLayout>
  );
}
