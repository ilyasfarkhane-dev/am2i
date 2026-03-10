'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const officeTranslations: Record<string, string> = {
  officeMembers: 'Office Members',
  officeMembersSub: 'Each with their role.',
  office1: 'President: Ben El Ahmar El Habib',
  office2: 'Vice President: Sanaa El Filali',
  office3: 'General Secretary: Fawzia Benabbo',
  office4: 'Deputy General Secretary: Mohamed Ait Daoud',
  office5: 'Treasurer: Omar Zahour',
  office6: 'Advisor: Sara Quahabi',
  office7: 'Advisor: Mohcine Ben El Tayeb',
};
const t = (key: string) => officeTranslations[key] ?? key;

const keyMissions = [
  'Support researchers, PhD students, and innovators in AI and data science',
  'Encourage partnerships between Moroccan and international institutions',
  'Promote responsible AI, scientific integrity, and reproducibility',
  'Contribute to training and awareness through seminars and events',
  'Provide a sustainable platform for AI innovation and research dissemination',
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#022ea8] text-white hover:bg-[#022ea8]">
            Who We Are
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About AM2I
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The Moroccan Association for Artificial Intelligence and Innovation (AM2I) is a scientific association committed to building a strong AI ecosystem through research promotion, knowledge transfer, and international collaboration.
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
                Supporting Global Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AM2I actively supports initiatives such as IANLP 2026, contributing to the development of international scientific exchange in AI and Natural Language Processing.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">
                  Key Initiative
                </p>
                <p className="text-gray-900 font-semibold">
                  IANLP 2026 — International Conference on AI & NLP
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div data-gsap="reveal-section" className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
          <p className="text-gray-700 leading-relaxed">
            We believe that AI innovation should be accessible, ethical, and beneficial to society. AM2I creates spaces where researchers, academics, students, and professionals can collaborate, share knowledge, and develop solutions that address real-world challenges while maintaining the highest standards of scientific integrity.
          </p>
        </div>

        <div
          data-gsap="reveal-section"
          className="mt-16 p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {t('officeMembers')}
          </h3>
          <p className="text-muted-foreground mb-6">{t('officeMembersSub')}</p>
          <ul className="space-y-2 text-foreground">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{t(`office${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
