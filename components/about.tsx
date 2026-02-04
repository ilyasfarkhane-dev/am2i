'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');
  const keyMissions = t.raw('keyMissions') as string[];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#022ea8] text-white hover:bg-[#022ea8]">
            {t('badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('heading')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('intro')}
            </p>

            <div className="space-y-3">
              {keyMissions.map((mission, index) => (
                <div key={index} data-gsap="bullet" className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{mission}</p>
                </div>
              ))}
            </div>
          </div>

          <Card
            data-gsap="reveal-card"
            className="p-8 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {t('cardTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('cardText')}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">
                  {t('initiativeLabel')}
                </p>
                <p className="text-gray-900 font-semibold">
                  {t('initiativeName')}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div data-gsap="reveal-section" className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('commitmentTitle')}</h3>
          <p className="text-gray-700 leading-relaxed">
            {t('commitmentText')}
          </p>
        </div>
      </div>
    </section>
  );
}
