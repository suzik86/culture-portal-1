import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next);

const i18nInit = (en, ru, by) => {
  i18n.init({
    fallbackLng: 'ru',
    lng: 'ru',
    debug: true,
    resources: { en, ru, by },
  });
};

export default i18nInit;
