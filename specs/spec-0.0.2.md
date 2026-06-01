# CorpusCriste — Spec v0.0.2

releasedAt: 2026-06-01
approvedBy: Grupo Deus É Amor

## Resumo

Esta versão adiciona a página **Nossa Senhora Aparecida** na seção Títulos de Nossa Senhora,
com hero usando foto da estátua na basílica e texto sobre o achado dos pescadores no
Paraíba do Sul (1717).

## Entregas

1. Página `/titulos-nossa-senhora/nossa-senhora-aparecida` com `ContentPageTemplate`
2. Imagens em `public/images/nossa-senhora-aparecida.png` (hero) e `nossa-senhora-aparecida-pescadores.png` (referência)
3. Registro em `routes.json`, `titulos-nossa-senhora.json`, `types.ts` e `loader.ts`
4. Atualização da documentação de versionamento para v0.0.2

## Fonte de conteúdo histórico

Detalhes sobre a aparição, os pescadores e a devoção foram sintetizados com base em:

- Texto fornecido pelo Grupo Deus É Amor
- [Nossa Senhora Aparecida, a luz da história do Brasil — Canção Nova Formação](https://formacao.cancaonova.com/espiritualidade/nossa-senhora-aparecida-luz-da-historia-brasil/)

A descrição visual da cena dos pescadores foi inspirada na pintura do achado (asset `nossa-senhora-aparecida-pescadores.png`), incorporada em prosa na seção "O achado no rio Paraíba do Sul".

## Rotas desta versão (nova)

| Rota | Tipo |
|------|------|
| /titulos-nossa-senhora/nossa-senhora-aparecida | ContentPageTemplate compact (NOVA) |

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 0.0.2)
