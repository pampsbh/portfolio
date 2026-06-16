# Case Page — Expanded Design Spec

**Date:** 2026-06-16  
**Status:** Approved  
**Topic:** Expand Design System case page — English copy, tokens, icons, components

---

## 1. Goal

Rewrite the Estrada Design System case page in English with product-driven narrative ("we made this decision because the product needed X"), and add three new visual sections showcasing real design tokens, icons, and component previews — all rendered as static JSX + Tailwind, no external dependencies.

---

## 2. Files Changed

| Action | File |
|--------|------|
| Modify | `src/data/portfolioData.js` — update `cases[0]` with new English content + tokens/icons/components data |
| Modify | `src/components/pages/CasePage.jsx` — add TokensSection, IconsSection, ComponentsSection |

No new files needed — data stays in `portfolioData.js`, rendering stays in `CasePage.jsx`.

---

## 3. New Page Structure

```
Header (category tag, title, subtitle, company · period)
01 — The Challenge
02 — Approach  (3 pillars + Storybook screenshot)
03 — Design Tokens  [NEW]
04 — Iconography    [NEW]
05 — Components     [NEW]
06 — By the Numbers (metrics grid)
07 — Impact
Footer CTA
```

---

## 4. English Copy

### Header
- **category:** Design System
- **title:** Estrada Design System
- **subtitle:** A token-first design system built to unify every PJUS product — without locking teams into a single framework.
- **company:** PJUS Investimentos · 2024–2025

### 01 — The Challenge

**Section heading:** Multiple products. No shared language.

**Body:**
> PJUS operates across several internal products — each built by different teams, at different speeds. Without a shared visual foundation, every interface diverged. Buttons looked different across screens. Spacing was arbitrary. Color carried no consistent meaning. As the product suite grew, so did the cost of inconsistency: more design decisions to repeat, more developer time spent on basics, more user confusion at handoff points.
>
> The challenge wasn't just aesthetic. It was architectural. Any solution had to work across every stack the company might use — React, Angular, plain HTML — without forcing a migration. It had to be maintainable by a small team. And it had to scale as the product grew.

### 02 — Approach

**Section heading:** One source of truth. Zero framework lock-in.

**Body:**
> We built Estrada around a single principle: decisions made once should propagate everywhere automatically. That meant starting with design tokens — not components. Every color, size, and spacing value lives in JSON, processed by Style Dictionary into CSS custom properties. Change a token, and every component updates.
>
> For components, we chose Web Components with Lit 3. Not because it was trendy — because it was the only option that let any PJUS team consume the system without adopting a new framework. Shadow DOM encapsulation meant styles couldn't leak. HTML attributes as props meant any codebase could drive the components without a build step.

**Pillars:**
1. **Token-First Architecture** — Design decisions live in JSON tokens, compiled to CSS custom properties via Style Dictionary. One change propagates to every component automatically.
2. **Framework-Agnostic Components** — 15+ Web Components built with Lit 3 and Shadow DOM. Works in React, Angular, or plain HTML — no adapter layer needed.
3. **Automated Quality Gates** — Storybook documents every state. Chromatic catches visual regressions on every PR before they reach production.

### 03 — Design Tokens (section heading: "Decisions encoded as data")

**Intro:** *Every visual decision in Estrada starts as a token — a named value that can be referenced, overridden, and updated in one place.*

**Subsections:**
- **Color** — brand, status, and neutral palette
- **Typography** — 8-step type scale
- **Spacing** — 6-step 4px-base grid

### 04 — Iconography (section heading: "150+ icons. One pipeline.")

**Intro:** *SVG files are automatically compiled into a web font via a Vite plugin — reducing HTTP requests and enabling icon rendering with a single CSS class.*

Grid of 24 real icons from the Estrada repo.

### 05 — Components (section heading: "Built once. Used everywhere.")

**Intro:** *Every component is a Web Component — framework-agnostic by design. Here's a sample of what ships with Estrada.*

Show: Button variants, Badge variants, Card example.

### 06 — By the Numbers
- **15+** Components
- **150+** Icons
- **80+** Color tokens
- **5** Contributors

### 07 — Impact

**Section heading:** Consistency that compounds.

**Body:**
> Since Estrada shipped, PJUS products share the same visual language for the first time. Design decisions made once — a button style, a status color, a spacing rhythm — now apply everywhere automatically. The token pipeline syncs with Figma, so designers work from the same source of truth as developers.
>
> Chromatic runs on every PR, catching visual regressions before they reach users. The team ships faster because the foundation is solved.

**Bullets:**
- Unified visual language across all PJUS products
- Framework-agnostic: consumed by React, Angular, and plain HTML apps
- Visual regression testing on every PR via Chromatic
- Figma-to-code token sync — one source of truth for design and dev

---

## 5. Token Data (hardcoded in portfolioData.js)

### Colors
```js
colors: [
  // Brand
  { name: 'Primary', hex: '#0061D6', group: 'Brand' },
  { name: 'Secondary', hex: '#2B313B', group: 'Brand' },
  { name: 'Contrast', hex: '#0D4D9B', group: 'Brand' },
  // Status
  { name: 'Success', hex: '#0E8557', group: 'Status' },
  { name: 'Warning', hex: '#FEC33C', group: 'Status' },
  { name: 'Danger', hex: '#FF4D4F', group: 'Status' },
  { name: 'Info', hex: '#0858C5', group: 'Status' },
  // Gray
  { name: 'Gray 50', hex: '#F7F7F7', group: 'Neutral' },
  { name: 'Gray 100', hex: '#DBDEDE', group: 'Neutral' },
  { name: 'Gray 200', hex: '#A5ABAB', group: 'Neutral' },
  { name: 'Gray 300', hex: '#717979', group: 'Neutral' },
  { name: 'Gray 400', hex: '#4D5858', group: 'Neutral' },
  { name: 'White', hex: '#FFFFFF', group: 'Neutral' },
  { name: 'Black', hex: '#0A0A0A', group: 'Neutral' },
]
```

### Typography
```js
typeScale: [
  { name: 'H1', size: '40px', weight: '700' },
  { name: 'H2', size: '28px', weight: '700' },
  { name: 'H3', size: '24px', weight: '600' },
  { name: 'H4', size: '20px', weight: '600' },
  { name: 'H5', size: '16px', weight: '600' },
  { name: 'Text 1', size: '16px', weight: '400' },
  { name: 'Text 2', size: '14px', weight: '400' },
  { name: 'Text 3', size: '12px', weight: '400' },
]
```

### Spacing
```js
spacingScale: [
  { name: 'sm',  value: '4px',  px: 4  },
  { name: 'md',  value: '8px',  px: 8  },
  { name: 'lg',  value: '16px', px: 16 },
  { name: 'xl',  value: '24px', px: 24 },
  { name: 'xxl', value: '32px', px: 32 },
]
```

---

## 6. Icons Data (24 icons, SVG paths from Estrada repo)

Icons to show (real SVG `<path>` values from `assets/images/icons/default/`):
add, analytics, arrow_back, arrow_forward, attach_money, calendar, cancel, check, check_circle, chat, credit_card, delete, edit, file_download, filter_alt, home, info, lock, mail, notifications, person, print, save, schedule

Each rendered as:
```jsx
{ name: 'add', path: 'M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6z' }
```

All icons use `viewBox="0 0 24 24"`.

---

## 7. Components Data

### Button variants
```js
buttonVariants: [
  { label: 'Primary',   className: 'bg-[#0061D6] text-white border-transparent' },
  { label: 'Secondary', className: 'bg-transparent text-[#0061D6] border-[#0061D6]' },
  { label: 'Tertiary',  className: 'bg-transparent text-[#0061D6] border-transparent underline' },
  { label: 'Disabled',  className: 'bg-[#DBDEDE] text-[#A5ABAB] border-transparent cursor-not-allowed' },
]
```

### Badge variants
```js
badgeVariants: [
  { label: 'Success', className: 'bg-[#0E8557]/15 text-[#0E8557] border-[#0E8557]/30' },
  { label: 'Warning', className: 'bg-[#FEC33C]/15 text-[#FEC33C] border-[#FEC33C]/30' },
  { label: 'Danger',  className: 'bg-[#FF4D4F]/15 text-[#FF4D4F] border-[#FF4D4F]/30' },
  { label: 'Info',    className: 'bg-[#0858C5]/15 text-[#0858C5] border-[#0858C5]/30' },
  { label: 'Neutral', className: 'bg-[#A5ABAB]/15 text-[#A5ABAB] border-[#A5ABAB]/30' },
  { label: 'Primary', className: 'bg-[#0061D6]/15 text-[#0061D6] border-[#0061D6]/30' },
]
```

---

## 8. CasePage Rendering Notes

- **TokensSection:** Three subsections in tabs or stacked: Colors (swatch grid), Typography (text rows), Spacing (bar rows). Stacked (no tabs) to keep it simple and avoid state.
- **IconsSection:** 6-column grid on desktop, 4-column on mobile. Each cell: SVG + name in `font-mono text-[10px]`. Hover: icon turns accent color.
- **ComponentsSection:** Three subsections stacked. Each has a dark panel (`bg-elevated rounded-2xl border border-white/10 p-8`) with the components rendered inside on a slightly lighter background.
- All new sections use the same `fadeUp` motion variant already defined in CasePage.

---

## 9. Out of Scope

- Tabs/accordion for token sections (stacked is simpler, YAGNI)
- All 136 icons (24 is enough to show the system)
- Interactive component states (hover, focus) — static display only
- All 27 estado colors in the token section — show brand + status + gray only
