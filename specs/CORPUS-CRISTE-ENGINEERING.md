# CorpusCriste — Guia de engenharia (agentes)

Documento de contexto para implementações técnicas. **Não alterar o resultado visual** sem aprovação explícita.

## Princípios

1. **Conteúdo em JSON** (`specs/content/*.json`) — textos, rotas de listagem, hero.
2. **UI em componentes** — `components/ui` (primitivos), `components/content` (templates), `components/layout`, `components/ministry-landing` (ministérios custom).
3. **`page.tsx` fino** — `loadContent` + template; sem JSX de seções.

## Hierarquia de pastas

```
components/ui/          → primitivos reutilizáveis (BackgroundImageLayer, CtaButtonGroup, …)
components/content/   → templates e renderers de specs
components/layout/    → PageShell, Navbar, Footer
components/ministry-landing/ → DEA Ajuda e Perseverança (layout 7 seções)
lib/theme.ts          → tokens e classes compostas (cn)
lib/specs/            → tipos, loader, nav
```

## Server vs Client

| Usar `'use client'` | Manter Server Component |
|---------------------|-------------------------|
| Navbar (menu mobile, pathname) | ContentPageTemplate, HeroSection |
| — | HeroBackgroundCarousel (CSS puro, sem estado) |
| — | SectionRenderer, ListingPageTemplate |

**Regra:** adicionar client apenas quando houver estado, efeitos ou hooks de navegação.

## O que NÃO fazer

- Colocar hero, cards ou CTAs inline em `app/**/page.tsx` (exceto orquestrar páginas ministry-landing).
- Hardcodar link para DEA Ajuda em componentes genéricos (`SectionRenderer`, `Footer` de conteúdo).
- Introduzir cores hex novas sem passar por `lib/theme.ts` ou `app/globals.css`.
- Converter DEA Ajuda ou Perseverança para `ContentPageTemplate` — usam ministry-landing.
- `style={{ backgroundImage: … }}` em páginas — usar `BackgroundImageLayer`.
- Gradiente Instagram inline — usar classe `bg-instagram-gradient` em `globals.css`.
- Adicionar componentes shadcn/ui não usados (ex.: select removido em v0.1.0).

## O que fazer

- Novos CTAs: estender schema em `lib/specs/types.ts` + `CtaButtonGroup` / `OutlineGoldLink` / `InstagramCtaButton`.
- Fundos: `BackgroundImageLayer` + `GradientOverlay` quando houver overlay JSON.
- Carrossel Home: `backgroundImages` no hero JSON; `HeroBackgroundCarousel` (CSS, sem `setInterval`).
- Imagens hero: `priority` só na primeira slide; demais lazy via Next/Image.
- Preservar `data-testid` existentes ao refatorar.
- Validar: `npm run test:specs`, `npm run build`, `CI=1 npm run test:e2e`.

## Tokens (`lib/theme.ts`)

- `goldText`, `surfaceCardDefault`, `heroOverlayDefault`, `outlineGoldButtonClass`, `navLinkClass`, etc.
- Sombras: classe `shadow-card` em `globals.css` (equivalente ao box-shadow dos cards).

## Ministry landing (DEA Ajuda, Perseverança)

- Rotas: `/ministerios/dea-ajuda`, `/ministerios/perseveranca`
- Componentes: `components/ministry-landing/MinistryLanding*.tsx`
- Schema: `ministryLandingContentSchema` em `lib/specs/types.ts`
- `page.tsx` apenas compõe seções — não duplicar markup na page.
- Hero: título com brilho dourado (`ministryNameGlow`); sem badge circular.
- Vídeo: opcional no JSON (DEA Ajuda sim; Perseverança não).

## Novas páginas de conteúdo

Seguir `.cursor/rules/corpus-criste-pages.mdc` e `corpus-criste-versions.mdc` (releases `0.0.x`).

## Versionamento

- `0.0.x` — páginas de conteúdo
- `0.1.0+` — marcos de engenharia/refatoração (ver `spec-0.1.0.md`)

Referência ativa: `specs/version.json` → `specFile`.
