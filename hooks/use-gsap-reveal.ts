'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Hero title and subtitle fade-up stagger
      const heroTitle = document.querySelector('[data-gsap="hero-title"]');
      const heroSubtitle = document.querySelector('[data-gsap="hero-subtitle"]');

      if (heroTitle && heroSubtitle) {
        gsap.set([heroTitle, heroSubtitle], { opacity: 0, y: 30 });
        gsap.to(heroTitle, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
        gsap.to(heroSubtitle, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.06,
          ease: 'power2.out',
        });
      }

      // Background floating nodes animation (subtle)
      const bgNodes = document.querySelectorAll('[data-gsap="floating-node"]');
      bgNodes.forEach((node, index) => {
        gsap.to(node, {
          y: 20,
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Section reveals with ScrollTrigger
      const sections = document.querySelectorAll('[data-gsap="reveal-section"]');
      sections.forEach((section) => {
        const cards = section.querySelectorAll('[data-gsap="reveal-card"]');
        
        gsap.set(cards, { opacity: 0, y: 30, scale: 0.98 });
        
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            markers: false,
          },
        });
      });

      // Mission bullets stagger
      const bullets = document.querySelectorAll('[data-gsap="bullet"]');
      gsap.set(bullets, { opacity: 0, x: -20 });
      gsap.to(bullets, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: document.querySelector('[data-gsap="mission-list"]'),
          start: 'top 75%',
          end: 'top 50%',
          scrub: false,
        },
      });

      // Activities grid stagger
      const activityItems = document.querySelectorAll('[data-gsap="activity-item"]');
      gsap.set(activityItems, { opacity: 0, scale: 0.9 });
      gsap.to(activityItems, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out',
        scrollTrigger: {
          trigger: document.querySelector('[data-gsap="activities-grid"]'),
          start: 'top 75%',
          end: 'top 50%',
          scrub: false,
        },
      });

      // Navbar scroll effect
      let lastScrollY = 0;
      const navbar = document.querySelector('[data-gsap="navbar"]');
      const navbarHeight = navbar?.clientHeight || 0;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
          gsap.to(navbar, {
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
          });
        } else {
          gsap.to(navbar, {
            backdropFilter: 'blur(0px)',
            boxShadow: 'none',
            duration: 0.3,
          });
        }

        lastScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return containerRef;
};
