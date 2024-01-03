import 'intl-pluralrules';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { pl } from './pl';

const resources = {
  pl,
  en,
};

i18n.use(initReactI18next).init({
  load: 'languageOnly',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  }
});

export default i18n;
