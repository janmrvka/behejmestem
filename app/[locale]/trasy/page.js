'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, ChevronRight, ArrowRight } from 'lucide-react';

const routeData = [
  {
    key: 'historicCenter',
    km: 5.5,
    duration: 35,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80'
  },
  {
    key: 'borsky',
    km: 7,
    duration: 45,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80'
  },
  {
    key: 'divadlo',
    km: 8.5,
    duration: 55,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80'
  },
  {
    key: 'river',
    km: 11,
    duration: 70,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80'
  }
];

const difficultyColors = {
  easy: 'bg-green-100 text-green-700 border-green-200',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  hard: 'bg-red-100 text-red-700 border-red-200'
};

export default function TrasyPage() {
  const t = useTranslations('routes');

  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] pt-24 pb-16" aria-labelledby="trasy-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="trasy-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Routes list */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {routeData.map((route, i) => (
              <motion.article
                key={route.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 md:flex"
              >
                <div className="relative w-full md:w-80 h-56 md:h-auto shrink-0">
                  <Image
                    src={route.image}
                    alt={t(`items.${route.key}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[route.difficulty]}`}>
                        {t(`difficulty.${route.difficulty}`)}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-[#F97316]" /> {route.km} {t('km')}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-[#F97316]" /> ~{route.duration} {t('duration')}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {t(`items.${route.key}.name`)}
                    </h2>
                    <p className="text-gray-500 mb-5 leading-relaxed">
                      {t(`items.${route.key}.description`)}
                    </p>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {[0, 1, 2, 3].map((idx) => {
                        const highlights = t.raw ? null : null;
                        return (
                          <span key={idx} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                            <ChevronRight className="w-3 h-3 text-[#F97316]" />
                            {t(`items.${route.key}.highlights.${idx}`)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      {t('bookRoute')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
