# Design System Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar React Router ao portfólio e criar uma página de case study para o Estrada Design System, acessível em `/case/design-system`.

**Architecture:** A SPA atual passa a ter roteamento via React Router v6. A rota `/` renderiza a home existente (sem alterações visuais). A rota `/case/:slug` renderiza um `CasePage.jsx` genérico que lê dados de `portfolioData.js` pelo slug. Os cards de projetos viram `<Link>` em vez do toast atual.

**Tech Stack:** React 18, React Router DOM v6, Framer Motion, Tailwind CSS, Lucide React

---

## File Map

| Ação | Arquivo |
|------|---------|
| Modify | `package.json` — adiciona react-router-dom |
| Modify | `src/main.jsx` — envolve App com BrowserRouter |
| Modify | `src/App.jsx` — adiciona Routes/Route, extrai home para componente |
| Create | `src/components/pages/HomePage.jsx` — home atual como componente separado |
| Create | `src/components/pages/CasePage.jsx` — template genérico de case |
| Modify | `src/data/portfolioData.js` — adiciona `slug` nos projetos + array `cases[]` |
| Modify | `src/components/sections/ProjectsSection.jsx` — cards viram Link |
| Create | `public/screenshots/estrada-storybook.png` — capturado via Playwright |
| Create | `public/screenshots/estrada-button.png` — capturado via Playwright |
| Create | `public/screenshots/estrada-tokens.png` — capturado via Playwright |

---

## Task 1: Instalar react-router-dom

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Instalar o pacote**

```bash
cd "C:\Users\igor.costa\Downloads\Documentos_igor\Repositorios\portfolio"
npm install react-router-dom@6
```

Expected output: `added X packages` sem erros.

- [ ] **Step 2: Verificar instalação**

```bash
node -e "require('./node_modules/react-router-dom/package.json').version |> console.log"
```

Ou simplesmente confirmar que `node_modules/react-router-dom` existe e `package.json` lista `"react-router-dom": "^6.x.x"` em `dependencies`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add react-router-dom v6"
```

---

## Task 2: Adicionar slug e dados do case em portfolioData.js

**Files:**
- Modify: `src/data/portfolioData.js`

- [ ] **Step 1: Adicionar `slug` nos projetos existentes e criar array `cases[]`**

Substituir o conteúdo de `src/data/portfolioData.js` por:

```js
import { User, Briefcase, Award, MessageCircle } from 'lucide-react';

export const navItems = ['About', 'Projects', 'Experience', 'Linkedin', 'Contact'];

export const projects = [
  {
    slug: "design-system",
    title: "Estrada Design System",
    description: "Token-first design system unifying all PJUS products. 15+ components, 150+ icons.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/f1dd0d5a6f6f82dc89431153641050f5.jpg"
  },
  {
    slug: null,
    title: "Bosch APP Fleet",
    description: "Bosch offers several mobile applications for managing vehicle fleets",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/16977186325b8e034a748b864011ac8a.jpg"
  },
  {
    slug: null,
    title: "Unimed",
    description: "Virtual card, exam results, accredited network, information about the plan and allows you to request authorizations and issue invoices, among other features.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/6004933b8e0eafd47fd62667cb023152.jpg"
  },
  {
    slug: null,
    title: "Nubank Underserved",
    description: "Research carried out for nubank in 2022 to learn about another targeted audience",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/3e662e941ef13ad7f8c3f00c68c728c1.jpg"
  }
];

export const cases = [
  {
    slug: "design-system",
    category: "Design System",
    title: "Estrada Design System",
    subtitle: "Um sistema de design token-first para unificar os produtos PJUS",
    company: "PJUS Investimentos",
    period: "2024–2025",
    problem: {
      text: "Antes do Estrada, cada produto PJUS definia seus próprios estilos — botões, cores e tipografia variavam entre sistemas. Isso gerava inconsistência visual para o usuário final e retrabalho constante para devs e designers sem uma linguagem comum."
    },
    solution: {
      text: "Criamos o Estrada DS com arquitetura token-first via Style Dictionary: uma fonte única de verdade para cores, tipografia e espaçamento, compilada automaticamente em CSS custom properties. Os componentes foram construídos como Web Components nativos com Lit 3 — framework-agnostic, consumíveis em qualquer stack da empresa.",
      pillars: [
        {
          icon: "Layers",
          title: "Token-First",
          description: "Tokens gerenciados em JSON via Style Dictionary, gerando CSS custom properties automaticamente e sincronizados com o Figma."
        },
        {
          icon: "Code2",
          title: "Web Components",
          description: "Lit 3 com Shadow DOM — zero dependência de framework. Funcionam em qualquer stack da empresa sem adaptações."
        },
        {
          icon: "Zap",
          title: "Developer Experience",
          description: "Storybook + Chromatic para documentação viva e testes visuais automatizados em cada PR, eliminando regressões silenciosas."
        }
      ],
      screenshot: "/screenshots/estrada-storybook.png",
      screenshotAlt: "Storybook do Estrada Design System mostrando componentes documentados"
    },
    metrics: [
      { value: "15+", label: "Componentes" },
      { value: "150+", label: "Ícones" },
      { value: "80+", label: "Tokens de cor" },
      { value: "5", label: "Contribuidores" }
    ],
    impact: {
      text: "O sistema foi adotado nos produtos internos da PJUS, estabelecendo uma linguagem visual unificada entre times. O pipeline CI/CD com Chromatic detecta regressões visuais automaticamente em PRs, antes de chegar à produção.",
      bullets: [
        "Consistência visual entre todos os produtos PJUS",
        "Autonomia de devs com componentes framework-agnostic",
        "Regressões visuais detectadas automaticamente via Chromatic",
        "Pipeline Figma → tokens → código documentado e reproduzível"
      ]
    }
  }
];

export const experiences = [
  {
    company: "PJUS",
    period: "2022 – Present",
    role: "Lead Product Designer",
    description: "Allocated in PJUS, a company that buys judicial assets. I have developed most of the digital products."
  },
  {
    company: "Sensix",
    period: "2020 – 2022",
    role: "Design Team Lead",
    description: "Conducting product redesign, developing metrics, defining the UX team's OKRs, defining and validating hypotheses through quantitative and qualitative research."
  },
  {
    company: "Consultancies & Agencies",
    period: "Earlier Roles",
    role: "Product Designer",
    description: "MVP construction, prototyping, delivering wireframes and conducting meetings with IT."
  }
];

export const highlights = [
  { icon: User, title: "UX/UI Design" },
  { icon: Award, title: "Product Metrics" },
  { icon: Briefcase, title: "Team Leadership" },
  { icon: MessageCircle, title: "User Journey" }
];

export const linkedinPosts = [
  {
    title: "PJUS Brasil Opportunity",
    description: "Yesterday at PJUS Brasil, I had the opportunity to talk a little about my journey and my work as a Product Designer...",
    link: "https://www.linkedin.com/posts/igor-vilar-almeida_ontem-na-pjus-brasil-tive-a-oportunidade-activity-7308095876021821440-S64I/"
  },
  {
    title: "Jakob's Law in UX",
    description: "Do you know Jakob's Law? It states that users prefer your site to work the same way as all the other sites they already know...",
    link: "https://www.linkedin.com/posts/igor-vilar-almeida_voc%C3%AA-conhece-a-lei-de-jakob-ela-afirma-activity-7208545426839347200-3sqY"
  },
  {
    title: "Petz App Redesign Study",
    description: "A case study on redesigning the Petz app, focusing on improving user experience and interface design.",
    link: "https://www.linkedin.com/posts/igor-vilar-almeida_petz-uxdesign-uidesign-activity-6966760852184051712-Tb5d"
  },
  {
    title: "The Importance of UX Metrics",
    description: "Discussing the relevance of UX metrics for product success and data-driven design decisions.",
    link: "https://www.linkedin.com/posts/igor-vilar-almeida_m%C3%A9tricas-de-ux-activity-6952755914684657664-Um0Q"
  },
  {
    title: "UX Research & Redesign",
    description: "Insights from a UX research project that led to a successful product redesign.",
    link: "https://www.linkedin.com/posts/igor-vilar-almeida_uxresearch-redesign-uxdesign-activity-6950436687353155584-snzw"
  }
];

export const linkedinUrl = 'https://www.linkedin.com/in/igor-vilar-almeida/';
```

- [ ] **Step 2: Commit**

```bash
git add src/data/portfolioData.js
git commit -m "feat(data): add slug to projects and cases array for Design System case"
```

---

## Task 3: Extrair HomePage e adicionar roteamento

**Files:**
- Create: `src/components/pages/HomePage.jsx`
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

- [ ] **Step 1: Criar `src/components/pages/HomePage.jsx`**

Mover o conteúdo atual da home do App.jsx para este componente:

```jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import LinkedinSection from '@/components/sections/LinkedinSection';
import ContactSection from '@/components/sections/ContactSection';
import {
  navItems,
  projects,
  experiences,
  highlights,
  linkedinPosts,
  linkedinUrl,
} from '@/data/portfolioData';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:igorvilaralmeida@gmail.com';
  };

  return (
    <>
      <Helmet>
        <title>Igor Vilar — Product Designer</title>
        <meta
          name="description"
          content="Product Designer focused on launching MVPs that move metrics. UI craft, research and data — based in Belo Horizonte."
        />
        <meta name="theme-color" content="#0A0A0A" />
      </Helmet>

      <ScrollProgress />

      <div className="min-h-screen bg-surface text-ink-primary">
        <Header navItems={navItems} scrollToSection={scrollToSection} />
        <main>
          <HeroSection openLink={openLink} linkedinUrl={linkedinUrl} />
          <AboutSection highlights={highlights} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
          <LinkedinSection posts={linkedinPosts} openLink={openLink} />
          <ContactSection openLink={openLink} handleEmail={handleEmail} linkedinUrl={linkedinUrl} />
        </main>
        <Footer openLink={openLink} handleEmail={handleEmail} linkedinUrl={linkedinUrl} />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;
```

- [ ] **Step 2: Atualizar `src/App.jsx`**

Substituir o conteúdo completo por:

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/components/pages/HomePage';
import CasePage from '@/components/pages/CasePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case/:slug" element={<CasePage />} />
    </Routes>
  );
}

export default App;
```

- [ ] **Step 3: Atualizar `src/main.jsx`**

Substituir o conteúdo completo por:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 4: Commit**

```bash
git add src/main.jsx src/App.jsx src/components/pages/HomePage.jsx
git commit -m "feat(routing): add React Router v6, extract HomePage component"
```

---

## Task 4: Atualizar ProjectsSection para usar Link

**Files:**
- Modify: `src/components/sections/ProjectsSection.jsx`

- [ ] **Step 1: Substituir o conteúdo de `src/components/sections/ProjectsSection.jsx`**

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = ({ projects }) => {
  const { toast } = useToast();

  const handleNoCase = (project) => {
    toast({
      title: `${project.title}`,
      description: 'Case study coming soon. Let's schedule a call on LinkedIn — happy to walk through it.',
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
          {projects.map((project, index) => {
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group text-left relative overflow-hidden rounded-2xl border border-white/10 bg-panel hover:border-accent/40 transition-colors duration-500 cursor-pointer"
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
              </motion.div>
            );

            if (project.slug) {
              return (
                <Link key={project.title} to={`/case/${project.slug}`} className="block">
                  {cardContent}
                </Link>
              );
            }

            return (
              <button
                key={project.title}
                onClick={() => handleNoCase(project)}
                className="block w-full text-left"
              >
                {cardContent}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
```

- [ ] **Step 2: Verificar que a home abre sem erros no browser**

```bash
npm run dev
```

Abrir `http://localhost:3000` e confirmar que os cards de projeto renderizam. Clicar no card "Estrada Design System" e verificar que navega para `/case/design-system` (vai dar 404 até o Task 6, mas a navegação deve ocorrer).

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ProjectsSection.jsx
git commit -m "feat(projects): cards with slug navigate to case page, others show toast"
```

---

## Task 5: Capturar screenshots do Storybook

**Files:**
- Create: `public/screenshots/estrada-storybook.png`
- Create: `public/screenshots/estrada-button.png`

**Pré-requisito:** O Storybook do Estrada precisa estar rodando em `http://localhost:6006`. Para iniciá-lo:

```bash
cd "C:\Users\igor.costa\source\repos\Estrada"
npm run storybook
```

Aguardar o Storybook abrir no browser. Depois, com Playwright MCP:

- [ ] **Step 1: Capturar screenshot geral do Storybook**

Navegar para `http://localhost:6006` e tirar screenshot. Salvar em `public/screenshots/estrada-storybook.png` dentro do projeto portfolio.

- [ ] **Step 2: Capturar screenshot dos botões**

Navegar para a story do `ds-button` no Storybook (sidebar → ds-button → All Variants ou similar). Tirar screenshot. Salvar em `public/screenshots/estrada-button.png`.

- [ ] **Step 3: Commit**

```bash
git add public/screenshots/
git commit -m "feat(assets): add Storybook screenshots for Design System case"
```

---

## Task 6: Criar CasePage.jsx

**Files:**
- Create: `src/components/pages/CasePage.jsx`

- [ ] **Step 1: Criar `src/components/pages/CasePage.jsx`**

```jsx
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
```

- [ ] **Step 2: Verificar a página no browser**

Com o servidor rodando (`npm run dev`), navegar para `http://localhost:3000/case/design-system` e confirmar:
- Header com categoria, título, subtítulo, empresa/período
- Seção Problem com texto
- Seção Solution com 3 pilares + screenshot (se capturado no Task 5)
- Grid de métricas com números em lime/accent
- Seção Impact com bullets
- Footer com "Back to portfolio"

- [ ] **Step 3: Testar navegação completa**

1. Na home, clicar no card "Estrada Design System" → deve abrir `/case/design-system`
2. Clicar em "Back to portfolio" → deve voltar para `/`
3. Clicar nos outros cards (Bosch, Unimed, Nubank) → deve exibir toast "coming soon"
4. Navegar diretamente para `/case/slug-inexistente` → deve exibir "Case not found" com link de volta

- [ ] **Step 4: Commit**

```bash
git add src/components/pages/CasePage.jsx
git commit -m "feat(case): add CasePage generic template for Design System case study"
```

---

## Task 7: Build final e verificação

**Files:** nenhum novo

- [ ] **Step 1: Rodar build de produção**

```bash
npm run build
```

Expected: sem erros. Output em `dist/`.

- [ ] **Step 2: Preview da build**

```bash
npm run preview
```

Abrir `http://localhost:3000`, testar navegação home → case → home. Confirmar que não há erros no console.

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat: Design System case study complete — routing + CasePage + data"
```
