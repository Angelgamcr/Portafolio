import { useEffect } from "react";
import { downloadFile } from "./libs/downloadPDF";
import { Header } from "./components/Header";
import { useAppStore } from "./hooks/useAppStore";
import { Language, Theme } from "./types/types";
import { HeroSection } from "./common/HeroSection";
import { AboutSection } from "./common/AboutSection";
import { ExperienceSection } from "./common/ExperienceSection";
import { SkillSection } from "./common/SkillSection";
import { EducationSection } from "./common/EducationSection";
import { ContactSection } from "./common/ContactSection";

function App() {
  const { t, setTheme, setLanguage, setMobileMenuOpen } = useAppStore();

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    const savedLanguage =
      (localStorage.getItem("language") as Language) || "en";
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="relative min-h-dvh bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 ">
        {/* Hero Section */}
        <HeroSection scrollToSection={scrollToSection} />

        {/* Navigation */}
        <Header scrollToSection={scrollToSection} />

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
