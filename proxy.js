import { NextResponse } from 'next/server';

const locales = ['cs', 'en'];
const defaultLocale = 'cs';

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (acceptLanguage.toLowerCase().includes('cs')) return 'cs';
  if (acceptLanguage.toLowerCase().includes('en')) return 'en';
  return defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
