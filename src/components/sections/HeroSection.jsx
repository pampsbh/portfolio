import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LogoCarousel from '@/components/LogoCarousel';

const HeroSection = ({ openLink, linkedinUrl }) => {
  return (
    <section id="hero" className="section-padding min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Product Designer focused on launching <span className="gradient-text">successful MVPs</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From Belo Horizonte to the world, I apply design with focus on business, data and real impact.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={() => openLink(linkedinUrl)}
            size="lg"
            className="bg-[#00A9FF] hover:bg-[#0098e6] text-black px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00A9FF]/20"
          >
            See portfolio
          </Button>
        </motion.div>
      </div>
      <LogoCarousel />
    </section>
  );
};

export default HeroSection;