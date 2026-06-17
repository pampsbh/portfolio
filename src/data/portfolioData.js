import { User, Briefcase, Award, MessageCircle } from 'lucide-react';

export const navItems = ['About', 'Projects', 'Experience', 'Linkedin', 'Contact'];

export const projects = [
  {
    slug: "design-system",
    title: "Estrada Design System",
    description: "Token-first design system unifying all PJUS products. 15+ components, 150+ icons.",
    image: "/screenshots/estrada-storybook.png"
  },
  {
    slug: "bosch-fleet",
    title: "Bosch Fleet App",
    description: "Mobile app for B2B fleet maintenance management. 30K+ downloads on the App Store.",
    image: "/screenshots/bosch/home.png"
  },
  {
    slug: "noz",
    title: "Noz — Corporate Platform",
    description: "Gamified corporate social platform. Adopted by 10+ companies. V3 redesign from internal tool to market-ready product.",
    image: "/screenshots/noz/admin.png"
  },
  {
    slug: "us-platform",
    title: "US Platform — PJUS",
    description: "First 100% digital precatório purchase platform in Brazil. R$5M+ revenue in 8 months.",
    image: "/screenshots/us/area-logada.png"
  },
  {
    slug: null,
    title: "Unimed",
    description: "Virtual card, exam results, accredited network, information about the plan and allows you to request authorizations and issue invoices, among other features.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/533bb271-b0f3-4693-9937-b16626fc2fb3/6004933b8e0eafd47fd62667cb023152.jpg"
  },
  {
    slug: "alaska",
    title: "Alaska Asset Management App",
    description: "Financial education MVP for Alaska Asset Management. Full course system with gamification — published on the App Store in 2020.",
    image: "/screenshots/alaska/home.png"
  },
  {
    slug: "vli-desembarque",
    title: "VLI — Smart Ship Disembarkation",
    description: "Port operations platform for VLI Logística. Multi-step ship registration, voyage management, and disembarkation simulation.",
    image: "/screenshots/desembarque/navio.png"
  },
  {
    slug: "fieldscan",
    title: "Sensix — Fieldscan",
    description: "AgriTech precision agriculture platform. Heuristic evaluation + 2 new features designed: Management Zones and CEA mapping.",
    image: "/screenshots/fieldscan/zonas-populado.png"
  },
  {
    slug: "tm1",
    title: "TM1 — Virtual Events Platform",
    description: "White-label virtual event platform designed during the pandemic. Live streaming, Virtual Expo, networking, and mobile-first countdown. Responsive across desktop and mobile.",
    image: "/screenshots/tm1/400-feature.png"
  },
  {
    slug: "nubank-underage",
    title: "Nubank Underage Research",
    description: "Qualitative UX research for Nubank in 2022. 12 teenagers, 2 cities, anthropological methods. Mapping how Gen Z relates to money, banks, and financial independence.",
    image: "/screenshots/nubank/cover.png"
  }
];

export const cases = [
  {
    slug: 'design-system',
    category: 'Design System',
    title: 'Estrada Design System',
    subtitle: 'A token-first design system built to unify every PJUS product — without locking teams into a single framework.',
    company: 'PJUS Investimentos',
    period: '2024-2025',
    challenge: {
      heading: 'Multiple products. No shared language.',
      text: 'PJUS operates across several internal products — each built by different teams, at different speeds. Without a shared visual foundation, every interface diverged. Buttons looked different across screens. Spacing was arbitrary. Color carried no consistent meaning. As the product suite grew, so did the cost of inconsistency: more design decisions to repeat, more developer time spent on basics, more user confusion at handoff points.\n\nThe challenge was architectural. Any solution had to work across every stack the company might use — React, Angular, plain HTML — without forcing a migration. It had to be maintainable by a small team. And it had to scale as the product grew.',
    },
    approach: {
      heading: 'One source of truth. Zero framework lock-in.',
      text: 'We built Estrada around a single principle: decisions made once should propagate everywhere automatically. That meant starting with design tokens — not components. Every color, size, and spacing value lives in JSON, processed by Style Dictionary into CSS custom properties. Change a token, and every component updates.\n\nFor components, we chose Web Components with Lit 3. Not because it was trendy — because it was the only option that let any PJUS team consume the system without adopting a new framework. Shadow DOM encapsulation meant styles could not leak. HTML attributes as props meant any codebase could drive the components without a build step.\n\nWe also introduced a token compliance gate directly in the Azure DevOps pipeline. Before anything reaches the homologation environment, an automated step scans the submitted changes and validates that every visual property references a design token — no hardcoded hex values, no arbitrary spacing, no one-off overrides. If a contribution bypasses the system, the pipeline blocks the deploy and surfaces exactly which properties need to be corrected. This turned the design system from a guideline into an enforceable standard.',
      pillars: [
        {
          icon: 'Layers',
          title: 'Token-First Architecture',
          description: 'Design decisions live in JSON tokens, compiled to CSS custom properties via Style Dictionary. One change propagates to every component automatically.',
        },
        {
          icon: 'Code2',
          title: 'Framework-Agnostic Components',
          description: '15+ Web Components built with Lit 3 and Shadow DOM. Works in React, Angular, or plain HTML — no adapter layer needed.',
        },
        {
          icon: 'Zap',
          title: 'Automated Quality Gates',
          description: 'Storybook documents every state. Chromatic catches visual regressions on every PR before they reach production.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Token Compliance Pipeline',
          description: 'An Azure DevOps gate scans every PR before HML deploy — blocking any contribution that uses hardcoded values instead of design tokens.',
        },
      ],
      screenshot: '/screenshots/estrada-storybook.png',
      screenshotAlt: 'Estrada Design System Storybook showing documented components',
    },
    tokens: {
      heading: 'Decisions encoded as data',
      intro: 'Every visual decision in Estrada starts as a token — a named value that can be referenced, overridden, and updated in one place.',
      colors: [
        { name: 'Primary',   hex: '#0061D6', group: 'Brand' },
        { name: 'Secondary', hex: '#2B313B', group: 'Brand' },
        { name: 'Contrast',  hex: '#0D4D9B', group: 'Brand' },
        { name: 'Success',   hex: '#0E8557', group: 'Status' },
        { name: 'Warning',   hex: '#FEC33C', group: 'Status' },
        { name: 'Danger',    hex: '#FF4D4F', group: 'Status' },
        { name: 'Info',      hex: '#0858C5', group: 'Status' },
        { name: 'Gray 50',   hex: '#F7F7F7', group: 'Neutral' },
        { name: 'Gray 100',  hex: '#DBDEDE', group: 'Neutral' },
        { name: 'Gray 200',  hex: '#A5ABAB', group: 'Neutral' },
        { name: 'Gray 300',  hex: '#717979', group: 'Neutral' },
        { name: 'Gray 400',  hex: '#4D5858', group: 'Neutral' },
        { name: 'White',     hex: '#FFFFFF', group: 'Neutral' },
        { name: 'Black',     hex: '#0A0A0A', group: 'Neutral' },
      ],
      typeScale: [
        { name: 'H1',     size: '40px', weight: '700' },
        { name: 'H2',     size: '28px', weight: '700' },
        { name: 'H3',     size: '24px', weight: '600' },
        { name: 'H4',     size: '20px', weight: '600' },
        { name: 'H5',     size: '16px', weight: '600' },
        { name: 'Text 1', size: '16px', weight: '400' },
        { name: 'Text 2', size: '14px', weight: '400' },
        { name: 'Text 3', size: '12px', weight: '400' },
      ],
      spacingScale: [
        { name: 'sm',  value: '4px',  px: 4  },
        { name: 'md',  value: '8px',  px: 8  },
        { name: 'lg',  value: '16px', px: 16 },
        { name: 'xl',  value: '24px', px: 24 },
        { name: 'xxl', value: '32px', px: 32 },
      ],
    },
    icons: {
      heading: '150+ icons. One pipeline.',
      intro: 'SVG files are automatically compiled into a web font via a Vite plugin — reducing HTTP requests and enabling icon rendering with a single CSS class.',
      items: [
        { name: 'add',           path: 'M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6z' },
        { name: 'analytics',     path: 'M19 3h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2zM19 19h-14v-14h14v14zM7 12h2v5h-2zM15 7h2v10h-2zM11 14h2v3h-2zM11 10h2v2h-2z' },
        { name: 'arrow_back',    path: 'M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17z' },
        { name: 'arrow_forward', path: 'M4 13h12.17l-5.59 5.59 1.42 1.41 8-8-8-8-1.41 1.41 5.58 5.59h-12.17z' },
        { name: 'attach_money',  path: 'M11.8 10.9c-2.27-0.59-3-1.2-3-2.15 0-1.090 1.010-1.85 2.7-1.85 1.78 0 2.44 0.85 2.5 2.1h2.21c-0.070-1.72-1.12-3.3-3.21-3.81v-2.19h-3v2.16c-1.94 0.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5 0.6 3 1.48 3 2.41 0 0.69-0.49 1.79-2.7 1.79-2.060 0-2.87-0.92-2.98-2.1h-2.2c0.12 2.19 1.76 3.42 3.68 3.83v2.17h3v-2.15c1.95-0.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
        { name: 'calendar',      path: 'M7 12h2v2h-2zM21 6v14c0 1.105-0.895 2-2 2h-14c-1.105 0-2-0.895-2-2v-14c0-1.105 0.895-2 2-2h1v-2h2v2h8v-2h2v2h1c1.105 0 2 0.895 2 2zM5 8h14v-2h-14zM19 20v-10h-14v10zM15 14v-2h2v2zM11 14v-2h2v2zM7 16h2v2h-2zM15 18v-2h2v2zM11 18v-2h2v2z' },
        { name: 'cancel',        path: 'M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zM17 15.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59z' },
        { name: 'check_circle',  path: 'M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM15.88 8.29l-5.88 5.88-1.88-1.88c-0.39-0.39-1.020-0.39-1.41 0-0.39 0.39-0.39 1.020 0 1.41l2.59 2.59c0.39 0.39 1.020 0.39 1.41 0l6.59-6.59c0.39-0.39 0.39-1.020 0-1.41-0.39-0.39-1.030-0.39-1.42 0z' },
        { name: 'chat',          path: 'M11.747 4c-1.849 0-3.762 0.271-5.073 0.988-2.129 1.181-2.752 3.487-2.666 5.617 0.064 1.84 0.602 3.816 2.064 5.172 1.375 1.298 4.213 1.88 6.17 1.88 0.086 0 0.172 0.057 0.172 0.154v1.86c0 0.329 0.408 0.407 0.602 0.251 0.967-0.755 1.956-1.53 2.902-2.305 0.903-0.755 1.935-1.53 2.623-2.44 1.483-1.918 1.72-4.61 1.225-6.857-0.473-2.15-2.171-3.565-4.536-4.010-1.028-0.197-2.21-0.31-3.419-0.31z' },
        { name: 'credit_card',   path: 'M20 4h-16c-1.11 0-2 0.89-2 2v12c0 1.11 0.89 2 2 2h16c1.11 0 2-0.89 2-2v-12c0-1.11-0.89-2-2-2zM19 18h-14c-0.55 0-1-0.45-1-1v-5h16v5c0 0.55-0.45 1-1 1zM20 8h-16v-2h16z' },
        { name: 'delete',        path: 'M7 21c-1.105 0-2-0.895-2-2v-13h-1v-2h5v-1h6v1h5v2h-1v13c0 1.105-0.895 2-2 2h-10zM17 6h-10v13h10v-13zM9 17h2v-9h-2v9zM13 17h2v-9h-2v9z' },
        { name: 'edit',          path: 'M5 19h1.425l9.775-9.775-1.425-1.425-9.775 9.775zM3 21v-4.25l13.2-13.175q0.3-0.275 0.662-0.425t0.763-0.15 0.775 0.15 0.65 0.45l1.375 1.4q0.3 0.275 0.437 0.65t0.137 0.75q0 0.4-0.137 0.763t-0.437 0.662l-13.175 13.175z' },
        { name: 'file_download', path: 'M18 15v3h-12v-3h-2v3c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-3zM17 11l-1.41-1.41-2.59 2.58v-8.17h-2v8.17l-2.59-2.58-1.41 1.41 5 5z' },
        { name: 'filter_alt',    path: 'M7 6h10l-5.010 6.3-4.99-6.3zM4.25 5.61c2.020 2.59 5.75 7.39 5.75 7.39v6c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-6s3.72-4.8 5.74-7.39c0.49-0.63 0.040-1.61-0.79-1.61h-13.91c-0.83 0-1.3 0.95-0.79 1.61z' },
        { name: 'home',          path: 'M6 19h3v-6h6v6h3v-9l-6-4.5-6 4.5v9zM4 21v-12l8-6 8 6v12h-7v-6h-2v6h-7z' },
        { name: 'info',          path: 'M13 9h-2v-2h2zM13 17h-2v-6h2zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' },
        { name: 'lock',          path: 'M18 8h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6v-2zM18 20h-12v-10h12v10zM12 17c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z' },
        { name: 'mail',          path: 'M22 6c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-12zM20 6l-8 4.99-8-4.99h16zM20 18h-16v-10l8 5 8-5v10z' },
        { name: 'notifications', path: 'M12 22c1.1 0 2-0.9 2-2h-4c0 1.1 0.9 2 2 2zM18 16v-5c0-3.070-1.63-5.64-4.5-6.32v-0.68c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5v0.68c-2.86 0.68-4.5 3.24-4.5 6.32v5l-2 2v1h16v-1l-2-2zM16 17h-8v-6c0-2.48 1.51-4.5 4-4.5s4 2.020 4 4.5v6z' },
        { name: 'person',        path: 'M12 6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zM12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
        { name: 'print',         path: 'M19 8h-1v-5h-12v5h-1c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3h-8v-3zM16 19h-8v-4h8v4zM20 15h-2v-2h-12v2h-2v-4c0-0.55 0.45-1 1-1h14c0.55 0 1 0.45 1 1v4z' },
        { name: 'save',          path: 'M17 3h-12c-1.105 0-2 0.895-2 2v14c0 1.105 0.895 2 2 2h14c1.1 0 2-0.9 2-2v-12l-4-4zM19 19h-14v-14h11.17l2.83 2.83v11.17zM12 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4h-9z' },
        { name: 'schedule',      path: 'M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7h-1.5v6l5.25 3.15 0.75-1.23-4.5-2.67z' },
      ],
    },
    components: {
      heading: 'Built once. Used everywhere.',
      intro: 'Every component is a Web Component — framework-agnostic by design. Here is a sample of what ships with Estrada.',
      buttonVariants: [
        { label: 'Primary',   bg: '#0061D6', color: '#FFFFFF', border: 'transparent' },
        { label: 'Secondary', bg: 'transparent', color: '#0061D6', border: '#0061D6' },
        { label: 'Tertiary',  bg: 'transparent', color: '#0061D6', border: 'transparent', underline: true },
        { label: 'Disabled',  bg: '#DBDEDE', color: '#A5ABAB', border: 'transparent', disabled: true },
      ],
      badgeVariants: [
        { label: 'Success', bg: '#0E855720', color: '#0E8557', border: '#0E855750' },
        { label: 'Warning', bg: '#FEC33C20', color: '#FEC33C', border: '#FEC33C50' },
        { label: 'Danger',  bg: '#FF4D4F20', color: '#FF4D4F', border: '#FF4D4F50' },
        { label: 'Info',    bg: '#0858C520', color: '#0858C5', border: '#0858C550' },
        { label: 'Neutral', bg: '#A5ABAB20', color: '#A5ABAB', border: '#A5ABAB50' },
        { label: 'Primary', bg: '#0061D620', color: '#0061D6', border: '#0061D650' },
      ],
    },
    metrics: [
      { value: '15+', label: 'Components' },
      { value: '150+', label: 'Icons' },
      { value: '80+', label: 'Color tokens' },
      { value: '5', label: 'Contributors' },
    ],
    impact: {
      heading: 'Consistency that compounds.',
      text: 'Since Estrada shipped, PJUS products share the same visual language for the first time. Design decisions made once — a button style, a status color, a spacing rhythm — now apply everywhere automatically. The token pipeline syncs with Figma, so designers work from the same source of truth as developers.\n\nChromatic runs on every PR, catching visual regressions before they reach users. The team ships faster because the foundation is solved.',
      bullets: [
        'Unified visual language across all PJUS products',
        'Framework-agnostic: consumed by React, Angular, and plain HTML apps',
        'Visual regression testing on every PR via Chromatic',
        'Figma-to-code token sync — one source of truth for design and dev',
      ],
    },
  },
  {
    slug: 'bosch-fleet',
    category: 'Mobile App',
    title: 'Bosch Fleet App',
    subtitle: 'A B2B mobile app that brought fleet maintenance management to the hands of drivers and fleet managers — published on the App Store with 30K+ downloads.',
    company: 'Bosch',
    period: '2020',
    challenge: {
      heading: 'Fleet maintenance trapped in spreadsheets.',
      text: 'Bosch\'s fleet maintenance operation depended on manual processes — phone calls, spreadsheets, and paper forms to schedule vehicle services across hundreds of vehicles. Fleet managers had no visibility into request status, drivers had no way to track their vehicles, and the Bosch service network had no centralized coordination.\n\nThe brief was to design a mobile app from scratch, as the sole designer, that would digitize the entire maintenance request lifecycle — from opening a ticket to approving a budget and confirming execution. The app had to be simple enough for drivers with no technical background, yet powerful enough for fleet managers overseeing large fleets.',
    },
    approach: {
      heading: 'Clarity over features.',
      text: 'The core insight was that this was a backoffice tool disguised as a consumer app. Users weren\'t looking for delight — they were trying to complete a task as fast as possible and get back to work. Every design decision was made with that constraint in mind.\n\nI designed around Bosch\'s brand identity — red as the primary action color, white backgrounds, clean typography — to create immediate familiarity for users already inside the Bosch ecosystem. The interface is intentionally minimal: no unnecessary chrome, no decorative elements. The visual weight goes where the decision needs to be made.',
      pillars: [
        {
          icon: 'Layers',
          title: 'Status-First Information Architecture',
          description: 'The home screen organizes requests by status — not by date or vehicle. Fleet managers think in terms of "what needs attention," not "what was created first." Color-coded status badges (9 states) make the list scannable at a glance.',
        },
        {
          icon: 'Zap',
          title: 'Progressive Disclosure in Forms',
          description: 'New requests collect only the information needed at each step — vehicle, service type, then availability. Showing all fields at once would overwhelm drivers. Breaking the form into steps reduced errors and increased completion rates.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Budget Transparency Before Execution',
          description: 'A dedicated budget review screen shows the full cost breakdown — parts and services itemized — before the manager approves. This gave fleet managers financial control they didn\'t have in the previous manual process.',
        },
        {
          icon: 'Code2',
          title: 'Inline KM Update',
          description: 'Mileage tracking is critical for preventive maintenance triggers. Instead of a buried settings screen, KM update is a top-level action accessible directly from the home FAB — because it\'s something drivers do constantly.',
        },
      ],
      screenshot: '/screenshots/bosch/home.png',
      screenshotAlt: 'Bosch Fleet App home screen showing maintenance request list',
    },
    screens: [
      {
        title: 'Login',
        description: 'Clean entry point with Bosch branding. Minimal fields — username and password only. A direct link to the Bosch support channel is always visible for users who get stuck.',
        image: '/screenshots/bosch/login.png',
      },
      {
        title: 'Home — Request List',
        description: 'The central dashboard. Requests sorted by status with color-coded badges. The FAB exposes the two most common actions — new request and KM update — without cluttering the list view.',
        image: '/screenshots/bosch/home.png',
      },
      {
        title: 'Status Lifecycle',
        description: 'A request flows through 9 states: Em Agendamento → Agendado → Documento em Aprovação → Agendado para Execução → Em Execução → Em Faturamento → Finalizado (or Cancelado / Reprovado). Each state has a distinct color and available actions, so users always know exactly where their vehicle is in the process.',
        image: '/screenshots/bosch/status.png',
      },
      {
        title: 'Budget Review',
        description: 'Before any service is executed, the manager sees an itemized breakdown — parts, quantities, prices, and services. Total is prominent. This single screen replaced email chains and phone approvals.',
        image: '/screenshots/bosch/orcamento.png',
      },
      {
        title: 'New Request',
        description: 'Step-by-step form: select vehicle, enter KM, choose service type (Preventive, Corrective, or Tires), then pick three availability windows. Offering three date options increases the chance of matching shop availability without back-and-forth.',
        image: '/screenshots/bosch/nova.png',
      },
      {
        title: 'Filter & Search',
        description: 'Managers handling large fleets need to find specific requests fast. Filters combine vehicle, status, type, and date — and the search field autocompletes plate numbers. The filtered result updates the list in real time.',
        image: '/screenshots/bosch/filtros.png',
      },
    ],
    metrics: [
      { value: '30K+', label: 'Downloads' },
      { value: '9', label: 'Status states' },
      { value: '1', label: 'Designer' },
      { value: '2020', label: 'Year shipped' },
    ],
    impact: {
      heading: 'From spreadsheets to 30,000 users.',
      text: 'The app launched on the App Store and was adopted across Bosch\'s fleet management operation in Brazil. What started as a backoffice digitization project reached 30,000+ downloads — a number that surprised the client and validated the investment in UX.\n\nThe full maintenance lifecycle — request, scheduling, budget approval, execution, and invoicing — moved from manual coordination to a single mobile interface.',
      bullets: [
        '30,000+ downloads on the App Store',
        'Full maintenance lifecycle digitized — from request to invoice',
        'Fleet managers gained real-time visibility across all vehicles',
        'Budget approval moved from phone/email to in-app review',
        'Designed end-to-end by a single designer in 2020',
      ],
    },
  },
  {
    slug: 'noz',
    category: 'Product Design',
    title: 'Noz',
    subtitle: 'A gamified corporate social platform — redesigned from an internal tool into a market-ready product used by 10+ companies.',
    company: 'ioasys',
    period: '2017–2018',
    challenge: {
      heading: 'Designing for two audiences at once.',
      text: 'Noz started as ioasys\'s own internal communication platform — a place for employees to share knowledge, celebrate milestones, and stay connected. Version 3 raised the stakes entirely: the company wanted to take Noz to market and sell it to other organizations.\n\nThat shift changed everything about the design brief. The product now had to work for generic corporate environments, not just ioasys\'s culture. It had to be polished enough to close sales deals. And it had to be delivered under intense stakeholder pressure — aggressive timelines, strong opinions, and high visibility inside the company.\n\nThe challenge was less about pixels and more about navigating that pressure while keeping the user experience at the center of every decision.',
    },
    approach: {
      heading: 'Make it feel human, not corporate.',
      text: 'Most internal communication tools look like enterprise software — cold, dense, and transactional. The bet with Noz V3 was the opposite: if we made the tool feel like a consumer app that employees actually wanted to open, engagement would follow.\n\nEvery design decision pushed against the corporate default. Illustrations instead of stock photos on the onboarding. A squirrel mascot with personality. Warm blue and amber instead of enterprise grays. Biometric login to reduce the daily friction of opening an internal tool. Tags and reactions to make the feed feel alive.\n\nThe gamification layer — "Nozes" as an in-app currency earned through engagement and spent in the internal store — was the mechanism that turned passive users into active contributors.',
      pillars: [
        {
          icon: 'Zap',
          title: 'Gamification at the Core',
          description: '"Nozes" (the in-app currency) created a direct incentive loop: create content → earn nozes → spend in the store. Employees could redeem nozes for real products — MacBooks, notebooks, electronics. This drove content creation without making it feel mandatory.',
        },
        {
          icon: 'Layers',
          title: 'Dual-Mode Design',
          description: 'Two distinct experiences: a mobile app for employees (feed, store, profile, events) and a web admin for managers (content management, engagement metrics, team oversight). Each mode had a clear, focused job — no feature bleeding between them.',
        },
        {
          icon: 'Code2',
          title: 'Frictionless Onboarding',
          description: 'The login screen offered Smart ID (biometric) alongside traditional login. For a tool people open every morning, removing the password step was a measurable UX win — lower drop-off, faster access, higher daily active rate.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Stakeholder Management as a Design Skill',
          description: 'With aggressive internal pressure to ship and strong opinions from leadership, the work was as much about communication and prioritization as it was about interface design. Decisions were documented, rationale was shared, and scope was protected.',
        },
      ],
      screenshot: '/screenshots/noz/admin.png',
      screenshotAlt: 'Noz admin dashboard showing publications management with engagement metrics',
    },
    screens: [
      {
        title: 'Onboarding & Login',
        description: 'The welcome screen sets the tone immediately — a warm illustration, the Noz tagline ("Se é coletivo, é Noz"), and two login paths. Offering Smart ID (biometric) alongside traditional login removes the biggest daily friction point for a tool people open every morning.',
        image: '/screenshots/noz/login-mobile.png',
      },
      {
        title: 'Mural — The Social Feed',
        description: 'The heart of Noz. A card-based feed where employees share knowledge, initiatives, and culture. Posts are image-first with tags for topic and location, driving discoverability across a distributed team. The design deliberately echoes consumer social apps — because familiarity reduces the learning curve.',
        image: '/screenshots/noz/mural.png',
      },
      {
        title: 'Post Detail & Comments',
        description: 'Individual posts show the full content with an emoji reaction bar and threaded comments. The author\'s name and role are always visible — reinforcing the human connection behind content. Engagement signals (reactions, comments) are the inputs that generate nozes for the author.',
        image: '/screenshots/noz/post.png',
      },
      {
        title: 'Employee Profile',
        description: 'Profiles go beyond titles and photos. Each person lists their bio, interests, and a "Pode te ajudar com" section — what they can help with. This turned the platform into an internal expertise directory, making it useful even for people who didn\'t post regularly.',
        image: '/screenshots/noz/perfil.png',
      },
      {
        title: 'Loja — The Internal Store',
        description: 'The store is where gamification becomes tangible. Employees spend accumulated nozes on real items — electronics, accessories, experiences. The balance is shown prominently ("Você tem 128.664 nozes"), making the reward feel concrete and motivating. Sections for "Ideal para você" and "Populares" apply e-commerce patterns to a corporate context.',
        image: '/screenshots/noz/loja.png',
      },
      {
        title: 'Admin Dashboard',
        description: 'Managers get a dedicated web interface with a full content management system — publishing, scheduling, drafts — plus per-post engagement scores (Alto/Normal/Baixo). The sidebar gives quick access to company metrics: active users, top content, team activity. This was the screen that closed sales deals.',
        image: '/screenshots/noz/admin.png',
      },
    ],
    metrics: [
      { value: '10+', label: 'Companies onboarded' },
      { value: '8K+', label: 'Monthly active users' },
      { value: '3x', label: 'Content volume vs V2' },
      { value: '72%', label: 'Weekly active rate' },
    ],
    impact: {
      heading: 'An internal tool that became a product.',
      text: 'Noz V3 shipped and ioasys took it to market. More than 10 companies adopted the platform, with engagement metrics tracked and fed back into the product backlog to guide future iterations. The weekly active user rate reached 72% — unusually high for an internal tool, where most platforms struggle to break 40%.\n\nThe design work held up commercially: the admin dashboard became a key asset in the sales process, giving prospects a clear picture of the value they\'d get. The lesson from this project was that stakeholder pressure, when navigated with clear rationale and documented decisions, doesn\'t have to compromise the work.',
      bullets: [
        '10+ companies onboarded after market launch',
        '72% weekly active user rate — well above industry average for internal tools',
        '3x increase in content volume compared to V2',
        'Gamification loop drove organic content creation without mandating participation',
        'Admin dashboard became a key sales asset for new client acquisition',
      ],
    },
  },
  {
    slug: 'us-platform',
    category: 'Product Design',
    title: 'US Platform',
    subtitle: 'The first 100% digital platform for buying precatórios in Brazil — designed with no benchmark, no back-office, and a single flow that closed R$5M+ in 8 months.',
    company: 'PJUS Investimentos',
    period: '2022–2023',
    challenge: {
      heading: 'No benchmark. No manual fallback. No precedent.',
      text: 'Precatórios are judicial debt obligations — government-owed debts that take years to pay out. PJUS buys them from the original creditors at a discount, giving those people immediate liquidity. It is a legitimate but deeply opaque financial asset. Most Brazilians have never heard of it. Nobody had ever built a fully digital acquisition flow for it.\n\nThe central UX challenge was not just explaining a complex product to a non-financial audience. It was compressing the entire cedente (seller) validation process into a single digital flow — without any back-office intervention. Traditional precatório operations rely on manual verification steps, human review, and physical documentation. The brief was to eliminate all of that and make it work entirely online.\n\nThat meant redesigning not just the interface, but the operational pipeline behind it. Every screen had to replace a back-office step.',
    },
    approach: {
      heading: 'One flow. Zero back-office.',
      text: 'With no benchmark to reference, the design process started from the ground up — mapping every validation requirement the legal and compliance teams needed, then finding the least friction way to collect each one digitally. The result was a single linear flow: CPF lookup → offer presentation → registration → document validation → acceptance.\n\nThe tradeoff was deliberate. Eliminating back-office steps reduced the cost of each operation, which meant PJUS could offer a lower deságio (discount) to clients — a better deal than competitors who relied on manual processes. The company accepted higher operational risk in exchange for speed and scale.\n\nThe partnership with XP Asset Management added credibility to a product category most users had never encountered. The co-branded header appeared on every authenticated screen, anchoring trust.',
      pillars: [
        {
          icon: 'Layers',
          title: 'CPF-First Entry Point',
          description: 'The flow starts with a single CPF input — not a landing page registration. The system validates the precatório automatically before asking for any personal information. Users who have nothing to sell never reach the form. This reduced abandonment and focused acquisition on qualified leads.',
        },
        {
          icon: 'Zap',
          title: 'Offer Before Commitment',
          description: 'The monetary offer is shown before registration — before the user creates an account or provides documents. Showing R$48K or R$76K on screen before asking for anything creates intent. It answers the only question the user has ("how much will I get?") at exactly the right moment.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Digital Cedente Validation',
          description: 'The registration flow captures CPF, full legal name, contact, and terms acceptance in a single session. Each field maps to a compliance requirement that previously required manual back-office review. The form is the back-office.',
        },
        {
          icon: 'Code2',
          title: 'Agents Dashboard',
          description: 'A separate dark-mode dashboard gave internal agents real-time visibility into the pipeline — total opportunities, accepted offers, and paid amounts by modality (Federal, Parceiro, Estadual). This visibility enabled PJUS to manage risk across a high-volume digital operation.',
        },
      ],
      screenshot: '/screenshots/us/homepage.png',
      screenshotAlt: 'US Platform homepage — PJUS precatório acquisition platform',
    },
    screens: [
      {
        title: 'Homepage',
        description: 'The landing page leads with the value proposition in plain language: "We anticipate precatórios and labor processes." The co-branded presence of XP Asset Management was a deliberate trust signal for users entering an unfamiliar financial transaction. A persistent "Precisa de ajuda?" CTA kept human support accessible throughout.',
        image: '/screenshots/us/homepage.png',
      },
      {
        title: 'Registration — Mobile',
        description: 'The form collects only what compliance requires: CPF (pre-filled from the lookup), legal name, email, phone, and password. Two explicit consent checkboxes for terms and privacy policy are required before proceeding. The "Mais informações" accordion lets hesitant users get context without leaving the screen.',
        image: '/screenshots/us/cadastro.png',
      },
      {
        title: 'Login — Desktop',
        description: 'A minimal authenticated entry point. CPF replaces email as the identifier — consistent with how Brazilians identify themselves in financial contexts. The "Não sou cliente da PJUS" link routes new users back to the offer flow without dead ends.',
        image: '/screenshots/us/login-desktop.png',
      },
      {
        title: 'Logged Area — Offers',
        description: 'The logged area presents the user\'s precatório offers in a horizontal card layout with the monetary value prominent. "Temos outras propostas para você" surfaces additional offers the user may not have known about. The personalized CTA ("Você está autorizado para nosso atendimento personalizado") moves qualified users toward direct agent contact.',
        image: '/screenshots/us/area-logada.png',
      },
      {
        title: 'Operations Dashboard',
        description: 'The internal dashboard was built for PJUS agents monitoring the pipeline in real time. Three KPIs dominate: R$97M in total opportunities, R$1B in accepted offers, R$397K paid. Below, a breakdown by modality (Federal, Parceiro, Estadual) gives operations managers the granularity to manage risk across a high-volume digital pipeline.',
        image: '/screenshots/us/dashboard.png',
      },
    ],
    metrics: [
      { value: 'R$5M+', label: 'Revenue in 8 months' },
      { value: '1st', label: 'Fully digital in Brazil' },
      { value: '8mo', label: 'From zero to market' },
      { value: '0', label: 'Back-office steps' },
    ],
    impact: {
      heading: 'R$5M in 8 months. Then a pivot.',
      text: 'The platform launched and the pipeline performed beyond projections. By eliminating back-office steps and making the process fully digital, PJUS was able to offer a lower deságio than competitors — a better deal for clients that drove acquisition. The product generated R$5M+ in revenue in under 8 months.\n\nThe same efficiency that drove performance also introduced risk. The company eventually pivoted the product — a strategic decision driven by risk management, not product failure. The digital pipeline, however, outlasted the pivot: the learnings from building zero back-office validation directly influenced how PJUS structured its subsequent operations.\n\nDesigning for a product category with no precedent required inventing both the interface and the process behind it. That is the kind of design work that moves metrics.',
      bullets: [
        'R$5M+ revenue generated in under 8 months',
        'First 100% digital precatório acquisition flow in Brazil',
        'Zero back-office steps — full cedente validation in a single digital session',
        'Lower deságio enabled by operational efficiency — better deal for clients',
        'Operations dashboard gave real-time pipeline visibility across R$1B+ in accepted offers',
      ],
    },
  },
  {
    slug: 'alaska',
    category: 'Mobile App',
    title: 'Alaska Asset Management App',
    subtitle: 'A financial education MVP designed to convert learners into investors — with a complete course system, gamification, and admin dashboard. Published in 2020.',
    company: 'Alaska Asset Management',
    period: '2020',
    challenge: {
      heading: 'Turn education into acquisition.',
      text: 'Alaska Asset Management is one of Brazil\'s most recognized investment funds. In 2020, they wanted to test a new acquisition hypothesis: if potential investors could learn about the fund\'s strategy and philosophy directly from their team, they would be more likely to allocate capital.\n\nThe brief was to design an MVP mobile app — a structured course platform branded to Alaska, with video lessons taught by the fund\'s own team. The target user was someone already curious about investing but not yet a client. The goal was to move them from curious to committed through education.\n\nThe UX challenge was making financial education feel engaging and worth completing — not another abandoned course app.',
    },
    approach: {
      heading: 'Progress, not content.',
      text: 'Financial education apps fail when they feel like homework. The design focused on a single insight: users need to feel like they are advancing toward something, not just consuming content. Every screen was built around momentum.\n\nThe course structure uses locked/unlocked modules — each completed lesson visually unlocks the next, creating a clear path forward. The Alaska Coins gamification layer adds a concrete reward at the end: complete 100% of the course and all tests, and you unlock exclusive content unavailable to the general public. The reward is knowledge, not a badge.\n\nThe video player screen is stripped of everything except the lesson — no distractions, skip controls, and a "Próximos conteúdos" section that previews what comes next, reducing the friction of returning for the next session.',
      pillars: [
        {
          icon: 'Layers',
          title: 'Progressive Module Unlock',
          description: 'Modules unlock sequentially as the user completes lessons. The visual lock/unlock state makes progress tangible and creates forward momentum. Users always know exactly where they are and what comes next.',
        },
        {
          icon: 'Zap',
          title: 'Alaska Coins — Earned, Not Given',
          description: 'Coins are only awarded for genuine completion: 100% course progress plus 100% on all tests. There is no shortcut. This design choice makes the reward meaningful and ensures users who earn it have actually absorbed the content.',
        },
        {
          icon: 'Code2',
          title: 'Focused Video Experience',
          description: 'The lesson screen removes all navigation chrome. The video is fullscreen with skip controls. Below it, the current lesson title and a "Próximos conteúdos" list creates context without interrupting focus. The "Avançar" CTA appears only when content is completed.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Admin Content Management',
          description: 'A companion dashboard let the Alaska team manage modules, create units, set up assessments, and track user progress — giving the fund full editorial control over the learning experience without technical dependency.',
        },
      ],
      screenshot: '/screenshots/alaska/curso.png',
      screenshotAlt: 'Alaska app course screen showing module progression with lock/unlock states',
    },
    screens: [
      {
        title: 'Home — Course Dashboard',
        description: 'The home screen picks up exactly where the user left off — showing the current lesson with a "Continuar" CTA. Below it, an audio module previews the next content, and the full module map gives a birds-eye view of overall progress. No friction, no decisions — just continue.',
        image: '/screenshots/alaska/home.png',
      },
      {
        title: 'Course — Module Map',
        description: 'The course screen presents modules as a visual grid with distinct lock states. Completed modules show a checkmark, the current module is highlighted in teal, and locked modules are grayed out. The "Alaska Secret" module sits at the top — exclusive content unlocked only by completing everything, creating a visible aspirational target from day one.',
        image: '/screenshots/alaska/curso.png',
      },
      {
        title: 'Lesson — Video Player',
        description: 'The video lesson screen is deliberately minimal. The player takes most of the screen with skip controls. Below: the lesson title, a collapsed description with "ver mais", and a list of upcoming content topics. This structure lets users scan what they are about to learn before committing to the video — reducing abandonment.',
        image: '/screenshots/alaska/aula.png',
      },
      {
        title: 'Alaska Coins — Gamification',
        description: 'The Alaska Coins screen explains the reward clearly: complete 100% of the course and score 100% on every test to unlock exclusive content reserved for a select group of users. The illustration reinforces abundance and reward. The Alaska logo grounds it in brand credibility.',
        image: '/screenshots/alaska/points.png',
      },
    ],
    metrics: [
      { value: 'MVP', label: 'Scope' },
      { value: '2020', label: 'Year shipped' },
      { value: '<100', label: 'Downloads' },
      { value: '100%', label: 'Flow designed' },
    ],
    impact: {
      heading: 'The product worked. The distribution did not.',
      text: 'The Alaska app was published on the App Store in 2020 with a complete course flow, gamification system, and admin dashboard. The design hypothesis — that structured financial education could drive fund acquisition — was never properly tested.\n\nThe app reached fewer than 100 downloads. Not because the product was broken, but because the marketing campaign behind it was minimal. Without distribution, even well-designed products stall. This is one of the clearest lessons from this project: UX is only half the equation. Acquisition is the other half, and no amount of good design compensates for the absence of a go-to-market strategy.\n\nThe design work, however, was complete and production-ready — from onboarding to gamification to admin tooling. The project is included here because not every case study should end with a success metric. Some of the most useful lessons come from products that shipped and did not scale.',
      bullets: [
        'Complete MVP delivered — course system, video player, gamification, admin dashboard',
        'Published on the App Store in 2020',
        'Under 100 downloads due to insufficient marketing investment',
        'Design hypothesis (education → acquisition) was valid but never fully tested at scale',
        'Key learning: distribution is a design problem too',
      ],
    },
  },
  {
    slug: 'vli-desembarque',
    category: 'Enterprise UX',
    title: 'VLI — Smart Ship Disembarkation',
    subtitle: 'A port operations platform for VLI Logística — replacing spreadsheets and paper forms with a structured digital system managing 389+ voyages, ship stability simulations, and multi-entity logistics coordination.',
    company: 'VLI Logística',
    period: '2019',
    challenge: {
      heading: 'Designing for a domain with no room for error.',
      text: 'VLI Logística operates one of Brazil\'s largest rail and port logistics networks. In 2019, the process of managing ship disembarkation at their terminals depended on manual calculations, spreadsheets, and physical documentation. Port engineers registered ship technical data — cargo hold positions, ballast tank capacities, hydrostatic tables — before each voyage, then ran stability calculations by hand to plan safe unloading sequences.\n\nThe system had to manage five interconnected entity types: Ships, Voyages (Escalas), Ports, Berths, and Products. Any change in one cascaded through the others. Users were port engineers and logistics operators with deep domain expertise and zero tolerance for software that slowed them down. Every field was a real technical measurement. Errors in data entry could compromise ship stability calculations with physical consequences.\n\nThe brief was to replace all of it with a single platform — precise, fast, and structured for the way port operators actually think.',
    },
    approach: {
      heading: 'Structure over simplicity.',
      text: 'For consumer products, the goal is to reduce cognitive load. For precision industrial tools, the goal is to sequence complexity intelligently — not to hide it, but to present the right information at the right moment.\n\nShip registration was designed as a 4-step wizard: basic technical data, cargo hold mapping, ballast tank configuration, and hydrostatic table input. Each step validates before advancing — preventing incomplete records from entering the simulation engine. Breadcrumb navigation on every screen maintains spatial context across a system where five entity types nest inside each other.\n\nThe simulation — the system\'s most consequential feature — uses a visual matrix cross-referencing cargo holds against ballast tanks, with a color-coded TRM (Trim) column: green below 95%, yellow 95–100%, red above 100%. This traffic-light system lets engineers scan a full disembarkation plan and identify stability risk at a glance. A contextual tutorial fires on first use, not on every use.',
      pillars: [
        {
          icon: 'Layers',
          title: 'Stepped Wizard with Forward Gates',
          description: 'Ship registration splits into 4 focused steps — ship details, cargo holds (porões), ballast tanks, and hydrostatic table. Each step validates before advancing. Partial records cannot enter the simulation engine. The progress indicator and next-step preview set expectations at every point.',
        },
        {
          icon: 'Zap',
          title: 'Color-Coded Stability Simulation',
          description: 'The simulation matrix crosses cargo hold loads against ballast tank capacities. The TRIM column uses a traffic-light system: green (<95%), yellow (95–100%), red (>100%). Engineers can scan hundreds of rows and immediately identify which disembarkation sequences are within safe limits.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Contextual Onboarding — First Use Only',
          description: 'The simulation opens with an opt-in tutorial on first use. Engineers who know the system skip it in one click; first-timers get a step-by-step walkthrough of the cargo load and ballast capacity inputs. The distinction between first-use guidance and recurring friction matters in a precision tool.',
        },
        {
          icon: 'Code2',
          title: 'Entity-Based Information Architecture',
          description: 'The sidebar maps directly to operational entities: Ships, Voyages, Ports & Berths, Products. No feature grouping, no dashboards. Users navigate to the thing they need — not to the feature that contains it. This mirrors how port operators think about their work.',
        },
      ],
      screenshot: '/screenshots/desembarque/lista-viagens.png',
      screenshotAlt: 'VLI Desembarque — voyage list showing 389 results with status tracking',
    },
    screens: [
      {
        title: 'Ship Registration — Step 1 of 4',
        description: 'The first wizard step captures core technical parameters: ship name, number of cargo holds, longitudinal midship position, ballast tank count, and hydrostatic table lines. The dot-based progress indicator and next-step preview ("Próximo passo") set clear expectations. No field is optional — all data is required for simulation accuracy.',
        image: '/screenshots/desembarque/navio.png',
      },
      {
        title: 'Cargo Hold Configuration',
        description: 'Step 2 maps each porão (cargo hold) by longitudinal position and distance from midship. The numbered grid mirrors how engineers think about hold layout across a ship. Checkboxes allow individual holds to be enabled or disabled per voyage — reflecting real-world operational configurations where not all holds are used in every voyage.',
        image: '/screenshots/desembarque/poroes.png',
      },
      {
        title: 'Voyage List — 389 Escalas',
        description: 'The voyage management screen tracks all port calls with ship name, ETB (Estimated Time of Berthing), cargo type, berth assignment, and status (Planejado, Não planejado, Em andamento). At 389 results across 8 pages, the system operates at production scale. Inline status dropdowns allow operators to update voyage state without leaving the list.',
        image: '/screenshots/desembarque/lista-viagens.png',
      },
      {
        title: 'New Voyage — Entity Linking',
        description: 'Creating a new escala requires linking five entities in a single step: ship, ETB date, product type, port, and berth. Each is a dropdown populated from the master data registered elsewhere in the system. The wizard format (1/3) indicates this is the first of three voyage setup steps — keeping the initial form focused.',
        image: '/screenshots/desembarque/detalhe-escala.png',
      },
      {
        title: 'Simulation — Cargo Load Matrix',
        description: 'The simulation presents a full matrix of cargo holds (rows) against ballast tanks (columns), showing load values in tonnes. A contextual tooltip explains what each value represents: "Esses valores representam a carga total que você pode puxar de um porão." The tutorial walks through each section of the matrix before the engineer begins entering values.',
        image: '/screenshots/desembarque/sim2.png',
      },
      {
        title: 'Simulation — Ballast Tank Capacity',
        description: 'The ballast tank capacity step shows each tank (WBTF1, WBTF2, WBTF3, WBTF14, ART 5, ASWS 8, AZRS, AEZARS) with percentage capacity inputs. The highlighted tank (20%) and tooltip make inline editing clear. Tank capacity directly affects the Trim calculation — the critical stability output of the simulation.',
        image: '/screenshots/desembarque/sim3.png',
      },
      {
        title: 'Simulation — TRM Color Legend',
        description: 'The final simulation step reveals the color-coded TRIM column. The legend explains the three safety states: green (TRM < 95%), yellow (95–100%), red (>100%). Engineers can now read the full disembarkation plan at a glance. A "Limite Trim" value (8.2) at the top-right anchors the safety threshold. "Concluir" commits the simulation.',
        image: '/screenshots/desembarque/sim4.png',
      },
      {
        title: 'UX Audit — Visual Inconsistencies',
        description: 'A systematic visual audit document was produced alongside the design — cataloging 7+ specific inconsistencies with annotated screenshots and corrections: misaligned breadcrumbs, incorrect icon colors, a typo ("lagitudinal" → "longitudinal"), and a dropdown opening in the wrong direction at the bottom of the screen. This document fed directly into the QA backlog.',
        image: '/screenshots/desembarque/inconsistencias.png',
      },
    ],
    metrics: [
      { value: '389+', label: 'Voyages tracked' },
      { value: '5', label: 'Entity types' },
      { value: '4-step', label: 'Registration wizard' },
      { value: '2019', label: 'Year shipped' },
    ],
    impact: {
      heading: 'From spreadsheets to a system at scale.',
      text: 'The VLI Desembarque platform replaced a manual, spreadsheet-based operation with a structured digital system managing hundreds of voyages, port registrations, and ship stability simulations. The voyage list at 389 records demonstrates that the system was adopted at production scale — not a pilot.\n\nThe simulation engine — the platform\'s core value — gave port engineers a visual tool to validate disembarkation safety plans before execution. The color-coded TRM system turned a complex calculation into a scannable decision: green means safe, red means recalculate.\n\nA systematic UX audit produced alongside the design cataloged visual inconsistencies and fed them directly into the development QA cycle — a practice that reflects design maturity beyond interface delivery.',
      bullets: [
        '389+ voyages tracked at production scale',
        'Color-coded TRM simulation replaced manual stability calculations',
        'Multi-step wizard with forward gates prevents invalid simulation inputs',
        'Five interconnected entity types managed in a single coherent system',
        'Systematic UX audit cataloged and resolved visual inconsistencies before launch',
      ],
    },
  },
  {
    slug: 'fieldscan',
    category: 'Product Design',
    title: 'Sensix — Fieldscan',
    subtitle: 'Precision agriculture platform redesigned from the ground up — starting with a formal heuristic evaluation of the existing product, then designing two new core features: Management Zones and CEA mapping.',
    company: 'Sensix',
    period: '2021–2022',
    challenge: {
      heading: 'Evaluate first. Design second.',
      text: 'Fieldscan is Sensix\'s precision agriculture platform — a tool for agronomists and farm managers to analyze satellite imagery, soil samples, and machine data across large rural properties. By the time I joined as lead designer, the product already existed and was in use. The team wasn\'t looking for a redesign. They needed someone to identify what was broken, prioritize it, and then build what was missing.\n\nThe first deliverable was not a screen — it was a complete heuristic evaluation of the existing product using Nielsen\'s 10 usability principles. Each heuristic was broken into specific checklist items scored Sim (pass), Não (fail), or N/A. The evaluation found failures concentrated in three areas: the system gave no feedback during loading states, the interface used inconsistent terminology across modules, and errors appeared without clear recovery paths.\n\nOnly after that evaluation was complete did design work begin — with two new features in scope: Zonas de Manejo (Management Zones) and CEA (Apparent Electrical Conductivity maps).',
    },
    approach: {
      heading: 'Diagnose. Document. Design.',
      text: 'The heuristic evaluation became the backbone of the design strategy. Each failed checklist item was a specific problem with a specific location in the interface. This gave the design work a clear priority stack — not based on opinions, but on documented usability failures against established principles.\n\nFor the new features, the constraints were clear: both Zonas de Manejo and CEA needed to work within the existing satellite map interface without disrupting the existing flow. The map was the product — any new feature had to layer over it cleanly, not compete with it.\n\nZonas de Manejo was designed as a polygon-drawing tool with a sidebar for zone configuration, farm selection, and zone parameters (class count, minimum area). CEA was a new map type — a form-driven creation flow that collected the data inputs before rendering the conductivity layer on the map. Both features followed the same modal-on-map pattern already established in the product.',
      pillars: [
        {
          icon: 'Layers',
          title: 'Heuristic Evaluation Before Design',
          description: 'All 10 Nielsen heuristics were evaluated with item-level checklists (Sim/Não/N/A). The evaluation produced a prioritized issue backlog — not a list of opinions, but documented failures with severity. Design decisions were grounded in this audit, not in assumptions.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Styleguide Documentation',
          description: 'A full styleguide was produced and documented inside Figma: color palette (6 tokens), typography hierarchy, button variants, icon library, input components, cards, modals, and drawers. This gave the development team a single reference for implementing both fixes and new features consistently.',
        },
        {
          icon: 'Zap',
          title: 'Management Zones — Polygon on Satellite',
          description: 'Zonas de Manejo allows agronomists to draw management zones directly on satellite imagery. A modal captures zone configuration (name, class count, minimum area in hectares). The populated state shows zones as labeled polygons overlaid on the map with a collapsible sidebar for navigation.',
        },
        {
          icon: 'Code2',
          title: 'CEA — New Map Type',
          description: 'Condutividade Elétrica Aparente (CEA) was a new analysis type requiring a dedicated creation flow. The form collects map name, farm, date, processing type, and field selection before the map renders. This kept the map interface clean while giving users full control over analysis parameters.',
        },
      ],
      screenshot: '/screenshots/fieldscan/heuristica-1-visibilidade.png',
      screenshotAlt: 'Fieldscan heuristic evaluation — Heuristic 1: System Status Visibility checklist',
    },
    screens: [
      {
        title: 'Heuristic Evaluation — System Status Visibility',
        description: 'The first of 10 evaluation documents. Each heuristic was broken into numbered checklist items scored Sim (green), Não (red), or N/A (yellow). Heuristic 1 found 4 failures: menu terminology not user-friendly, no loading time indication, no visibility of selected options in multi-select, and no status icons per page. Each failure became a backlog item with clear scope.',
        image: '/screenshots/fieldscan/heuristica-1-visibilidade.png',
      },
      {
        title: 'Heuristic Evaluation — Consistency & Standards',
        description: 'Heuristic 4 audited consistency across the platform — checking whether terminology, icons, and interaction patterns were used uniformly. Failures here generated the highest-priority fixes: inconsistent button labels, different icon styles across modules, and actions with the same visual weight but different consequences.',
        image: '/screenshots/fieldscan/heuristica-4-consistencia.png',
      },
      {
        title: 'Styleguide — Color Palette',
        description: 'The styleguide documentation starts with the color palette: Principal (#0DA72E — Sensix green), Erro (#F26F66), Cinza (#DBDBDB), Branco (#FFFFFF), Texto (#818181), and three Legenda variants for map overlays. Having tokens named by function (not by color) was a direct outcome of the consistency failures found in the heuristic eval.',
        image: '/screenshots/fieldscan/styleguide-cores.png',
      },
      {
        title: 'Management Zones — Empty State',
        description: 'The empty state for Zonas de Manejo shows a stacked-layers icon with instructional text and a clear "Novas Zonas" action. Empty states are one of the most neglected screens in most products — this one communicates what the feature does, why it matters, and what to do next, all without requiring the user to already understand the concept.',
        image: '/screenshots/fieldscan/zonas-criar.png',
      },
      {
        title: 'Management Zones — Zones on Map',
        description: 'The populated state shows management zones as white-outlined polygons drawn over satellite imagery. The left sidebar lists all zones with farm grouping and a "Criar Zonas" CTA anchored at the bottom. The map remains the primary canvas — the sidebar is supplementary, never dominant.',
        image: '/screenshots/fieldscan/zonas-populado.png',
      },
      {
        title: 'Management Zones — Map Visualization',
        description: 'The "Ver Mapas" view layers additional map data over the zones — showing soil variation, vegetation indices, or conductivity data per zone. A right-side panel allows variable selection and administrative options. This is the analytical output of the zones feature: once zones are drawn, they become the unit of analysis.',
        image: '/screenshots/fieldscan/zonas-mapa.png',
      },
      {
        title: 'CEA — New Map Creation',
        description: 'Condutividade Elétrica Aparente is a soil analysis technique that maps electrical conductivity — an indicator of soil texture, organic matter, and moisture variation. The creation flow collects the required inputs (map name, farm, date, processing type, and field/crop association) before the analysis renders. The sidebar form keeps the map visible throughout — users can see where their farm is while configuring the analysis.',
        image: '/screenshots/fieldscan/cea-1.png',
      },
    ],
    metrics: [
      { value: '10', label: 'Heuristics evaluated' },
      { value: '47', label: 'Issues cataloged' },
      { value: '2', label: 'New features designed' },
      { value: '9', label: 'Styleguide components' },
    ],
    impact: {
      heading: 'The audit became the roadmap.',
      text: 'The heuristic evaluation produced 47 cataloged issues across the 10 Nielsen principles — ranked by severity and mapped to specific interface locations. This gave the team a design roadmap grounded in evidence, not in subjective feedback. The development backlog was prioritized based on the audit findings, not on stakeholder preferences.\n\nThe two new features — Zonas de Manejo and CEA — extended the platform into precision soil analysis workflows that competitors handled in separate tools. By integrating them into the existing satellite map interface, Sensix gave agronomists a unified workspace for imagery analysis, soil data, and zone-based management.\n\nThe styleguide documentation closed the loop: for the first time, the development team had a formal reference for implementing interface decisions consistently — a direct outcome of the consistency failures found in the audit.',
      bullets: [
        '47 usability issues cataloged across 10 Nielsen heuristics',
        'Design backlog prioritized by heuristic severity — evidence over opinion',
        'Zonas de Manejo: polygon-based zone management directly on satellite maps',
        'CEA: new soil conductivity analysis map type integrated into existing workflow',
        '9-component styleguide produced to enforce consistency found missing in the audit',
      ],
    },
  },
  {
    slug: 'tm1',
    category: 'Product Design',
    title: 'TM1 — Virtual Events Platform',
    subtitle: 'A white-label virtual event platform designed during the pandemic — combining live streaming, virtual expo, networking, and content delivery in a single branded experience.',
    company: 'TM1',
    period: '2020',
    challenge: {
      heading: 'When physical events became impossible overnight.',
      text: '2020 forced every company with an annual conference, town hall, or industry event to answer the same question at the same time: where do we go now? The market was flooded with video call tools that could handle meetings, but nothing that could replicate the full experience of a live event — the hallway conversations, the expo floor, the branded stage, the materials library, the networking over coffee.\n\nTM1 was designed to fill that gap: a white-label platform that any company could deploy with their own branding, giving their event a proper digital home instead of a Zoom link. The first client, VPS Vale, had their countdown live at vpsvale2020.com — an "Encontro VPS" conference with hundreds of attendees from Brazil, Chile, Uruguay, India, Germany, and beyond.\n\nThe UX challenge was scope: six distinct modules (Streaming, Virtual Expo, Agenda, Materiais, Coffee, Help) had to feel like a single coherent experience on both desktop and mobile — under pandemic timelines.',
    },
    approach: {
      heading: 'One platform. Six experiences. One navigation.',
      text: 'The core design decision was the navigation bar. With six modules in scope, the top navigation became the spine of the product — Transmissão, Virtual Expo, Agenda, Materiais, Coffee, and profile. Each module is a distinct experience, but the navigation creates the sense of moving through a single event, not switching between separate tools.\n\nThe dark theme was deliberate: a black background makes streaming video look like a real broadcast, not a screen recording. It elevates the perceived production value of the event and keeps the attendee\'s attention on the content, not the interface.\n\nFor mobile, the countdown screen before event start — showing days, hours, minutes, and seconds in full-screen green typography — served as both a teaser and a brand moment. Attendees bookmarked the URL and returned when the counter hit zero.',
      pillars: [
        {
          icon: 'Zap',
          title: 'Live Streaming with Onboarding',
          description: 'The streaming screen opens with a personalized welcome modal — "Boas-vindas, [Seu Nome]!" — offering a tutorial video before the event begins. This reduced support requests by onboarding users proactively in the moment they arrived, before the stream started.',
        },
        {
          icon: 'Layers',
          title: 'Virtual Expo — Map + Discover',
          description: 'The Virtual Expo screen combined an interactive world map showing participant locations, an expo booth viewer, wallpaper downloads, Photo Opp QR codes, and a Word Cloud — all in one scrollable canvas. On the right: a real-time "Descobrir" panel to find and connect with other attendees by name or interest.',
        },
        {
          icon: 'Code2',
          title: 'Coffee — Virtual Networking',
          description: 'The Coffee module brought the hallway conversation online. Attendees could browse other participants, filter by interest, and initiate one-on-one or small group conversations. The metaphor of coffee was intentional — informal, low-stakes, time-limited. Not a meeting. A coffee.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Mobile-First Countdown',
          description: 'Before the event, the mobile experience was a full-screen countdown timer — 99 days, 23 hours, 59 minutes — with the event hashtag and social links. This was the first touchpoint for most mobile attendees: a branded, shareable teaser that drove social sharing before the event even started.',
        },
      ],
      screenshot: '/screenshots/tm1/800.png',
      screenshotAlt: 'TM1 Virtual Expo screen — participant world map, expo booth, Photo Opp and Word Cloud',
    },
    screens: [
      {
        title: 'Landing Page',
        description: '"Boas-vindas à nova era de eventos." The landing page uses concert photography to signal that this is not a webinar — it is an event. The tagline and CTA set the tone before the user logs in. The TM1 logo in the center, minimal copy, and full-bleed imagery create a theatrical entrance.',
        image: '/screenshots/tm1/000-cover.png',
      },
      {
        title: 'Access & Registration',
        description: 'A minimal email-based entry point. "Vamos começar?" keeps the tone conversational. The split layout — form on black left, event photography on right — maintains the event atmosphere even at the login gate. No password friction for returning users.',
        image: '/screenshots/tm1/100-lobby.png',
      },
      {
        title: 'Live Stream — Welcome Modal',
        description: 'On first access, a personalized modal greets the attendee by name and offers a platform tutorial. This was a proactive support decision: the tutorial surfaces exactly when users need it (first arrival) and disappears after — never shown again. The event stage is visible behind the modal, building anticipation.',
        image: '/screenshots/tm1/300-stream.png',
      },
      {
        title: 'Live Streaming View',
        description: 'The streaming screen is full-width video with minimal controls — the event is the focus. Below the player: a live attendee bar showing participants from Brazil, Chile, Uruguay, Spain, India, Germany. This social presence signal — seeing real names and countries — makes a remote event feel attended, not broadcast.',
        image: '/screenshots/tm1/400-feature.png',
      },
      {
        title: 'Virtual Expo — Full Experience',
        description: 'The expo screen is the most complex: a world map with participant pins (105 from Brazil alone), an expo booth with VPS branding, wallpaper downloads, a Photo Opp QR code, and a Word Cloud prompt — all on the left canvas. The right panel is a live directory of attendees with name search and interest filters. This is a virtual event floor.',
        image: '/screenshots/tm1/800.png',
      },
      {
        title: 'Help Center',
        description: 'A full-text search help center with FAQ accordion ("O que é a plataforma?", "O que posso fazer?", "Quem pode assistir?"). The "Powered by TM1" footer makes the white-label architecture visible. The persistent green "Ajuda" FAB ensures support is always one tap away from any screen in the platform.',
        image: '/screenshots/tm1/1000.png',
      },
      {
        title: 'Mobile — Countdown',
        description: 'The pre-event mobile screen is a full-screen countdown in oversized green typography: 99 days, 23 hours, 59 minutes, 59 seconds. The hashtag #encontrovps and social links below turn the waiting period into a sharing moment. This screen lived at vpsvale2020.com — a branded URL that worked as a campaign asset before the event.',
        image: '/screenshots/tm1/mobile-110.png',
      },
    ],
    metrics: [
      { value: '6', label: 'Modules designed' },
      { value: '2020', label: 'Pandemic-era launch' },
      { value: '100%', label: 'Responsive' },
      { value: 'White-label', label: 'Multi-tenant' },
    ],
    impact: {
      heading: 'A full event experience, not a video call.',
      text: 'TM1 launched as a white-label platform during the peak of the pandemic events crisis. The first deployment — VPS Vale\'s annual conference — brought together attendees from six countries on a branded platform purpose-built for the event, not retrofitted from a meeting tool.\n\nThe product covered the full event lifecycle: countdown and anticipation before, live streaming and networking during, and materials and recordings after. The "Powered by TM1" architecture meant each new client got a branded experience without starting from scratch.\n\nDesigning a platform of this scope — six distinct modules, desktop and mobile, white-label architecture — required holding the full product in mind simultaneously. Every decision in one module had implications for navigation, visual hierarchy, and brand adaptability across all others.',
      bullets: [
        'Six modules in a single coherent navigation: Streaming, Virtual Expo, Agenda, Materiais, Coffee, Help',
        'White-label architecture: each client event gets a fully branded deployment',
        'Participant presence signals (live names, countries) made remote events feel attended',
        'Mobile countdown created a pre-event sharing moment before the platform even launched',
        'Dark theme elevated streaming content — interface recedes, event takes center stage',
      ],
    },
  },
  {
    slug: 'nubank-underage',
    category: 'UX Research',
    title: 'Nubank Underage',
    subtitle: 'Qualitative research for Nubank mapping how Brazilian teenagers between 13 and 18 relate to money, banks, and financial independence — and what it means for product strategy.',
    company: 'Nubank',
    period: '2022',
    challenge: {
      heading: 'How does Nubank enter the life of someone who can\'t open an account yet?',
      text: 'The research question was precise: how can Nubank initiate and strengthen relationships with underage audiences by offering services and products designed for them? Nubank had massive brand recognition among adults but no specific product for teenagers — and the competition (Inter Conta Kids, Next Joy, NG Cash) was already moving in.\n\nThe brief required understanding who these users are, what their financial needs look like, how they perceive money and banks, and whether Nubank\'s current portfolio could serve them at all. The research had to map tensions — not just preferences — in their relationship with financial products, digital payments, and earning their first income.\n\nThis was not a feature discovery exercise. It was a cultural immersion into how a generation builds its relationship with money.',
    },
    approach: {
      heading: 'Anthropological methods. Not surveys.',
      text: 'The research used qualitative anthropological methodology — a deliberate choice over quantitative surveys. Understanding how teenagers relate to money requires context, contradiction, and narrative — not percentages.\n\nThe study included 12 adolescents between 13 and 18 years old from São Paulo and Bahia, conducted by anthropologists. Participants were selected across income levels, geographies, religions, and racial identities to reflect the real diversity of Brazilian youth. Alongside in-depth interviews, participants over 16 were given missions over two weeks — tasks designed to build an imagistic and symbolic repertoire beyond verbal discourse.\n\nThe missions captured what teenagers wouldn\'t think to say in an interview: how they photograph their first paycheck, what financial influencers they follow, how they photograph their own spending. Behavior, not opinion.',
      pillars: [
        {
          icon: 'Layers',
          title: 'The Biographical Framework',
          description: 'The core analytical lens: success for Gen Z is writing a biography that defies the circumstances. In a world with climate crisis, economic instability, pandemic, and political polarization, the question isn\'t "how do I change the world?" — it\'s "how do I make my own story work despite it?"',
        },
        {
          icon: 'Zap',
          title: 'The Financial Independence Model',
          description: 'A four-stage journey from 13 to 18: Autoconhecimento (discovering talents) → Planejamento (managing with parents\' money) → Autonomia (first own income) → Teste (low-risk financial experimentation). Each stage has distinct needs and product implications.',
        },
        {
          icon: 'Code2',
          title: 'Missions as Method',
          description: 'Participants over 16 completed 2-week photo and video missions — documenting their financial behaviors, desires, and frustrations in their own language. This captured authentic behavior: a teenager filming herself tracking expenses on a spreadsheet she built from a finance influencer\'s tip.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Competitive Landscape Mapping',
          description: 'The research mapped four direct competitors: Inter Conta Kids (parent-focused investment tool), Next Joy (Disney-themed dual app for parent + child), BB Conta Jovem (traditional bank for 12-21), NG Cash (youth language, not youth-specific). None had solved the independence vs. parental oversight tension.',
        },
      ],
      screenshot: '/screenshots/nubank/cover.svg',
      screenshotAlt: 'Nubank Underage Research 2022',
    },
    screens: [],
    metrics: [
      { value: '12', label: 'Participants' },
      { value: '13–18', label: 'Age range' },
      { value: '2', label: 'Cities (SP + BA)' },
      { value: '114', label: 'Research pages' },
    ],
    impact: {
      heading: 'Four insights that shaped the product brief.',
      text: 'The research produced four strategic findings that directly translated into product recommendations for Nubank.\n\n**1. The account must be theirs, not their parents\'.** Even when parents control the money, teenagers need the account to be in their name, with their card, in their app. The card with their name is a rite of passage — a physical symbol of the beginning of financial independence. Inter Conta Kids got this wrong by making the product feel like a parental investment tool.\n\n**2. Feature unlocking as a gamification model.** The independence journey is nonlinear but directional — teenagers move from "dinheiro do meu pai" to "meu dinheiro" over time. A product that unlocks features (Pix → debit card → app → credit with authorization) as the user demonstrates financial maturity mirrors exactly how they think about growing up.\n\n**3. Spending visualization is the gateway to financial education.** Teenagers don\'t want lectures. They want to see where their money went. A visual, clear expense history was the single most-cited functional need. 70% of parents give their children money regularly — and teenagers consistently said they\'d spend it more carefully if they could see it.\n\n**4. Nubank had awareness, but no product.** Every teenager had heard of Nubank. None had a product for them. The brand was modern and trustworthy — which is the hardest thing to build. The product gap was the opportunity.',
      bullets: [
        '12 adolescents, 2 cities, anthropological methods — behavior over opinion',
        'The biographical framework: Gen Z success = writing your own story despite adverse circumstances',
        'Four-stage financial independence model (13→15→18) with distinct product needs per stage',
        'Spending visualization identified as the highest-priority functional feature',
        'Competitive audit of 4 players: none solved independence vs. parental oversight',
        'Nubank had brand trust with zero underage product — the gap was the opportunity',
      ],
    },
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
