import createMiddleware from 'next-intl/middleware';
// next-intl still uses middleware internally; Next.js 16 calls this file proxy.js
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
