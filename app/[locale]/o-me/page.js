'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Map } from 'lucide-react';

export default function OMePage() {
  const t = useTranslations('about');

  const stats = [
    { icon: Award, value: '15+', label: t('experience') },
    { icon: Users, value: '200+', label: t('clients') },
    { icon: Map, value: '8', label: t('routes') }
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('title')}</h1>
            <p className="text-xl text-gray-400">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&q=80"
                  alt="Pavel Hubáček — průvodce běháním po Plzni"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-5 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium opacity-90">let zkušeností</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pavel Hubáček</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>{t('bio1')}</p>
                <p>{t('bio2')}</p>
                <p>{t('bio3')}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <Icon className="w-5 h-5 text-[#F97316] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Rezervovat běh
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
