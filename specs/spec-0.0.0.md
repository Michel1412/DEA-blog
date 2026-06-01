# CorpusCriste — Spec v0.0.0

releasedAt: 2026-06-01
approvedBy: Grupo Deus É Amor

## Resumo

Esta versão estabelece o modelo aprovado de páginas editáveis por JSON,
navbar horizontal com submenus, páginas-template de referência e
documentação para agentes Cursor.

## Entregas

1. Componentes de template (PageShell, ContentPageTemplate, SectionRenderer, ListingPageTemplate)
2. Refatoração das páginas existentes para usar templates
3. Navbar horizontal: Home, Títulos de Nossa Senhora (dropdown), Ministérios (dropdown)
4. Páginas-modelo: /titulos-nossa-senhora/template, /ministerios/template
5. Regras Cursor em .cursor/rules/
6. Testes e checklist atualizados

## Modelo aprovado

- Páginas de conteúdo: ContentPageTemplate + JSON em specs/content/
- Páginas de listagem: ListingPageTemplate + JSON
- Exceção: DEA Ajuda (layout custom, não usar template genérico)
- Sempre copiar de titulos-nossa-senhora-template ou ministerios-template

## Rotas desta versão

| Rota | Tipo |
|------|------|
| / | ContentPageTemplate |
| /titulos-nossa-senhora | ListingPageTemplate |
| /titulos-nossa-senhora/nossa-senhora-auxiliadora | ContentPageTemplate |
| /titulos-nossa-senhora/template | ContentPageTemplate (MODELO) |
| /ministerios | ListingPageTemplate |
| /ministerios/dea-ajuda | Custom |
| /ministerios/template | ContentPageTemplate (MODELO) |

## Redirects Vercel (vercel.json)

- /dea-ajuda → /ministerios/dea-ajuda
- /nossa-senhora-auxiliadora → /titulos-nossa-senhora/nossa-senhora-auxiliadora
- /imagens e /imagens/* → /titulos-nossa-senhora (redirects legados)

## Checklist de aceite

Referência: specs/tests/checklist.json
