'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200 to-cyan-100 rounded-full blur-3xl opacity-20"
          data-gsap="floating-node"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200 to-indigo-100 rounded-full blur-3xl opacity-20"
          data-gsap="floating-node"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          data-gsap="hero-title"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
        >
          {t('title')}
        </h1>

        <p
          data-gsap="hero-subtitle"
          className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 text-balance"
        >
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => handleScroll('mission')}
            size="lg"
            className="bg-[#022ea8] text-white"
          >
            {t('exploreMission')}
          </Button>
          <Button
            onClick={() => handleScroll('contact')}
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-900 hover:bg-gray-50"
          >
            {t('getInTouch')}
          </Button>
        </div>
      </div>
    </section>
  );
}
