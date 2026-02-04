'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Membership() {
  const t = useTranslations('membership');
  const benefits = t.raw('benefits') as string[];

  return (
    <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#022ea8] text-white hover:bg-[#022ea8]">
            {t('badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('heading')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('subheading')}
          </p>
        </div>

        <Card
          data-gsap="reveal-card"
          className="p-8 sm:p-12 border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-cyan-50"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('benefitsTitle')}</h3>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            <Button
              disabled
              className="bg-gray-400 cursor-not-allowed text-white"
              size="lg"
            >
              {t('cta')}
            </Button>
            <p className="text-sm text-gray-600 sm:flex items-center">
              {t('ctaNote')}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
