import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ClientsSection from '@/components/sections/ClientsSection';
import LinkedinSection from '@/components/sections/LinkedinSection';
import ContactSection from '@/components/sections/ContactSection';
import {
  navItems,
  projects,
  experiences,
  highlights,
  linkedinPosts,
  linkedinUrl,
} from '@/data/portfolioData';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:igorvilaralmeida@gmail.com?subject=' + encodeURIComponent('Contact via igorvilar.com.br');
  };

  return (
    <>
      <Helmet>
        <title>Igor Vilar — Senior Product Designer</title>
        <meta
          name="description"
          content="Senior Product Designer who ships code. Four years designing fintech products at PJUS: a 100% digital precatório platform (R$5M+ in 8 months), the Estrada design system and the Opera operations platform, with AI features built around a visible human-in-the-loop."
        />
        <meta name="theme-color" content="#0A0A0A" />
      </Helmet>

      <ScrollProgress />

      <div className="min-h-screen bg-surface text-ink-primary">
        <Header navItems={navItems} scrollToSection={scrollToSection} />
        <main>
          <HeroSection openLink={openLink} linkedinUrl={linkedinUrl} />
          <ClientsSection />
          <AboutSection highlights={highlights} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
          <LinkedinSection posts={linkedinPosts} openLink={openLink} />
          <ContactSection openLink={openLink} handleEmail={handleEmail} linkedinUrl={linkedinUrl} />
        </main>
        <Footer openLink={openLink} handleEmail={handleEmail} linkedinUrl={linkedinUrl} />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;
