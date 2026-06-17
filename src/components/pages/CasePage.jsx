import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowUpRight, Layers, Code2, Zap, ShieldCheck } from 'lucide-react';
import { cases } from '@/data/portfolioData';

const PILLAR_ICONS = { Layers, Code2, Zap, ShieldCheck };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

const SectionLabel = ({ index, label }) => (
  <div className="section-eyebrow mb-6">
    <span>{String(index).padStart(2, '0')} — {label}</span>
  </div>
);

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

  const { category, title, subtitle, company, period, challenge, approach, tokens, icons, components, screens, metrics, impact } = caseData;

  return (
    <>
      <Helmet>
        <title>{title} - Igor Vilar</title>
        <meta name="description" content={subtitle} />
      </Helmet>

      <div className="min-h-screen bg-surface text-ink-primary">

        {/* Back */}
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink-primary transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </Link>
        </div>

        {/* Header */}
        <motion.header {...fadeUp} className="max-w-4xl mx-auto px-6 pt-12 pb-16">
          <div className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.18em] text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full mb-6">
            {category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-ink-primary tracking-tight mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
            {subtitle}
          </p>
          <p className="font-mono text-sm text-ink-muted">{company} · {period}</p>
        </motion.header>

        <div className="border-t border-white/5" />

        <main className="max-w-4xl mx-auto px-6">

          {/* 01 — Challenge */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={1} label="The Challenge" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">{challenge.heading}</h2>
            {challenge.text.split('\n\n').map((para, i) => (
              <p key={i} className="text-ink-secondary leading-relaxed text-base max-w-2xl mb-4 last:mb-0">{para}</p>
            ))}
          </motion.section>

          {/* 02 — Approach */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={2} label="Approach" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">{approach.heading}</h2>
            {approach.text.split('\n\n').map((para, i) => (
              <p key={i} className="text-ink-secondary leading-relaxed text-base max-w-2xl mb-4 last:mb-0">{para}</p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12 mb-12">
              {approach.pillars.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar.icon];
                return (
                  <div key={pillar.title} className="rounded-2xl border border-white/10 bg-elevated p-6 flex flex-col gap-4">
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

            {approach.screenshot && (
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-elevated">
                <img
                  src={approach.screenshot}
                  alt={approach.screenshotAlt}
                  className="w-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            )}
          </motion.section>

          {/* 03 — Screens (optional, mobile/app cases) */}
          {screens && screens.length > 0 && (
            <motion.section {...fadeUp} className="py-16 border-b border-white/5">
              <SectionLabel index={3} label="Screens" />
              <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">Key screens & design decisions</h2>
              <p className="text-ink-secondary text-base mb-12 max-w-2xl">Each screen was designed around a specific user task. Here is the reasoning behind the main flows.</p>

              <div className="flex flex-col gap-16">
                {screens.map((screen, i) => (
                  <div key={screen.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                    <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-elevated">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="w-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="text-xl font-semibold text-ink-primary mb-4 tracking-tight">{screen.title}</h3>
                      <p className="text-ink-secondary leading-relaxed text-base">{screen.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* 04 — Design Tokens */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={3} label="Design Tokens" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{tokens.heading}</h2>
            <p className="text-ink-secondary text-base mb-12 max-w-2xl">{tokens.intro}</p>

            {/* Colors */}
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted mb-5">Color</h3>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-12">
              {tokens.colors.map((color) => (
                <div key={color.name} className="flex flex-col gap-2">
                  <div
                    className="w-full aspect-square rounded-xl border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="font-mono text-[10px] text-ink-primary leading-none">{color.name}</p>
                    <p className="font-mono text-[10px] text-ink-muted mt-0.5">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography */}
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted mb-5">Typography</h3>
            <div className="rounded-2xl border border-white/10 bg-elevated p-6 flex flex-col divide-y divide-white/5 mb-12">
              {tokens.typeScale.map((t) => (
                <div key={t.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <span
                    className="text-ink-primary"
                    style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: 1.2, fontFamily: 'Verdana, sans-serif' }}
                  >
                    Aa
                  </span>
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-ink-secondary">{t.name}</span>
                    <span className="font-mono text-[10px] text-ink-muted w-8 text-right">{t.size}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacing */}
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted mb-5">Spacing</h3>
            <div className="rounded-2xl border border-white/10 bg-elevated p-6 flex flex-col gap-4">
              {tokens.spacingScale.map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-ink-secondary w-8">{s.name}</span>
                  <div className="bg-accent/30 rounded" style={{ width: s.px * 4, height: 8 }} />
                  <span className="font-mono text-[10px] text-ink-muted">{s.value}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 04 — Iconography */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={4} label="Iconography" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{icons.heading}</h2>
            <p className="text-ink-secondary text-base mb-12 max-w-2xl">{icons.intro}</p>

            <div className="rounded-2xl border border-white/10 bg-elevated p-6">
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1">
                {icons.items.map((icon) => (
                  <div
                    key={icon.name}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-ink-secondary group-hover:text-accent transition-colors"
                      fill="currentColor"
                    >
                      <path d={icon.path} />
                    </svg>
                    <span className="font-mono text-[9px] text-ink-muted text-center leading-tight">{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* 05 — Components */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={5} label="Components" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{components.heading}</h2>
            <p className="text-ink-secondary text-base mb-12 max-w-2xl">{components.intro}</p>

            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-4">ds-button</p>
              <div className="rounded-2xl border border-white/10 bg-elevated p-8">
                <div className="flex flex-wrap items-center gap-4">
                  {components.buttonVariants.map((btn) => (
                    <button
                      key={btn.label}
                      disabled={btn.disabled}
                      style={{
                        backgroundColor: btn.bg,
                        color: btn.color,
                        borderColor: btn.border,
                        textDecoration: btn.underline ? 'underline' : 'none',
                      }}
                      className="px-5 py-2 rounded-lg border text-sm font-medium"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-4">ds-badge</p>
              <div className="rounded-2xl border border-white/10 bg-elevated p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {components.badgeVariants.map((badge) => (
                    <span
                      key={badge.label}
                      style={{
                        backgroundColor: badge.bg,
                        color: badge.color,
                        borderColor: badge.border,
                      }}
                      className="px-3 py-1 rounded-full border text-xs font-medium"
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* 06 — Metrics */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={6} label="By the Numbers" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/10 bg-elevated p-6 flex flex-col gap-2">
                  <span className="text-4xl font-bold text-accent tracking-tight">{m.value}</span>
                  <span className="text-sm text-ink-secondary">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 07 — Impact */}
          <motion.section {...fadeUp} className="py-16">
            <SectionLabel index={7} label="Impact" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">{impact.heading}</h2>
            {impact.text.split('\n\n').map((para, i) => (
              <p key={i} className="text-ink-secondary leading-relaxed text-base max-w-2xl mb-4 last:mb-0">{para}</p>
            ))}
            <ul className="flex flex-col gap-3 mt-8">
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
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group">
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
