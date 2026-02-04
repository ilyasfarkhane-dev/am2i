'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const t = useTranslations('locale');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="bg-[#022ea8] text-white hover:bg-[#022ea8]/90" aria-label="Switch language">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#022ea8]/5 border-[#022ea8]/20">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={locale === loc ? 'bg-[#022ea8] text-white focus:bg-[#022ea8] focus:text-white' : 'focus:bg-[#022ea8]/15 focus:text-[#022ea8]'}
          >
            {loc === 'en' ? t('en') : loc === 'fr' ? t('fr') : t('ar')}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
