'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Mission } from '@/components/mission';
import { About } from '@/components/about';
import { Activities } from '@/components/activities';
import { Membership } from '@/components/membership';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { useGsapReveal } from '@/hooks/use-gsap-reveal';

export default function Page() {
  const containerRef = useGsapReveal();

  return (
    <div ref={containerRef} className="w-full">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Mission />
        <About />
        <Activities />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
