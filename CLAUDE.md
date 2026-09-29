# Portfolio — Igor Vilar

## Stack
- React 18 + Vite 4 + React Router v6
- TailwindCSS + Radix UI + Framer Motion
- SPA com roteamento client-side

## Estrutura
- `src/data/portfolioData.js` — toda a data do site (projetos, cases, experiências)
- `src/components/pages/CasePage.jsx` — template genérico de case study
- `src/components/pages/HomePage.jsx` — home
- `src/components/sections/` — seções da home
- `public/.htaccess` — configuração de cache (editar aqui, nunca no dist)

## Deploy

### Manual (FTP)
```bash
npx vite build
cp -r public/screenshots dist/screenshots
# Upload dist/ → raiz do FTP (a conta FTP já começa em public_html/)
# Host: ftp://89.116.115.253  Port: 21  (plano Unlimited, migrado em 2026-09-29)
# User: conta FTP "deploy" do igorvilar.com.br (ver FTP_USERNAME)
# Dir:  / (raiz da conta = domains/igorvilar.com.br/public_html)
```

### Automático (GitHub Actions)
Push para `main` → build + FTP automático.

Secrets necessários no GitHub (`github.com/pampsbh/portfolio → Settings → Secrets`):
- `FTP_USERNAME` → usuário da conta FTP "deploy" no plano Unlimited
- `FTP_PASSWORD` → senha FTP da Hostinger

### Importante sobre cache
- O site usa LiteSpeed no Hostinger
- O `public/.htaccess` tem `no-store` para `index.html` — não mudar
- Se o site parecer desatualizado após deploy: hard refresh (`Ctrl+Shift+R`) ou aba anônima
- Para limpar cache do servidor: Hostinger → Desempenho → Cache → Limpar

## Produção
- URL: https://igorvilar.com.br
- GitHub: https://github.com/pampsbh/portfolio
- FTP: 89.116.115.253 (raiz da conta FTP = public_html do site)

## Figma
- Conta: igorvilaralmeida@gmail.com (Igor Costa)
- API token: variável de ambiente `FIGMA_TOKEN` (não commitar)

## Cases de portfólio
- `/case/design-system` → Estrada Design System (PJUS)
- Próximos: US Platform, outros projetos PJUS

## Design System (Estrada)
- Repo local: `C:\Users\igor.costa\source\repos\Estrada`
- Azure DevOps: dev.azure.com/PjusInvest/Plataforma%20US/_git/Estrada
- Storybook HML: https://estradads.hml.pjus.com.br/docs/storybook
