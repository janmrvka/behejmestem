import { getRequestConfig } from 'next-intl/server';

const locales = ['cs', 'en'];
const defaultLocale = 'cs';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
