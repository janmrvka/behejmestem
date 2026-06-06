'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Clock } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');

  const stats = [
    { icon: MapPin, value: '8+', label: t('stats.routes') },
    { icon: Users, value: '200+', label: t('stats.clients') },
    { icon: Clock, value: '10+', label: t('stats.years') }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Úvodní sekce">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1600&q=80"
          alt="Běžec v městském prostředí"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/70 to-gray-900/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4" />
            {t('badge')}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {t('title')}{' '}
            <span className="text-[#F97316]">{t('titleHighlight')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/trasy"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              {t('ctaSecondary')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316]/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-white/60">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
