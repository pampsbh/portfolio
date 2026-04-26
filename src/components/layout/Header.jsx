import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ navItems, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:pt-6 sm:px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-5xl rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#0A0A0A]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'border-white/5 bg-[#0A0A0A]/40 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-5 sm:px-6 h-14">
          <button
            onClick={() => handleScroll('hero')}
            className="flex items-center gap-2 group"
          >
            <span className="font-mono text-sm font-medium text-ink-primary">iv</span>
            <span className="hidden sm:inline-block text-sm text-ink-secondary group-hover:text-ink-primary transition-colors">
              Igor Vilar
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="px-3 py-1.5 text-sm text-ink-secondary hover:text-ink-primary transition-colors rounded-full"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-ink-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Available</span>
          </div>

          <button
            className="md:hidden p-2 text-ink-secondary hover:text-ink-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="px-5 py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2.5 text-sm text-ink-secondary hover:text-ink-primary hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <div className="px-3 pt-3 flex items-center gap-2 font-mono text-xs text-ink-secondary">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                  Available for work
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
