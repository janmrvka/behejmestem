'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 bg-[#111827]" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">{t('subtitle')}</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold text-lg rounded-xl hover:bg-[#EA580C] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
          >
            {t('button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
