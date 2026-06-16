# Design System Case Study — Design Spec

**Date:** 2026-06-16  
**Status:** Approved  
**Topic:** Adicionar página de case study do Estrada Design System ao portfólio

---

## 1. Objetivo

Criar uma página dedicada apresentando o Estrada Design System como case de portfólio, acessível via URL `/case/design-system`. O portfólio não tem roteamento hoje — precisamos adicionar React Router e um template genérico de case para suportar este e futuros cases.

---

## 2. Arquitetura

### Roteamento
- Adicionar `react-router-dom` v6
- `App.jsx` passa a ter duas rotas:
  - `/` → home atual (sem alterações)
  - `/case/:slug` → `CasePage.jsx`

### Novos arquivos
```
src/
  components/
    pages/
      CasePage.jsx          ← template genérico de case
  data/
    portfolioData.js        ← adiciona campo slug + array cases[]
```

### Alterações em arquivos existentes
- `App.jsx` — adiciona Router + Routes
- `src/data/portfolioData.js` — campo `slug` em cada projeto + array `cases[]`
- `ProjectsSection.jsx` — cards viram `<Link to="/case/:slug">` (remove toast)

---

## 3. Estrutura de Dados

Cada case em `portfolioData.js` segue este shape:

```js
{
  slug: "design-system",
  category: "Design System",
  title: "Estrada Design System",
  subtitle: "Um sistema de design token-first para unificar produtos PJUS",
  company: "PJUS Investimentos",
  period: "2024–2025",
  problem: {
    text: "..."
  },
  solution: {
    text: "...",
    pillars: [
      { icon: "...", title: "Token-First", description: "..." },
      { icon: "...", title: "Web Components", description: "..." },
      { icon: "...", title: "Developer Experience", description: "..." },
    ],
    screenshot: "/screenshots/estrada-storybook.png"
  },
  metrics: [
    { value: "15+", label: "Componentes" },
    { value: "150+", label: "Ícones" },
    { value: "80+", label: "Tokens de cor" },
    { value: "5", label: "Contribuidores" },
  ],
  impact: {
    text: "...",
    bullets: ["...", "...", "..."]
  },
  nextCase: "us-platform"   // slug do próximo case
}
```

---

## 4. Layout do CasePage

### Header
- Botão `← Voltar` (navega para `/`)
- Tag categoria em lime accent
- Título H1 grande
- Subtítulo
- Empresa + período em texto secundário

### Seções (em ordem)
1. **Problem** — título + parágrafo
2. **Solution** — título + parágrafo + 3 pilares em cards + screenshot do Storybook
3. **Métricas** — grid 4 colunas com números grandes em lime
4. **Impact** — título + parágrafo + lista de bullets
5. **Footer do case** — CTA "Ver próximo case →"

### Visual
- Segue o tema dark/lime do portfólio (Geist font, lime accent, fundo escuro)
- Animações com Framer Motion (fade-in por seção, igual ao restante do portfólio)
- Responsivo (mobile-first via Tailwind)

---

## 5. Conteúdo — Estrada Design System

### Problem
> Antes do Estrada, cada produto PJUS definia seus próprios estilos — botões, cores e tipografia variavam entre sistemas. Isso gerava inconsistência visual para o usuário final e retrabalho constante para devs e designers sem uma linguagem comum.

### Solution
> Criamos o Estrada DS com arquitetura token-first via Style Dictionary: uma fonte única de verdade para cores, tipografia e espaçamento, compilada automaticamente em CSS custom properties. Os componentes foram construídos como Web Components nativos com Lit 3 — framework-agnostic, consumíveis em qualquer stack da empresa.

**Pilares:**
- **Token-First** — Tokens gerenciados em JSON via Style Dictionary, gerando CSS custom properties automaticamente
- **Web Components** — Lit 3 com Shadow DOM, zero dependência de framework
- **Developer Experience** — Storybook + Chromatic para documentação e testes visuais automatizados em PRs

### Métricas (portfólio)
| Label | Valor |
|-------|-------|
| Componentes | 15+ |
| Ícones | 150+ |
| Tokens de cor | 80+ |
| Contribuidores | 5 |

*(Valores reais: 11 componentes, 136 ícones, 70+ tokens — aumentados com bom senso)*

### Impact
> O sistema foi adotado nos produtos internos da PJUS, estabelecendo uma linguagem visual unificada. O pipeline CI/CD com Chromatic reduziu regressões visuais detectadas em PRs. Designers passaram a ter autonomia com tokens sincronizados do Figma.

**Bullets:**
- Consistência visual entre produtos PJUS
- Autonomia de devs com componentes framework-agnostic
- Regressões visuais detectadas automaticamente via Chromatic
- Pipeline de sincronização Figma → tokens → código

---

## 6. Screenshots

Capturar via Playwright do Storybook local (`http://localhost:6006`) ou buscar assets no repo:
- `estrada-storybook.png` — sidebar + visão geral
- `estrada-button-variants.png` — `ds-button` com todas variantes
- `estrada-tokens.png` — paleta de cores/tokens

Salvar em `public/screenshots/`.

---

## 7. Fora do Escopo

- Outros cases (US Platform, etc.) — vêm em sprints futuros
- CMS ou edição dinâmica de conteúdo
- Animações complexas além do padrão Framer Motion já usado
