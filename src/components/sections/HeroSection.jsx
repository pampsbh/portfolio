import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const HeroSection = ({ openLink, linkedinUrl }) => {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-8 lg:px-16 pt-32"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">

        {/* Photo — desktop right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex lg:col-start-2 lg:row-start-1 lg:row-span-4 items-start pt-2"
        >
          <div className="relative">
            <div className="w-72 h-80 xl:w-80 xl:h-96 rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/photos/igor-headshot.jpg"
                alt="Igor Vilar"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        <div>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-secondary">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-[8.5rem] font-medium leading-[0.95] tracking-tightest text-balance"
        >
          <span className="gradient-text">Designing</span>
          <br />
          <span className="text-ink-primary">products that</span>
          <br />
          <span className="text-ink-primary inline-flex items-baseline gap-3 sm:gap-5">
            <span>actually</span>
            <span className="relative">
              <span className="relative z-10 text-accent italic font-light">ship.</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-accent/15 -z-0" />
            </span>
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 max-w-xl text-base sm:text-lg text-ink-secondary leading-relaxed"
        >
          Product Designer based in Belo Horizonte, working at the intersection
          of <span className="text-ink-primary">UI craft</span>, business and data
          to launch MVPs that move metrics — not just decks.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 bg-accent text-surface hover:bg-accent/90 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            View selected work
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => openLink(linkedinUrl)}
            className="group inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/[0.03] px-6 py-3.5 rounded-full text-sm font-medium text-ink-primary transition-all duration-300"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl"
        >
          {[
            { value: 'R$5M+', label: 'Revenue from MVPs' },
            { value: '8+', label: 'Years in product' },
            { value: '20+', label: 'Products shipped' },
            { value: '∞', label: 'Components in Figma' },
          ].map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-4">
              <div className="text-2xl sm:text-3xl font-medium text-ink-primary tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] text-ink-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted"
      >
        <span>Scroll</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
