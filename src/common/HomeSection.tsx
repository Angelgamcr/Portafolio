import { Download } from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";
import SectionLayout from "@/components/SectionLayout";
import { downloadFile } from "@/libs/downloadPDF";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button, ButtonColor } from "@/components/Button";



export function HomeSection() {
  const { t } = useAppStore();
  const { scrollToSection } = useActiveSection();

  return (
    <SectionLayout
      id="home"
      className="relative"
      backgroundUrl={"profileBackground01.jpg"}
      backgroundScrollable={true}
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-start gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
              {t("hero.badge")}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-2xl text-slate-300 font-medium">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("hero.description")}
            <span className="font-semibold text-slate-200">
              {t("hero.techStack")}
            </span>
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">

            {/* BOTON DE IR A CONTACTO */}
            <Button
              onClick={() => scrollToSection("contact")}
              color={ButtonColor.LIGHT}
            >
              {t("hero.connectBtn")}
            </Button>
           
            {/* BOTON DE DESCARGAR CV */}
             <Button
              onClick={downloadFile}
              color={ButtonColor.TRANSPARENT}
            >
             <Download size={20} />
              {t("hero.downloadBtn")}
            </Button>

          </div>
        </div>
        {/* <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
            <Code2 size={120} className="text-white" />
          </div>
        </div> */}
        <div className="flex-1 flex justify-center">
          <div className="inline-block rounded-full overflow-hidden w-[256px] h-[256px] border-4 border-slate-200 border-slate-700 shadow-inner">
            <img 
              src="profile.png" 
              width={256} 
              height={256} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
