import { useEffect, useState } from 'react';
import { useAppStore } from './useAppStore';

const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'education', 'contact'];

export const useActiveSection = () => {
    const {setMobileMenuOpen} = useAppStore();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px' } // Detecta la sección cuando está en el centro de la pantalla
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Buena práctica: limpia el observer al desmontar
  }, [SECTION_IDS]);


    /**************** ScrollSection ******************/
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
    /**************** ScrollSection ******************/
  return {
    activeId,
    scrollToSection,
    SECTION_IDS
  };
};