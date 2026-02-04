'use client';

import { Badge } from '@/components/ui/badge';
import {
  Brain,
  BookOpen,
  Users,
  Network,
  Share2,
  Lightbulb,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const iconMap = {
  Brain,
  BookOpen,
  Users,
  Network,
  Share2,
  Lightbulb,
} as const;

const iconKeys = ['Brain', 'BookOpen', 'Users', 'Network', 'Share2', 'Lightbulb'] as const;

export function Activities() {
  const t = useTranslations('activities');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#022ea8] text-white hover:bg-[#022ea8]">
            {t('badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('heading')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div
          data-gsap="activities-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((activity, index) => {
            const Icon = iconMap[iconKeys[index]];
            return (
              <div
                key={index}
                data-gsap="activity-item"
                className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#022ea8] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
