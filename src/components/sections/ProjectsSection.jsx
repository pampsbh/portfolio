import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = ({ projects }) => {
  const { toast } = useToast();

  const handleClick = (project) => {
    toast({
      title: `${project.title}`,
      description: 'Case study coming soon. Let’s schedule a call on LinkedIn — happy to walk through it.',
    });
  };

  return (
    <section id="projects" className="relative section-padding bg-elevated border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-eyebrow mb-6">
              <span>02 — Selected Work</span>
            </div>
            <h2 className="section-title text-balance max-w-2xl">
              A few products I&apos;ve been
              <br />
              <span className="text-ink-secondary">proud to ship.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-ink-muted">
            {String(projects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              onClick={() => handleClick(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group text-left relative overflow-hidden rounded-2xl border border-white/10 bg-panel hover:border-accent/40 transition-colors duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                <img
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-secondary px-2.5 py-1 rounded-full border border-white/15 bg-black/30 backdrop-blur-md">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-ink-primary mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-surface transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
