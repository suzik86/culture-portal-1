import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ru from './ru.json';
import by from './by.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    debug: true,
    resources: { en, ru, by },
  });


export default i18n;
