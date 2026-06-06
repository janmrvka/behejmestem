'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const routeData = [
  {
    key: 'historicCenter',
    km: 5.5,
    duration: 35,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=75'
  },
  {
    key: 'borsky',
    km: 7,
    duration: 45,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=75'
  },
  {
    key: 'divadlo',
    km: 8.5,
    duration: 55,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=75'
  },
  {
    key: 'river',
    km: 11,
    duration: 70,
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&q=75'
  }
];

const difficultyColors = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700'
};

export default function RoutesPreview() {
  const t = useTranslations('routes');

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="routes-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 id="routes-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-500">{t('subtitle')}</p>
          </div>
          <Link
            href="/trasy"
            className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all duration-200 shrink-0"
          >
            {t('allRoutes')} <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {routeData.map((route, i) => (
            <motion.article
              key={route.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={route.image}
                  alt={t(`items.${route.key}.name`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColors[route.difficulty]}`}>
                  {t(`difficulty.${route.difficulty}`)}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#F97316] transition-colors">
                  {t(`items.${route.key}.name`)}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {t(`items.${route.key}.description`)}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    {route.km} {t('km')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                    ~{route.duration} {t('duration')}
                  </span>
                </div>
                <Link
                  href="/kontakt"
                  className="flex items-center justify-center gap-1 w-full py-2.5 text-sm font-semibold text-[#F97316] border border-[#F97316]/30 rounded-xl hover:bg-[#F97316] hover:text-white transition-all duration-200 group/btn"
                >
                  {t('bookRoute')}
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
