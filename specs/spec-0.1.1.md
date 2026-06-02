# CorpusCriste — Spec v0.1.1

releasedAt: 2026-06-01
approvedBy: Grupo Deus É Amor

## Resumo

Release **técnica + conteúdo**: remodelar o Ministério Perseverança no mesmo layout de 7 seções da DEA Ajuda; generalizar componentes em `components/ministry-landing/`.

## Entregas

### Layout ministry-landing

- `ministryLandingContentSchema` em `lib/specs/types.ts` (hero com `badge` text/image)
- `components/ministry-landing/*` — 7 seções compartilhadas
- `/ministerios/perseveranca` — orquestrador custom (não mais `ContentPageTemplate`)
- `/ministerios/dea-ajuda` — passa a importar `ministry-landing` (visual preservado)
- `specs/content/perseveranca.json` — schema de 7 seções
- `specs/content/dea-ajuda.json` — `hero.badge` texto `"DEA"`

### Documentação

- [`specs/CORPUS-CRISTE-ENGINEERING.md`](CORPUS-CRISTE-ENGINEERING.md) atualizado
- `.cursor/rules/corpus-criste-pages.mdc` e `corpus-criste-base.mdc`

## Fora do escopo

- Páginas marianas
- Vídeo real na seção `#video`
- Novas rotas

## Checklist de aceite

Ver `specs/tests/checklist.json` (version 0.1.1).
