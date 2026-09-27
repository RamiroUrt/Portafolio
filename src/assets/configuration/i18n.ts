import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof document !== 'undefined') {
  const syncDocumentLang = (lng: string) => {
    document.documentElement.lang = lng;
  };

  i18n.on('languageChanged', syncDocumentLang);
  syncDocumentLang(i18n.resolvedLanguage ?? i18n.language);
}

export default i18n;

