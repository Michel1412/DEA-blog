# CorpusCriste — Spec v1.1.0

releasedAt: 2026-06-02
approvedBy: Grupo Deus É Amor

## Resumo

Reprodutor leve de vídeo por URL (YouTube e Google Drive) via `iframe`, substituindo o placeholder da seção `#video` em DEA Ajuda.

## Entregas

1. `lib/video/parseVideoUrl.ts` — normalização de URL para embed
2. `components/ui/RemoteVideoEmbed.tsx` — componente padrão (`url` + `title`)
3. `MinistryLandingVideo` — mesmo container visual (`aspect-video`, borda, sombra)
4. `specs/content/dea-ajuda.json` — `video.url` com YouTube de exemplo
5. `.cursor/rules/corpus-criste-videos.mdc` — regra com URLs de referência
6. `npm run test:video` — testes unitários do parser

## URLs de referência

- YouTube: `https://youtu.be/WMXu-1avNvQ?si=r0ac31REH-ELsOH6`
- Google Drive: `https://drive.google.com/file/d/17V-6ojgFDKhmWY6nP3JDV7VrPpyAFt7W/view?usp=sharing`

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 1.1.0).
