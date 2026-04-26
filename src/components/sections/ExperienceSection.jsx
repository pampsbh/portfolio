import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16"
        >
          <div className="section-eyebrow mb-6">
            <span>03 — Experience</span>
          </div>
          <h2 className="section-title max-w-2xl text-balance">
            Eight years across product,
            <br />
            <span className="text-ink-secondary">research and leadership.</span>
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group grid grid-cols-12 gap-6 py-8 border-b border-white/10 hover:bg-white/[0.015] transition-colors px-2"
            >
              <div className="col-span-12 sm:col-span-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted pt-1">
                {exp.period}
              </div>
              <div className="col-span-12 sm:col-span-9">
                <div className="flex items-baseline gap-3 flex-wrap mb-2">
                  <h3 className="text-2xl sm:text-3xl font-medium text-ink-primary tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="text-ink-muted">·</span>
                  <span className="text-sm text-accent font-mono">{exp.role}</span>
                </div>
                <p className="text-base text-ink-secondary leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
