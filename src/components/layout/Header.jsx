import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ navItems, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E0E]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="text-2xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            Igor Vilar
          </motion.div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-[#141414] border-t border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-6 py-6 space-y-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="block w-full text-left text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;