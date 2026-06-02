# CorpusCriste — Spec v0.0.5

releasedAt: 2026-06-02
approvedBy: Grupo Deus É Amor

## Resumo

Release de revisão UX e código: Home reformulada como vitrine do Grupo (sem menção a ministérios),
hero com carrossel de 5 fotos do grupo, rodapé atualizado e CTAs configuráveis por JSON.

## Entregas

### Rodapé global (`components/layout/Footer.tsx`)

- Easter egg: **Ministério DEA Programadores** (não é ministério real)
- Pilares: Evangelização • Amizade • Compromisso • Serviço
- Copyright: **Grupo Deus É Amor**

### Home (`specs/content/home.json`)

- Hero: título Grupo Deus É Amor, subtítulo "Jovens evangelizando Jovens desde 2000", citação 1 João 4:8
- Carrossel: `backgroundImages` com 5 fotos em `public/images/home-carousel-01..05.png`
- Seção de convite (Venha participar) com horário quintas 19h30, Auditório Dona Guilhermina
- CTA Instagram + `secondaryCta` para `/titulos-nossa-senhora`
- Removido bloco DEA Ajuda

### Código

- `HeroBackgroundCarousel` — crossfade ~5,5s, respeita `prefers-reduced-motion`
- `heroSchema.backgroundImages` opcional
- `paragraphSectionSchema.secondaryCta` — remove hardcode DEA Ajuda em `SectionRenderer`

## Assets

| Arquivo | Uso |
|---------|-----|
| `home-carousel-01.png` … `05.png` | Hero Home (carrossel) |

## Fora do escopo

- Páginas de ministérios/títulos marianos (exceto link na Home)
- Página real "Ministério DEA Programadores"

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 0.0.5)
