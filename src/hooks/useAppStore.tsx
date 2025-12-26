import { createContext, useContext, useState } from "react";
import { translations } from "@/translations";
import { Language, Theme } from "@/types/types";

type AppContextType = {
  t: any;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
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
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];
  return (
    <AppContext.Provider
      value={{
        t,
        theme,
        language,
        setTheme,
        setLanguage,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
