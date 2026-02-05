'use client';

import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Resume from '@/components/resume';
import Certificates from '@/components/certificates';
import Achievements from '@/components/achievements';
import Contact from '@/components/contact';
import ScrollReveal from '@/components/scroll-reveal';

export default function Home() {
  return (
    <main className="h-screen bg-background text-foreground overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-pt-20">
      <Navigation />
      <div className="snap-start"><Hero /></div>
      <ScrollReveal className="snap-start"><About /></ScrollReveal>
      <ScrollReveal className="snap-start"><Skills /></ScrollReveal>
      <ScrollReveal className="snap-start"><Projects /></ScrollReveal>
      <ScrollReveal className="snap-start"><Resume /></ScrollReveal>
      <ScrollReveal className="snap-start"><Certificates /></ScrollReveal>
      <ScrollReveal className="snap-start"><Achievements /></ScrollReveal>
      <ScrollReveal className="snap-start"><Contact /></ScrollReveal>
    </main>
  );
}
