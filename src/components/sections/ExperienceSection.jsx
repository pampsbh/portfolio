import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="section-padding bg-[#141414]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">My Journey</h2>
        </motion.div>

        <div className="space-y-8 relative border-l-2 border-gray-700 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="pl-10 relative"
            >
              <div className="absolute -left-2.5 top-1 w-5 h-5 bg-[#00A9FF] rounded-full border-4 border-[#141414]"></div>
              <p className="text-sm text-gray-400 mb-1">{exp.period}</p>
              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
              <p className="text-lg text-[#00A9FF] font-semibold mb-3">{exp.role}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;