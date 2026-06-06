import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const c = useTranslations('contact');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg">
                Běhej<span className="text-[#F97316]">Městem</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Stránky</h3>
            <nav className="flex flex-col gap-2" aria-label="Patička navigace">
              {['/', '/trasy', '/o-me', '/kontakt'].map((href, i) => {
                const keys = ['home', 'routes', 'about', 'contact'];
                return (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-300 hover:text-[#F97316] transition-colors text-sm"
                  >
                    {t(`links.${keys[i]}`)}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <a href={`tel:${c('info.phone')}`} className="flex items-center gap-2 text-gray-300 hover:text-[#F97316] transition-colors text-sm group">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                {c('info.phone')}
              </a>
              <a href={`mailto:${c('info.email')}`} className="flex items-center gap-2 text-gray-300 hover:text-[#F97316] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                {c('info.email')}
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0" />
                {c('info.location')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BěhejMěstem. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
