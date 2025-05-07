import { createContext, useContext, useState, useMemo } from 'react';
import translations from '../assets/constants/I18n';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');
  
  const t = useMemo(() => {
    return (key, variables = {}) => {
      const keys = key.split('.');
      let translation = translations[locale];
      
      // Buscar traducción anidada
      for (const k of keys) {
        translation = translation?.[k];
        if (translation === undefined) return key; // Fallback al key
      }

      // Reemplazar variables si es string
      if (typeof translation === 'string') {
        return Object.entries(variables).reduce(
          (acc, [varKey, varValue]) => 
            acc.replace(new RegExp(`\\{${varKey}\\}`, 'g'), varValue),
          translation
        );
      }

      return translation;
    };
  }, [locale]);

  const value = { locale, setLocale, t };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);