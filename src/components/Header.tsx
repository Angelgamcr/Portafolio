import {
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useAppStore } from "@/hooks/useAppStore";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}
export function Header({ scrollToSection }: HeaderProps) {
  const {
    t,
    language,
    theme,
    setTheme,
    setLanguage,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useAppStore();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">
            Angel Gamboa
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t.nav.education}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {t.nav.contact}
            </button>

            <div className="flex items-center gap-3 border-l border-slate-300 dark:border-slate-600 pl-4">
              <button
                onClick={toggleLanguage}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1"
                title="Change language"
              >
                <Globe size={20} />
                <span className="text-sm font-semibold">
                  {language.toUpperCase()}
                </span>
              </button>
              <button
                onClick={toggleTheme}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                title="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <a
                href="https://linkedin.com/in/angelgamcr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/angelgamcr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-400 transition"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}

        <div
          className={`md:hidden space-y-3 border-t border-slate-200 dark:border-slate-700  
            overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 mt-4 pt-4 pb-4"
                : "max-h-0 opacity-0"
            }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
          >
            {t.nav.experience}
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
          >
            {t.nav.skills}
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
          >
            {t.nav.education}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2"
          >
            {t.nav.contact}
          </button>
          <div className="flex gap-4 pt-3 border-t border-slate-200 dark:border-slate-700">
            <a
              href="https://linkedin.com/in/angelgamcr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/angelgamcr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:angelgamcr@gmail.com"
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
