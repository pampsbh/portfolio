import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import LinkedinSection from '@/components/sections/LinkedinSection';
import ContactSection from '@/components/sections/ContactSection';

import { 
  navItems,
  projects,
  experiences,
  highlights,
  linkedinPosts,
  linkedinUrl
} from '@/data/portfolioData';

function App() {
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
    window.location.href = 'mailto:igorvilaralmeida@gmail.com';
  };

  return (
    <>
      <Helmet>
        <title>Igor Vilar - Product Designer</title>
        <meta name="description" content="Product Designer focused on launching successful MVPs. Explore my work in UX/UI design, product metrics, and team leadership." />
      </Helmet>

      <div className="min-h-screen bg-[#0E0E0E] text-[#F2F2F2]">
        <Header navItems={navItems} scrollToSection={scrollToSection} />
        <main>
          <HeroSection openLink={openLink} linkedinUrl={linkedinUrl} />
          <AboutSection highlights={highlights} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
          <LinkedinSection posts={linkedinPosts} openLink={openLink} />
          <ContactSection openLink={openLink} handleEmail={handleEmail} linkedinUrl={linkedinUrl} />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;