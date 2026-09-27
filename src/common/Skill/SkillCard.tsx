import { Badge } from "@/components/Badge";
import { useAppStore } from "@/hooks/useAppStore";
import { ReactElement } from "react";

interface SkillCard {
    skills: string[];
    icon: ReactElement;
    title: string;
    color: string;
}

export const SkillCard = ({ skills, icon, color, title }: SkillCard) => {
    const { t } = useAppStore();
    const isSoft = title === 'soft';
    return (
        <div className={`bg-gradient-to-br ${color} p-6 rounded-xl transition hover:scale-105 ${isSoft ? 'md:col-span-2' : ''}`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                {icon}
                {t(`skills.${title}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} className={"rounded-lg shadow-sm"}>
                        {isSoft ? t(`skills.${skill}`) : skill}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
