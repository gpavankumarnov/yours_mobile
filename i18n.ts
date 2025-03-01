import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next'

i18n
.use(Backend)

.use(LanguageDetector)

.use(initReactI18next)

.init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      caches: []
    }
  });