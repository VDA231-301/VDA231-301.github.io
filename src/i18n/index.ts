import { ui as en } from './en';
import { ui as de } from './de';

const translations = { en, de } as const;

export type Locale = keyof typeof translations;

export function getUi(locale: Locale) {
  return translations[locale] ?? translations.en;
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'de') return 'de';
  return 'en';
}
