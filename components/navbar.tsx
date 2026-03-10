'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Link as LocaleLink } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';

const navLinks = [
  { key: 'overview' as const, href: '#overview' },
  { key: 'mission', href: '#mission' },
  { key: 'about', href: '#about' },
  { key: 'activities', href: '#activities' },
  { key: 'membership', href: '#membership' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <nav
      data-gsap="navbar"
      dir="ltr"
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 min-h-20">
          {/* Logo */}
          <LocaleLink href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo-am2i.png"
              alt="AM2I"
              className="h-[110px] w-auto object-contain"
            />
          </LocaleLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {/* CTA Button */}
            <Button className="hidden sm:inline-flex bg-[#022ea8] text-white">
              {t('joinAm2i')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Button className="w-full mt-2 bg-[#022ea8] text-white">
              {t('joinAm2i')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
