'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { UserCheck, Navigation, Heart, Calendar } from 'lucide-react';

const icons = [UserCheck, Navigation, Heart, Calendar];
const keys = ['personal', 'city', 'health', 'flexible'];

export default function FeaturesSection() {
  const t = useTranslations('features');

  return (
    <section className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#F97316]/30 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-50 group-hover:bg-[#F97316] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t(`items.${key}.title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`items.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
