# CorpusCriste — Spec v0.0.4

releasedAt: 2026-06-01
approvedBy: Grupo Deus É Amor

## Resumo

Esta versão adiciona a página **Nossa Senhora de Guadalupe** na seção Títulos de Nossa Senhora,
com hero usando imagem da tilma e texto sobre as aparições a Juan Diego em Tepeyac (dezembro de 1531).

## Entregas

1. Página `/titulos-nossa-senhora/nossa-senhora-guadalupe` com `ContentPageTemplate` compact
2. Imagem em `public/images/nossa-senhora-guadalupe.png` (reprodução da tilma, domínio público via Wikimedia Commons)
3. Registro em `routes.json`, `titulos-nossa-senhora.json`, `types.ts` e `loader.ts`
4. Atualização da documentação de versionamento para v0.0.4

## Fontes de conteúdo

Texto fornecido pelo Grupo Deus É Amor, com referência editorial a:

- [Nossa Senhora de Guadalupe, a padroeira da América Latina — Canção Nova](https://santo.cancaonova.com/santo/nossa-senhora-de-guadalupe-a-padroeira-da-america-latina/)
- [Nossa Senhora de Guadalupe — Biblioteca Católica](https://bibliotecacatolica.com.br/blog/devocao/nossa-senhora-de-guadalupe/)

Não copiar os artigos integrais.

## Imagem do hero

- Arquivo: `public/images/nossa-senhora-guadalupe.png`
- Origem: [Virgen de guadalupe1.jpg — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Virgen_de_guadalupe1.jpg) (domínio público, século XVI)

## Rota desta versão (nova)

| Rota | Tipo |
|------|------|
| /titulos-nossa-senhora/nossa-senhora-guadalupe | ContentPageTemplate compact (NOVA) |

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 0.0.4)
