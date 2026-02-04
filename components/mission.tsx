'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

export function Mission() {
  const t = useTranslations('mission');
  const goals = t.raw('goals') as string[];
  const principles = t.raw('principles') as string[];

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <header className="text-center mb-20">
          <Badge
            className="mb-4 bg-[#022ea8] text-white hover:bg-[#022ea8] border-0"
            variant="secondary"
          >
            {t('badge')}
          </Badge>
          <h2
            id="mission-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            {t('heading')}
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('subheading')}
          </p>
        </header>

        {/* Goals grid */}
        <div
          data-gsap="reveal-section"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16"
          role="list"
        >
          {goals.map((goal, index) => (
            <Card
              key={index}
              data-gsap="reveal-card"
              role="listitem"
              className="group border border-border/60 bg-card shadow-sm hover:shadow-md hover:border-[#022ea8]/20 transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-2 pt-6 px-6">
                <span
                  className="inline-flex size-8 items-center justify-center rounded-lg bg-[#022ea8]/10 text-[#022ea8] font-bold text-sm tabular-nums"
                  aria-hidden
                >
                  {index + 1}
                </span>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-foreground/90 leading-relaxed">{goal}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key principles block */}
        <article
          data-gsap="reveal-section"
          className="relative rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-[#022ea8]" aria-hidden />
          <header className="mb-6 pl-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t('principlesHeading')}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              {t('principlesSubheading')}
            </p>
          </header>
          <ul data-gsap="mission-list" className="space-y-4 pl-4" role="list">
            {principles.map((principle, index) => (
              <li
                key={index}
                data-gsap="bullet"
                className="flex gap-3 items-start"
              >
                <span
                  className="mt-1.5 size-2 rounded-full bg-[#022ea8] flex-shrink-0"
                  aria-hidden
                />
                <span className="text-foreground/90 leading-relaxed">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
