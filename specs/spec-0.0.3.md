# CorpusCriste — Spec v0.0.3

releasedAt: 2026-06-01
approvedBy: Grupo Deus É Amor

## Resumo

Esta versão adiciona **três páginas independentes** (exceção à regra “uma página por versão”,
documentada abaixo): Ministério Perseverança, Nossa Senhora de La Salette e Nossa Senhora de Lourdes.
Todas usam `ContentPageTemplate` compact com JSON em `specs/content/`. Não há links cruzados entre elas.

## Entregas

1. `/ministerios/perseveranca` — Ministério Perseverança (hero com foto do grupo)
2. `/titulos-nossa-senhora/nossa-senhora-la-salette` — aparição de 1846 nos Alpes franceses
3. `/titulos-nossa-senhora/nossa-senhora-lourdes` — aparições a Bernadette em 1858
4. Assets: `ministerio-perseveranca.png`, `nossa-senhora-la-salette.png`, `nossa-senhora-lourdes.png`
5. Registro em `routes.json`, listagens, `types.ts`, `loader.ts` e documentação

## Política de versionamento (atualização)

Por padrão, cada `0.0.x` adiciona uma nova página. Versões podem **agrupar múltiplas páginas**
quando o release spec assim definir — **v0.0.3 = 3 páginas**, sem ligação entre si.

## Rotas desta versão (novas)

| Rota | Template | Slug |
|------|----------|------|
| /ministerios/perseveranca | ContentPageTemplate compact | `perseveranca` |
| /titulos-nossa-senhora/nossa-senhora-la-salette | ContentPageTemplate compact | `nossa-senhora-la-salette` |
| /titulos-nossa-senhora/nossa-senhora-lourdes | ContentPageTemplate compact | `nossa-senhora-lourdes` |

## Assets

| Arquivo | Uso |
|---------|-----|
| `public/images/ministerio-perseveranca.png` | Hero Perseverança + referência visual na seção “Nosso grupo de servos” |
| `public/images/nossa-senhora-la-salette.png` | Hero La Salette |
| `public/images/nossa-senhora-lourdes.png` | Hero Lourdes |

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 0.0.3)
