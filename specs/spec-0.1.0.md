# CorpusCriste — Spec v0.1.0

releasedAt: 2026-06-02
approvedBy: Grupo Deus É Amor

## Resumo

Release **técnica** (sem nova página de conteúdo): refatoração de componentes React, tokens em `lib/theme.ts`, primitivos UI, carrossel Home em CSS (sem polling JS), subcomponentes DEA Ajuda e guia [`CORPUS-CRISTE-ENGINEERING.md`](CORPUS-CRISTE-ENGINEERING.md).

**Critério:** zero regressão visual; e2e e specs inalterados em comportamento.

## Entregas

### Arquitetura

- `lib/theme.ts` — tokens e helpers de classe
- `components/ui/*` — BackgroundImageLayer, GradientOverlay, SectionTitle, ParagraphList, QuoteDisplay, CtaButtonGroup, ListingCard, HeroLogo
- `SectionRenderer`, `HeroSection`, `HeroBackgroundCarousel`, `ListingPageTemplate` refatorados
- `components/dea-ajuda/*` — 7 seções; `dea-ajuda/page.tsx` orquestrador
- Navbar/Footer usando `navLinkClass` / tokens
- Removido `components/ui/select.tsx` (não utilizado)
- Metadata default do layout alinhada ao Grupo DEA

### Performance

- Carrossel: animação CSS (`hero-carousel-fade`) em vez de `setInterval` + `useState`
- `HeroBackgroundCarousel` como Server Component

### Documentação

- [`specs/CORPUS-CRISTE-ENGINEERING.md`](CORPUS-CRISTE-ENGINEERING.md)
- Referência em `.cursor/rules/corpus-criste-base.mdc`

## Fora do escopo

- Alteração de textos em `specs/content/*.json`
- Novas rotas
- Conversão DEA Ajuda para template genérico

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 0.1.0)
