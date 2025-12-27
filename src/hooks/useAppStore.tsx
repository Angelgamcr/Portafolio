import { createContext, useContext, useEffect, useState } from "react";
import { Language, Theme } from "@/types/types";
import es from "@/libs/i18n/es.json";
import en from "@/libs/i18n/en.json";

const translations: Record<string, any> = {
  es,
  en,
  // fr,
};

type AppContextType = {
  t: any;
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  language: Language;
  changeLanguage: (lang: Language) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isMobile: boolean) => void;
};

// Context: Es usado para poder enviar las variables a los componentes hijos
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Funcion para obtener el Context y obtener las variables usadas en el Provider
export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppStore must be used within a AppProvider");
  }
  return context;
};
// Provider: Componente usa, contiene y envia las variables globales por medio del Context.
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  /**************** theme ******************/
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );
  /**************** i18n ******************/
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("locale") as Language) || "en"
  );

  // Cuando renderiza, los obtiene localmente
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    const savedLanguage = (localStorage.getItem("locale") as Language) || "en";
    changeTheme(savedTheme);
    changeLanguage(savedLanguage);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  /**************** theme ******************/
  // Cambia el tema de la app
  function changeTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
  /**************** theme ******************/
  /**************** i18n ******************/
  // Cambia el idioma de la app
  function changeLanguage(lang: Language) {
    localStorage.setItem("locale", lang);
    setLanguage(lang);
  }
  // Obtiene traduccion por clave
  function t(key: string): string {
    const dictionary = translations[language];
    if (!dictionary) {
      console.warn(`Language "${language}" not found`);
      return key;
    }
    // Si no tiene puntos → acceso directo
    if (!key.includes(".")) {
      return dictionary[key] ?? key;
    }
    // Acceso profundo por puntos
    const value = key.split(".").reduce((acc, part) => acc?.[part], dictionary);
    return typeof value === "string" ? value : key;
  }
  /**************** i18n ******************/

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
        mobileMenuOpen,
        setMobileMenuOpen,
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
