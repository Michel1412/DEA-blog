# CorpusCriste — Spec v0.0.1

releasedAt: 2026-06-01
approvedBy: Grupo Deus É Amor

## Resumo

Esta versão adiciona a página **Nossa Senhora em Medjugorje** na seção Títulos de Nossa Senhora,
usando o modelo aprovado `ContentPageTemplate` com imagem de fundo local e
documentação da política de versionamento (cada versão `0.0.x` = uma nova página).

## Entregas

1. Página `/titulos-nossa-senhora/nossa-senhora-medjugorje` com conteúdo sobre as aparições
2. Imagem de fundo em `public/images/nossa-senhora-medjugorje.png`
3. Registro em `routes.json`, `titulos-nossa-senhora.json`, `types.ts` e `loader.ts`
4. Regra Cursor `corpus-criste-versions.mdc` — política de versionamento
5. Atualização de README, checklist e `version.json`

## Política de versionamento

Cada versão `0.0.x` adiciona **exatamente uma nova página** de conteúdo.
Consulte `.cursor/rules/corpus-criste-versions.mdc` para o checklist completo.

| Versão | Página adicionada |
|--------|-------------------|
| 0.0.0 | Baseline: templates, navbar, páginas-modelo |
| 0.0.1 | Nossa Senhora em Medjugorje |

## Rotas desta versão (novas/alteradas)

| Rota | Tipo |
|------|------|
| /titulos-nossa-senhora/nossa-senhora-medjugorje | ContentPageTemplate compact (NOVA) |

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 0.0.1)
