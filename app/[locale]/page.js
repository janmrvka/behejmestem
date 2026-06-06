import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import RoutesPreview from '@/components/sections/RoutesPreview';
import CtaSection from '@/components/sections/CtaSection';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale,
      type: 'website'
    }
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RoutesPreview />
      <CtaSection />
    </>
  );
}
