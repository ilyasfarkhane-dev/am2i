'use client';

import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-8 bg-gray-800" />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t('organizedBy')}</h3>
            <p className="text-gray-400 mb-2">{t('orgName')}</p>
            <p className="text-gray-500 text-sm">
              {t('address')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('proceedings')}</h3>
            <p className="text-gray-400">
              {t('proceedingsText')}
            </p>
          </div>
        </div>

        <Separator className="mb-8 bg-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          <p>{t('copyright')}</p>
          <p>{t('tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
