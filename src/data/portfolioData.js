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
  ,
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
