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
