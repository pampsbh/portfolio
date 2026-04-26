import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

const ContactSection = ({ openLink, handleEmail, linkedinUrl }) => {
  const [copied, setCopied] = React.useState(false);
  const email = 'igorvilaralmeida@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      handleEmail();
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-60" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(ellipse, rgba(200,255,0,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <div className="section-eyebrow mb-6 justify-center">
            <span>05 — Contact</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tightest text-ink-primary text-balance leading-[0.95]">
            Got a brief?
            <br />
            <span className="text-ink-secondary italic font-light">Let&apos;s build it.</span>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-ink-secondary max-w-xl mx-auto">
            I&apos;m open to senior product / UI roles, freelance, and consulting on MVPs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
        >
          <button
            onClick={() => openLink(linkedinUrl)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel hover:border-accent/40 transition-all duration-300 p-6 text-left"
          >
            <div className="flex items-start justify-between mb-8">
              <Linkedin className="w-5 h-5 text-ink-secondary group-hover:text-accent transition-colors" strokeWidth={1.5} />
              <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-1">LinkedIn</div>
            <div className="text-base text-ink-primary">Message me directly</div>
          </button>

          <button
            onClick={copyEmail}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel hover:border-accent/40 transition-all duration-300 p-6 text-left"
          >
            <div className="flex items-start justify-between mb-8">
              <Mail className="w-5 h-5 text-ink-secondary group-hover:text-accent transition-colors" strokeWidth={1.5} />
              {copied ? (
                <Check className="w-4 h-4 text-accent" />
              ) : (
                <Copy className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
              )}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-1">
              {copied ? 'Copied' : 'Email'}
            </div>
            <div className="text-base text-ink-primary truncate">{email}</div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
