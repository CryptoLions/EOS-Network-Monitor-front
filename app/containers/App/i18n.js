// Core
import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';

// Locales
import en from './locale/en';
import ru from './locale/ru';
import zh from './locale/zh';

export default i18n.use(LngDetector).init({
  resources: {
    en,
    ru,
    zh,
  },
  fallbackLng: 'en',

  ns: ['translations'],
  defaultNS: 'translations',

  debug: true,

  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
});
