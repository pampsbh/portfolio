import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowUpRight, Layers, Code2, Zap, ShieldCheck, LayoutDashboard, Sparkles, MessagesSquare, Palette, Plug, Smartphone, ChevronDown } from 'lucide-react';
import { cases } from '@/data/portfolioData';

const PILLAR_ICONS = { Layers, Code2, Zap, ShieldCheck, LayoutDashboard, Sparkles, MessagesSquare, Palette, Plug, Smartphone };

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

const InitiativesGrid = ({ items }) => {
  const areas = ['All', ...new Set(items.map((item) => item.area))];
  const [area, setArea] = useState('All');
  const [openTitle, setOpenTitle] = useState(null);
  const visible = area === 'All' ? items : items.filter((item) => item.area === area);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter initiatives by area">
        {areas.map((a) => {
          const count = a === 'All' ? items.length : items.filter((item) => item.area === a).length;
          const active = a === area;
          return (
            <button
              key={a}
              role="tab"
              aria-selected={active}
              onClick={() => setArea(a)}
              className={`font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border transition-colors ${
                active ? 'border-accent bg-accent/10 text-accent' : 'border-white/10 text-ink-secondary hover:border-white/30 hover:text-ink-primary'
              }`}
            >
              {a} <span className="text-ink-muted">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((item) => {
          const open = openTitle === item.title;
          return (
            <div key={item.title} className={`rounded-2xl border bg-elevated transition-colors ${open ? 'border-accent/40 sm:col-span-2' : 'border-white/10 hover:border-white/20'}`}>
              <button
                onClick={() => setOpenTitle(open ? null : item.title)}
                aria-expanded={open}
                className="w-full text-left p-5 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{item.area}</span>
                    <span className="font-mono text-[10px] text-ink-muted">{item.date}</span>
                  </div>
                  <h3 className="text-base font-medium text-ink-primary leading-snug">{item.title}</h3>
                </div>
                <ChevronDown className={`w-4 h-4 mt-1 flex-shrink-0 text-ink-muted transition-transform ${open ? 'rotate-180 text-accent' : ''}`} />
              </button>
              {open && item.image && (
                <div className="px-5 pt-1 pb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full rounded-xl border border-white/10"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}
              {open && (
                <div className="px-5 pb-6 grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-white/5 pt-5">
                  {[['Problem', item.problem], ['What I did', item.action], ['Outcome', item.outcome]].map(([label, text]) => (
                    <div key={label}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-2">{label}</p>
                      <p className="text-sm text-ink-secondary leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

const CasePage = () => {
  const { slug } = useParams();
  const caseData = cases.find((c) => c.slug === slug);
  let sectionCount = 0;
  const next = () => ++sectionCount;

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

  const { category, title, subtitle, company, period, glance, challenge, pipeline, approach, initiatives, timeline, process: workProcess, stack, tokens, icons, components, screens, metrics, impact, learnings } = caseData;

  const jumpLinks = [
    ['challenge', 'Challenge'],
    pipeline && ['pipeline', 'Pipeline'],
    ['approach', 'Approach'],
    initiatives && ['initiatives', 'What I shipped'],
    timeline && ['timeline', 'Timeline'],
    workProcess && ['process', 'Process'],
    stack && ['stack', 'Stack'],
    ['impact', 'Impact'],
  ].filter(Boolean);
  const maxCommits = timeline ? Math.max(...timeline.months.map((m) => m.commits)) : 0;

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

          {glance && (
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-10 rounded-2xl overflow-hidden border border-white/10 bg-white/10">
              {glance.map((g) => (
                <div key={g.label} className="bg-elevated p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-2">{g.label}</dt>
                  <dd className="text-sm text-ink-primary leading-snug">{g.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {initiatives && (
            <nav aria-label="On this page" className="flex flex-wrap gap-2 mt-8">
              {jumpLinks.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-xs text-ink-secondary hover:text-accent border border-white/10 hover:border-accent/40 rounded-full px-3 py-1 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </motion.header>

        <div className="border-t border-white/5" />

        <main className="max-w-4xl mx-auto px-6">

          {/* 01 — Challenge */}
          <motion.section {...fadeUp} id="challenge" className="py-16 border-b border-white/5 scroll-mt-8">
            <SectionLabel index={next()} label="The Challenge" />
            <h2 className="text-2xl font-semibold text-ink-primary mb-6 tracking-tight">{challenge.heading}</h2>
            {challenge.text.split('\n\n').map((para, i) => (
              <p key={i} className="text-ink-secondary leading-relaxed text-base max-w-2xl mb-4 last:mb-0">{para}</p>
            ))}
          </motion.section>

          {/* Pipeline (optional) */}
          {pipeline && (
            <motion.section {...fadeUp} id="pipeline" className="py-16 border-b border-white/5 scroll-mt-8">
              <SectionLabel index={next()} label="The Pipeline" />
              <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{pipeline.heading}</h2>
              <p className="text-ink-secondary text-base mb-10 max-w-2xl">{pipeline.intro}</p>

              <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
                {pipeline.stages.map((stage, i) => {
                  const last = i === pipeline.stages.length - 1;
                  return (
                    <li
                      key={stage}
                      className={`rounded-xl border p-4 flex flex-col gap-2 ${last ? 'border-accent/40 bg-accent/5' : 'border-white/10 bg-elevated'}`}
                    >
                      <span className={`font-mono text-[10px] tracking-[0.18em] ${last ? 'text-accent' : 'text-ink-muted'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-ink-primary leading-snug">{stage}</span>
                    </li>
                  );
                })}
              </ol>

              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted mb-4">Who moves it forward</h3>
              <div className="flex flex-wrap gap-2">
                {pipeline.roles.map((role) => (
                  <span key={role} className="text-xs text-ink-secondary border border-white/10 rounded-full px-3 py-1">{role}</span>
                ))}
              </div>
            </motion.section>
          )}

          {/* 02 — Approach */}
          <motion.section {...fadeUp} id="approach" className="py-16 border-b border-white/5 scroll-mt-8">
            <SectionLabel index={next()} label="Approach" />
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
              <SectionLabel index={next()} label="Screens" />
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

          {/* 04 — Design Tokens (optional) */}
          {tokens && <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={next()} label="Design Tokens" />
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
          </motion.section>}

          {/* 04 — Iconography (optional) */}
          {icons && <div>
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={next()} label="Iconography" />
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
          </div>}

          {/* 05 — Components (optional) */}
          {components && <div>
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={next()} label="Components" />
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
          </div>}

          {/* Initiatives (optional) */}
          {initiatives && (
            <motion.section {...fadeUp} id="initiatives" className="py-16 border-b border-white/5 scroll-mt-8">
              <SectionLabel index={next()} label="What I Shipped" />
              <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{initiatives.heading}</h2>
              <p className="text-ink-secondary text-base mb-10 max-w-2xl">{initiatives.intro}</p>
              <InitiativesGrid items={initiatives.items} />
            </motion.section>
          )}

          {/* Timeline (optional) */}
          {timeline && (
            <motion.section {...fadeUp} id="timeline" className="py-16 border-b border-white/5 scroll-mt-8">
              <SectionLabel index={next()} label="Timeline" />
              <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{timeline.heading}</h2>
              <p className="text-ink-secondary text-base mb-10 max-w-2xl">{timeline.intro}</p>

              <ol className="flex flex-col">
                {timeline.months.map((m) => (
                  <li key={m.month} className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3rem_12rem_1fr] gap-x-4 gap-y-2 items-center py-4 border-b border-white/5 last:border-b-0">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-primary">{m.month}</span>
                    <div className="flex items-center gap-3">
                      <div className="h-2 rounded-full bg-accent/70" style={{ width: `${(m.commits / maxCommits) * 100}%`, minWidth: 8, maxWidth: '8rem' }} />
                      <span className="font-mono text-[11px] text-ink-muted whitespace-nowrap">{m.commits} commits</span>
                    </div>
                    <div className="col-start-2 sm:col-start-3 flex flex-wrap gap-1.5">
                      {m.highlights.map((h) => (
                        <span key={h} className="text-xs text-ink-secondary bg-white/5 rounded-md px-2 py-0.5">{h}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* Process (optional) */}
          {workProcess && (
            <motion.section {...fadeUp} id="process" className="py-16 border-b border-white/5 scroll-mt-8">
              <SectionLabel index={next()} label="Process" />
              <h2 className="text-2xl font-semibold text-ink-primary mb-4 tracking-tight">{workProcess.heading}</h2>
              <p className="text-ink-secondary text-base mb-10 max-w-2xl">{workProcess.intro}</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {workProcess.steps.map((step, i) => (
                  <li key={step.title} className="rounded-2xl border border-white/10 bg-elevated p-5 flex flex-col gap-3">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-sm font-medium text-ink-primary">{step.title}</h3>
                    <p className="text-xs text-ink-secondary leading-relaxed">{step.description}</p>
                  </li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* Stack (optional) */}
          {stack && (
            <motion.section {...fadeUp} id="stack" className="py-16 border-b border-white/5 scroll-mt-8">
              <SectionLabel index={next()} label="Stack" />
              <h2 className="text-2xl font-semibold text-ink-primary mb-10 tracking-tight">{stack.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stack.groups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-white/10 bg-elevated p-5">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-4">{group.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="text-xs text-ink-primary border border-white/10 rounded-md px-2 py-1">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* 06 — Metrics */}
          <motion.section {...fadeUp} className="py-16 border-b border-white/5">
            <SectionLabel index={next()} label="By the Numbers" />
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
          <motion.section {...fadeUp} id="impact" className="py-16 scroll-mt-8">
            <SectionLabel index={next()} label="Impact" />
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

            {learnings && (
              <div className="mt-14">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted mb-5">What I learned</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {learnings.map((l) => (
                    <div key={l.title} className="rounded-2xl border border-white/10 bg-elevated p-5">
                      <h4 className="text-sm font-medium text-ink-primary mb-2">{l.title}</h4>
                      <p className="text-xs text-ink-secondary leading-relaxed">{l.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
