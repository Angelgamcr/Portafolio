import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/layouts/SectionLayout";

interface ContactSectionProps {
  downloadFile: () => void;
}

export function ContactSection({ downloadFile }: ContactSectionProps) {
  const { t } = useAppStore();

  return (
    <SectionLayout
      id="contact"
      className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white"
      classNameDiv="max-w-4xl text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
      <p className="text-xl text-slate-300 dark:text-slate-400 mb-12">
        {t.contact.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="https://linkedin.com/in/angelgamcr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Linkedin size={20} />
          {t.contact.linkedin}
        </a>
        <a
          href="https://github.com/angelgamcr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Github size={20} />
          {t.contact.github}
        </a>
        <button
          onClick={downloadFile}
          className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
        >
          <Download size={20} />
          {t.contact.download}
        </button>
      </div>

      <div className="border-t border-slate-700 dark:border-slate-800 pt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300 dark:text-slate-400">
          <a
            href="mailto:angelgamcr@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Mail size={20} />
            angelgamcr@gmail.com
          </a>
          <span className="hidden sm:block">•</span>

          <a
            href="tel:+50686456671"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +506 8645 6671
          </a>
          <span className="hidden sm:block">•</span>
          <span>Costa Rica</span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-sm">
          {t.contact.builtWith}
        </p>
      </div>
    </SectionLayout>
  );
}
