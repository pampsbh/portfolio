import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const LinkedinSection = ({ posts, openLink }) => {
  return (
    <section id="linkedin" className="relative section-padding bg-elevated border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16"
        >
          <div className="section-eyebrow mb-6">
            <span>04 — Writing</span>
          </div>
          <h2 className="section-title max-w-3xl text-balance">
            Notes from the field,
            <br />
            <span className="text-ink-secondary">on LinkedIn.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {posts.map((post, index) => (
            <motion.button
              key={index}
              onClick={() => openLink(post.link)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative text-left rounded-2xl border border-white/10 bg-panel hover:border-accent/40 hover:bg-[#161616] transition-all duration-300 p-6 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  Post / {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
              </div>
              <h3 className="text-base font-medium text-ink-primary mb-3 tracking-tight leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3 flex-grow">
                {post.description}
              </p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-panel overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-6">
                  <Play className="w-3 h-3 text-accent" fill="currentColor" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    Webinar
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-ink-primary tracking-tight text-balance">
                  5 minutes on{' '}
                  <span className="text-ink-secondary">product accessibility.</span>
                </h3>
              </div>
              <div className="font-mono text-xs text-ink-muted">5 MIN · YOUTUBE</div>
            </div>
            <div className="lg:col-span-3 aspect-video lg:aspect-auto bg-surface">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vwr9buH1HM0"
                title="Product accessibility webinar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedinSection;
