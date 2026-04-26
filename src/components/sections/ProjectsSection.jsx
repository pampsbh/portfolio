import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = ({ projects }) => {
  const { toast } = useToast();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className={`lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-lg text-gray-400 mb-6">{project.description}</p>
                <Button 
                  variant="link" 
                  className="text-[#00A9FF] hover:text-white p-0 text-lg"
                  onClick={() => toast({
                    title: "Let's Talk!",
                    description: "Let's schedule a meeting to talk about this project. Contact me on Linkedin, I'm looking forward to it.",
                  })}
                >
                  Learn More <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className={`lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800">
                  <img 
                    className="w-full h-full object-cover aspect-video"
                    alt={`${project.title} project showcase`}
                   src={project.image} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;