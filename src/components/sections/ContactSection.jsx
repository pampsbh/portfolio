import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = ({ openLink, handleEmail, linkedinUrl }) => {
  return (
    <section id="contact" className="section-padding bg-[#141414]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="section-title">Let’s talk?</h2>
          <p className="section-subtitle mb-10">
            Available for new opportunities, ideas, or collaborations.
          </p>
          
          <Button 
            onClick={() => openLink(linkedinUrl)}
            size="lg"
            className="bg-[#00A9FF] hover:bg-[#0098e6] text-black px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00A9FF]/20"
          >
            <Linkedin className="w-6 h-6 mr-3" />
            Message on Linkedin
          </Button>

          <div className="flex justify-center space-x-6 mt-12">
            <button 
              onClick={() => openLink(linkedinUrl)}
              className="p-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-7 h-7" />
            </button>
            <button 
              onClick={handleEmail}
              className="p-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-7 h-7" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;