import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['cs', 'en'],
  defaultLocale: 'cs',
  pathnames: {
    '/': '/',
    '/trasy': {
      cs: '/trasy',
      en: '/routes'
    },
    '/o-me': {
      cs: '/o-me',
      en: '/about'
    },
    '/kontakt': {
      cs: '/kontakt',
      en: '/contact'
    }
  }
});
