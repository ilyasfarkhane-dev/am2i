'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card
            data-gsap="reveal-card"
            className="p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('email')}</h3>
            <p className="text-gray-600 text-sm">contact@am2i.org</p>
          </Card>

          <Card
            data-gsap="reveal-card"
            className="p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('phone')}</h3>
            <p className="text-gray-600 text-sm">+212 (0)XXX XXX XXX</p>
          </Card>

          <Card
            data-gsap="reveal-card"
            className="p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('location')}</h3>
            <p className="text-gray-600 text-sm">Casablanca, Morocco</p>
            <p className="text-gray-500 text-xs mt-2">{t('locationSub')}</p>
          </Card>
        </div>

        <Card
          data-gsap="reveal-card"
          className="p-8 sm:p-12 border-0 shadow-lg bg-white"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('sendMessageTitle')}</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('placeholderName')}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailAddress')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('placeholderEmail')}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('placeholderMessage')}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-[#022ea8] text-white"
            >
              {t('sendButton')}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
