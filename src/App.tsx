import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Code2, Rocket, Users, Zap, Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { translations, Language } from './translations';
import { certifications } from './libs/data';
import { downloadFile } from './libs/downloadPDF';
function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    const savedLanguage = localStorage.getItem('language') as Language || 'en';
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Angel Gamboa</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t.nav.experience}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('education')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t.nav.education}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {t.nav.contact}
              </button>

              <div className="flex items-center gap-3 ml-4 border-l border-slate-300 dark:border-slate-600 pl-4">
                <button onClick={toggleLanguage} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1" title="Change language">
                  <Globe size={20} />
                  <span className="text-sm font-semibold">{language.toUpperCase()}</span>
                </button>
                <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition" title="Toggle theme">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <a href="https://linkedin.com/in/angelgamcr" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/angelgamcr" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-400 transition">
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button onClick={toggleLanguage} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <Globe size={20} />
              </button>
              <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 dark:text-slate-300">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-200 dark:border-slate-700 pt-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">
                {t.nav.experience}
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">
                {t.nav.education}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">
                {t.nav.contact}
              </button>
              <div className="flex gap-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                <a href="https://linkedin.com/in/angelgamcr" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/angelgamcr" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-400 transition">
                  <Github size={24} />
                </a>
                <a href="mailto:angelgamcr@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-300 font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.hero.description} <span className="font-semibold text-slate-800 dark:text-slate-200">{t.hero.techStack}</span>
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => scrollToSection('contact')} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-lg hover:shadow-xl">
                  {t.hero.connectBtn}
                </button>
                <button onClick={downloadFile} className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition flex items-center gap-2">
                  <Download size={20} />
                  {t.hero.downloadBtn}
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                <Code2 size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.about.intro1} <span className="font-semibold text-slate-900 dark:text-white">{t.about.years}</span> {t.about.intro2}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.about.intro3}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <Rocket className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t.about.microservices}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t.about.microservicesDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <Zap className="text-yellow-600 dark:text-yellow-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t.about.interfaces}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t.about.interfacesDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <Users className="text-green-600 dark:text-green-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t.about.mvp}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{t.about.mvpDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">{t.experience.title}</h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.experience.role1}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{t.experience.company1}</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">{t.experience.date1}</span>
              </div>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement1}</span> {t.experience.achievement1b}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement2}</span> {t.experience.achievement2b}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement3}</span> {t.experience.achievement3b}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement4}</span> {t.experience.achievement4b}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">React</span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium">Microservices</span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.experience.role1}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{t.experience.company2}</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">{t.experience.date2}</span>
              </div>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement5}</span> {t.experience.achievement5b}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement6}</span> {t.experience.achievement6b}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                  <span><span className="font-semibold">{t.experience.achievement7}</span> {t.experience.achievement7b}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">Angular</span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">SQL Server</span>
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium">Apache Tomcat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">{t.skills.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
                {t.skills.frontend}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Angular', 'Redux', 'Tailwind', 'Vite', 'Ionic'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-lg text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-green-600 dark:text-green-400" size={24} />
                {t.skills.backend}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Spring Boot', 'Prisma', 'Kafka', 'RabbitMQ'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-lg text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="text-orange-600 dark:text-orange-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                {t.skills.database}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Git', 'Scrum'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-lg text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="text-slate-600 dark:text-slate-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {t.skills.languages}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-lg text-sm font-medium shadow-sm">{skill}</span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="text-pink-600 dark:text-pink-400" size={24} />
                {t.skills.soft}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[t.skills.teamwork, t.skills.communication, t.skills.proactive, t.skills.problem, t.skills.flexibility, t.skills.responsible, t.skills.cooperative, t.skills.agile].map(skill => (
                  <div key={skill} className="flex items-center justify-center bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-lg text-sm font-medium shadow-sm text-center">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">{t.education.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg className="text-blue-600 dark:text-blue-400" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.education.educationTitle}</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{t.education.degree}</h4>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{t.education.university}</p>
                <p className="text-slate-600 dark:text-slate-400">{t.education.graduated}</p>
                <p className="text-slate-700 dark:text-slate-300 mt-4 leading-relaxed">{t.education.description}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <svg className="text-green-600 dark:text-green-400" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.education.certifications}</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className={`border-l-4 border-${cert.color}-500 dark:border-${cert.color}-400 pl-4`}
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {cert.institution} • {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-12">{t.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://linkedin.com/in/angelgamcr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Linkedin size={20} />
              {t.contact.linkedin}
            </a>
            <a href="https://github.com/angelgamcr" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Github size={20} />
              {t.contact.github}
            </a>
            <button onClick={downloadFile} className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2">
              <Download size={20} />
              {t.contact.download}
            </button>
          </div>

          <div className="border-t border-slate-700 dark:border-slate-800 pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300 dark:text-slate-400">
              <a href="mailto:angelgamcr@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={20} />
                angelgamcr@gmail.com
              </a>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +506 8645 6671
              </span>
              <span className="hidden sm:block">•</span>
              <span>Costa Rica</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-sm">{t.contact.builtWith}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
