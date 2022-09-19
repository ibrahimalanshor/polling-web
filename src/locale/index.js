import { createI18n } from 'vue-i18n';
import axios from 'axios';

const i18n = createI18n({
  legacy: false,
});

const supportedLocales = ['en'];

let locale = window.navigator.language;

if (!supportedLocales.includes(locale)) {
  locale = 'en';
}

if (!i18n.global.availableLocales.includes(locale)) {
  const messages = await import(`./messages/${locale}.json`);

  i18n.global.setLocaleMessage(locale, messages.default);
}

i18n.global.locale.value = locale;

axios.defaults.headers.common['Accept-Language'] = locale;

export default i18n;
