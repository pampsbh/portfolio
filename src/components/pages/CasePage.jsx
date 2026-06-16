import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowUpRight, Layers, Code2, Zap } from 'lucide-react';
import { cases } from '@/data/portfolioData';

const PILLAR_ICONS = { Layers, Code2, Zap };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const CasePage = () => {
  const { slug } = useParams();
  const caseData = cases.find((c) => c.slug === slug);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-surface text-ink-primary flex flex-col items-center justify-center gap-6">
        <p className="text-ink-secondary">Case not found.</p>
        <Link to="/" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>
      </div>
    );
  }

  const { category, title, subtitle, company, period, problem, solution, metrics, impact } = caseData;

  return (
    <>
      <Helmet>
        <title>{title} — Igor Vilar</title>
        <meta name="description" content={subtitle} />
      </Helmet>

      <div className="min-h-screen bg-surface text-ink-primary">
        {/* Back button */}
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-0">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </Link>
        </div>

        {/* Header */}
        <motion.header {...fadeUp} className="max-w-4xl mx-auto px-6 pt-12 pb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full mb-6">
            {category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-ink-primary tracking-tight mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
            {subtitle}
          </p>
          <p className="font-mono text-sm text-ink-muted">
            {company} · {period}
          </p>
        </motion.header>

        {/* Divider */}
        <div className="border-t border-white/5" />

        <main className="max-w-4xl mx-auto px-6">

          {/* Problem */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <div className="section-eyebrow mb-6">
              <span>01 — Problem</span>
            </div>
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">
              Sem linguagem comum entre produtos
            </h2>
            <p className="text-ink-secondary leading-relaxed text-base max-w-2xl">
              {problem.text}
            </p>
          </motion.section>

          {/* Solution */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <div className="section-eyebrow mb-6">
              <span>02 — Solution</span>
            </div>
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">
              Um sistema unificado, de tokens a componentes
            </h2>
            <p className="text-ink-secondary leading-relaxed text-base max-w-2xl mb-12">
              {solution.text}
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {solution.pillars.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar.icon];
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-white/10 bg-elevated p-6 flex flex-col gap-4"
                  >
                    {Icon && (
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-medium text-ink-primary mb-2">{pillar.title}</h3>
                      <p className="text-sm text-ink-secondary leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Screenshot */}
            {solution.screenshot && (
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-elevated">
                <img
                  src={solution.screenshot}
                  alt={solution.screenshotAlt}
                  className="w-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            )}
          </motion.section>

          {/* Metrics */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-elevated p-6 flex flex-col gap-2"
                >
                  <span className="text-4xl font-bold text-accent tracking-tight">{m.value}</span>
                  <span className="text-sm text-ink-secondary">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Impact */}
          <motion.section {...fadeUp} className="py-16">
            <div className="section-eyebrow mb-6">
              <span>03 — Impact</span>
            </div>
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">
              Uma linguagem unificada entre times
            </h2>
            <p className="text-ink-secondary leading-relaxed text-base max-w-2xl mb-8">
              {impact.text}
            </p>
            <ul className="flex flex-col gap-3">
              {impact.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-ink-secondary">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.section>
        </main>

        {/* Footer CTA */}
        <div className="border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-ink-muted font-mono mb-1">Next</p>
              <p className="text-ink-secondary text-sm">More cases coming soon</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
            >
              Back to portfolio
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasePage;
