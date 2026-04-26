import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LinkedinSection = ({ posts, openLink }) => {
  return (
    <section id="linkedin" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Keep up with my work on Linkedin</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#141414] border border-gray-800 rounded-xl flex flex-col hover:border-[#00A9FF] transition-colors duration-300"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{post.description}</p>
                <button onClick={() => openLink(post.link)} className="text-[#00A9FF] font-semibold mt-auto flex items-center group">
                  Read on Linkedin <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Save 5 minutes to watch this Webinar about product accessibility</h3>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vwr9buH1HM0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedinSection;