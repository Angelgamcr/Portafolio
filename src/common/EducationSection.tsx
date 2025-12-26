import SectionLayout from "@/layouts/SectionLayout";
import { useAppStore } from "@/hooks/useAppStore";
import { certifications } from "@/libs/data";

export function EducationSection() {
  const { t } = useAppStore();

  return (
    <SectionLayout id="education">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
        {t.education.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <svg
                className="text-blue-600 dark:text-blue-400"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.education.educationTitle}
            </h3>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.education.degree}
            </h4>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
              {t.education.university}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {t.education.graduated}
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">
              {t.education.description}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
              <svg
                className="text-green-600 dark:text-green-400"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.education.certifications}
            </h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className={`border-l-4 border-${cert.color}-500 dark:border-${cert.color}-400 pl-4`}
              >
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {cert.institution} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
