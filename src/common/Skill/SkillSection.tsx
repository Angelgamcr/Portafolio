import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/components/SectionLayout";

import { SkillCard } from "./SkillCard";
import { SKILLS } from "../../mocks/skills.mock";

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
          SKILLS.map((skill, index) =>
            <SkillCard
              key={'skill' + index}
              {...skill}
              icon={<skill.icon.element className={skill.icon.color} size={24} />}
            />
          )
        }
      </div>
    </SectionLayout>
  );
}
