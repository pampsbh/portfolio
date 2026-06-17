import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ highlights }) => {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16"
        >
          <div className="section-eyebrow mb-6">
            <span>01 — About</span>
          </div>
          <h2 className="section-title max-w-3xl text-balance">
            Computer Science background.
            <br />
            <span className="text-ink-secondary">Designer by craft.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-ink-secondary leading-relaxed">
              I&apos;m a Product Designer with a background in Computer Science and two MBAs.
              My work sits where <span className="text-ink-primary">research, data and UI</span> overlap —
              I treat interfaces as products, not screens.
            </p>
            <p className="text-lg text-ink-secondary leading-relaxed">
              For the last 2 years I&apos;ve been leading design on a fintech product that buys
              judicial assets. The product alone generated{' '}
              <span className="text-ink-primary">+R$5M in revenue</span>, and the company crossed
              R$500M.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden mt-10">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="group flex items-center gap-3 p-4 bg-surface hover:bg-elevated transition-colors"
                >
                  <highlight.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-secondary group-hover:text-ink-primary transition-colors">
                    {highlight.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 flex items-start justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group w-full max-w-sm">
              <img
                src="/photos/igor-presenting.jpg"
                alt="Igor Vilar presenting at an event"
                className="w-full h-full object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
