import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LenguageDetector from 'i18next-browser-languagedetector';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next
  .use(initReactI18next)
  .use(LenguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    defaultNS: 'global',
    ns: 'global',
    resources: {
      es: {
        global: global_es
      },
      en: {
        global: global_en
      }
    }
  });

export default i18next;
