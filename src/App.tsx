import { downloadFile } from "./libs/downloadPDF";
import { Header } from "./components/Header";
import { useAppStore } from "./hooks/useAppStore";
import { AboutSection } from "./common/AboutSection";
import { ExperienceSection } from "./common/Experience/ExperienceSection";
import { SkillSection } from "./common/Skill/SkillSection";
import { EducationSection } from "./common/EducationSection";
import { ContactSection } from "./common/ContactSection";
import { HomeSection } from "./common/HomeSection";

function App() {
  const { changeTheme, changeLanguage, setMobileMenuOpen } = useAppStore();



  return (
    <>
      <div className="relative min-h-dvh bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 ">
        {/* Home Section */}
        <HomeSection />

        {/* Navigation */}
        <Header />

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillSection />

        {/* Education & Certifications */}
        <EducationSection />

        {/* Contact CTA */}
        <ContactSection downloadFile={downloadFile} />
      </div>
    </>
  );
}

export default App;
