import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = ({ highlights }) => {
  return (
    <section id="about" className="section-padding bg-[#141414]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="section-title text-left mb-8">Who I am</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m a Product Designer with a background in Computer Science and two MBAs. I focus on digital products backed by research, data, and measurable outcomes. In the last 2 years I have worked continuously on a product in the financial area that buys judicial assets. The product alone generated +5 million in revenue and the company more than 500 million.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex items-center gap-3 p-3 bg-[#1F1F1F] border border-gray-800 rounded-lg"
              >
                <highlight.icon className="w-5 h-5 text-[#00A9FF]" />
                <span className="font-medium text-gray-200 text-sm">{highlight.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/c75dfad62ce79cae85589129b13a9aec.jpg" alt="Igor Vilar presenting" className="rounded-xl shadow-2xl shadow-black/50 w-full h-full object-cover aspect-[4/5]" />
          <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/d61a3cb8e66aeb3ca47501f164216954.jpg" alt="Igor Vilar speaking at an event" className="rounded-xl shadow-2xl shadow-black/50 w-full h-full object-cover aspect-[4/5] mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;