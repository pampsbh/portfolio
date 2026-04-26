import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = ({ openLink, handleEmail, linkedinUrl }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-ink-primary">iv</span>
            <span className="text-sm text-ink-muted">— Igor Vilar · Product Designer</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openLink?.(linkedinUrl)}
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-accent/40 hover:text-accent text-ink-secondary flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={handleEmail}
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-accent/40 hover:text-accent text-ink-secondary flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="font-mono text-xs text-ink-muted">
            © {year} — Belo Horizonte / Brasil
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
