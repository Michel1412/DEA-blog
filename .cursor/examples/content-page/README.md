# Exemplo — nova página de conteúdo (ContentPageTemplate)

Referência para agentes ao criar páginas hero + seções no CorpusCriste. **Não é rota pública** — copie os arquivos para `specs/content/` e `app/`.

## Referência em produção

Página real mais recente: [`specs/content/nossa-senhora-de-fatima.json`](../../../specs/content/nossa-senhora-de-fatima.json) e [`app/titulos-nossa-senhora/nossa-senhora-de-fatima/page.tsx`](../../../app/titulos-nossa-senhora/nossa-senhora-de-fatima/page.tsx).

## Checklist

1. Copiar `content.example.json` → `specs/content/{slug}.json` (ajustar `slug`, `meta`, `hero`, `sections`)
2. Copiar `page.example.tsx` → `app/titulos-nossa-senhora/{slug}/page.tsx` (ou pasta equivalente)
3. Registrar slug em `lib/specs/types.ts` + `lib/specs/loader.ts`
4. Adicionar rota em `specs/routes.json` com `parent` se for submenu
5. Adicionar card em `specs/content/titulos-nossa-senhora.json` ou `ministerios.json`
6. Imagem em `public/images/` e referência como `/images/...` no hero
7. Rodar `npm run test:specs`, `npm run build`, `CI=1 npm run test:e2e`

## Tipos de página

| Caso | Template | Listagem |
|------|----------|----------|
| Título mariano / devoção | `ContentPageTemplate` compact | `titulos-nossa-senhora.json` |
| Índice de seção | `ListingPageTemplate` | — |
| Ministério padrão (hero + cards) | `ContentPageTemplate` compact | `ministerios.json` |

## Exceções (não usar este exemplo)

- **DEA Ajuda** e **Perseverança** usam `components/ministry-landing/` — ver `specs/content/dea-ajuda.json` e `perseveranca.json`
- Carrossel no hero: ver `.cursor/rules/corpus-criste-carousels.mdc`

## Regras

- `.cursor/rules/corpus-criste-base.mdc`
- `.cursor/rules/corpus-criste-pages.mdc`
- `specs/CORPUS-CRISTE-ENGINEERING.md`
