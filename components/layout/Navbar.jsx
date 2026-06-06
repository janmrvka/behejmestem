'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: t('home') },
    { href: '/trasy', label: t('routes') },
    { href: '/o-me', label: t('about') },
    { href: '/kontakt', label: t('contact') }
  ];

  const otherLocale = locale === 'cs' ? 'en' : 'cs';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hlavní navigace">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className={`text-xl tracking-widest transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`} style={{fontFamily: 'var(--font-heading)'}}>
              BĚHEJ<span className="text-[#F97316]">MĚSTEM</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-[#F97316] ${
                  scrolled ? 'text-gray-700 hover:bg-orange-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${pathname === link.href ? 'text-[#F97316]' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className={`ml-2 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all duration-200 ${
                scrolled
                  ? 'border-gray-300 text-gray-600 hover:border-[#F97316] hover:text-[#F97316]'
                  : 'border-white/40 text-white/80 hover:border-white hover:text-white'
              }`}
            >
              {otherLocale}
            </Link>

            {/* CTA */}
            <Link
              href="/kontakt"
              className="ml-2 px-4 py-2 bg-[#F97316] text-white text-sm font-semibold rounded-lg hover:bg-[#EA580C] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {t('bookRun')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Otevřít menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white rounded-xl shadow-lg mb-2 border border-gray-100"
            >
              <div className="p-3 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-orange-50 hover:text-[#F97316] ${
                      pathname === link.href ? 'text-[#F97316] bg-orange-50' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
                  <Link
                    href={pathname}
                    locale={otherLocale}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border border-gray-300 text-gray-600 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                  >
                    {otherLocale}
                  </Link>
                  <Link
                    href="/kontakt"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2.5 bg-[#F97316] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#EA580C] transition-colors"
                  >
                    {t('bookRun')}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
