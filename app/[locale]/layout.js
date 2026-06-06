import { NextIntlClientProvider, hasLocale } from 'next-intl';

export const runtime = 'nodejs';
import { notFound } from 'next/navigation';
import { Bebas_Neue, Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const bebasNeue = Bebas_Neue({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: '400'
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext']
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
