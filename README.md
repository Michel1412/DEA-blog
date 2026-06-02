# CorpusCriste — Grupo Deus É Amor

Site institucional do Grupo Deus É Amor, construído com **Next.js 16**, **React 19** e **Tailwind CSS 4**. O conteúdo e os testes são versionados na pasta `specs/`.

**Versão atual do conteúdo:** `1.0.0` — ver [`specs/spec-1.0.0.md`](specs/spec-1.0.0.md).

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Grupo Deus É Amor |
| `/titulos-nossa-senhora` | Títulos de Nossa Senhora — listagem de devoções |
| `/titulos-nossa-senhora/nossa-senhora-auxiliadora` | Nossa Senhora Auxiliadora |
| `/titulos-nossa-senhora/nossa-senhora-medjugorje` | Nossa Senhora em Medjugorje |
| `/titulos-nossa-senhora/nossa-senhora-aparecida` | Nossa Senhora Aparecida |
| `/titulos-nossa-senhora/nossa-senhora-la-salette` | Nossa Senhora de La Salette |
| `/titulos-nossa-senhora/nossa-senhora-lourdes` | Nossa Senhora de Lourdes |
| `/titulos-nossa-senhora/nossa-senhora-guadalupe` | Nossa Senhora de Guadalupe |
| `/titulos-nossa-senhora/nossa-senhora-das-gracas` | Nossa Senhora das Graças |
| `/titulos-nossa-senhora/nossa-senhora-da-comunicacao` | Nossa Senhora da Comunicação |
| `/titulos-nossa-senhora/nossa-senhora-das-dores` | Nossa Senhora das Dores |
| `/titulos-nossa-senhora/nossa-senhora-de-fatima` | Nossa Senhora de Fátima |
| `/ministerios` | Lista de ministérios |
| `/ministerios/dea-ajuda` | Ministério DEA Ajuda (layout ministry-landing) |
| `/ministerios/perseveranca` | Ministério Perseverança (layout ministry-landing) |

**Total:** 15 páginas de produção.

A navegação é feita pela **navbar horizontal** com dropdowns em Títulos de Nossa Senhora e Ministérios (menu expansível no mobile). As rotas da navbar vêm de [`specs/routes.json`](specs/routes.json).

**Redirects legados** ([`vercel.json`](vercel.json)):

| Origem | Destino |
|--------|---------|
| `/imagens`, `/imagens/*` | `/titulos-nossa-senhora` e filhos |
| `/dea-ajuda` | `/ministerios/dea-ajuda` |
| `/nossa-senhora-auxiliadora` | `/titulos-nossa-senhora/nossa-senhora-auxiliadora` |

## Nova página de conteúdo

Não há páginas-modelo públicas no site. Para agentes e desenvolvedores:

- Exemplo copiável: [`.cursor/examples/content-page/`](.cursor/examples/content-page/)
- Referência em produção: [`specs/content/nossa-senhora-de-fatima.json`](specs/content/nossa-senhora-de-fatima.json)
- Componentes: `ContentPageTemplate`, `ListingPageTemplate`, `PageShell`
- Padrões: [`specs/CORPUS-CRISTE-ENGINEERING.md`](specs/CORPUS-CRISTE-ENGINEERING.md)

**Exceções** (não usar o exemplo genérico): DEA Ajuda e Perseverança usam `components/ministry-landing/`. Carrossel no hero: `.cursor/rules/corpus-criste-carousels.mdc`.

## Versionamento

Política em [`.cursor/rules/corpus-criste-versions.mdc`](.cursor/rules/corpus-criste-versions.mdc). Releases `0.0.x` / `0.1.x` adicionaram páginas e melhorias; **1.0.0** consolida o conjunto publicado e remove modelos do site.

| Versão | Entrega |
|--------|---------|
| 0.0.0 | Templates públicos, navbar horizontal |
| 0.0.1 | Nossa Senhora em Medjugorje |
| 0.0.2 | Nossa Senhora Aparecida |
| 0.0.3 | Perseverança, La Salette, Lourdes |
| 0.0.4 | Nossa Senhora de Guadalupe |
| 0.0.5 | Home (vitrine) + rodapé |
| 0.1.0 | Revisão técnica (componentes, tokens, docs) |
| 0.1.1 | Perseverança em ministry-landing |
| 0.1.2 | Rodapé (Humildade) + Nossa Senhora das Graças |
| 0.1.3 | Nossa Senhora da Comunicação |
| 0.1.4 | Nossa Senhora das Dores |
| 0.1.5 | Carrossel no hero do DEA Ajuda |
| 0.1.6 | Nossa Senhora de Fátima |
| **1.0.0** | **Versão completa** — 15 rotas; modelos só em `.cursor/examples/` |

## Estrutura de specs

```
specs/
├── version.json          # versão semver do conteúdo + specFile
├── spec-1.0.0.md         # release notes da versão atual
├── spec-0.1.6.md …       # histórico de releases
├── spec-0.0.0.md         # baseline
├── CORPUS-CRISTE-ENGINEERING.md
├── routes.json           # rotas da navbar (parent = dropdown)
├── content/              # textos e dados das páginas
└── tests/
    ├── checklist.json
    └── e2e/              # Playwright
```

## Regras Cursor

Agentes devem seguir [`.cursor/rules/`](.cursor/rules/):

- `corpus-criste-base.mdc` — padrões gerais (always apply)
- `corpus-criste-pages.mdc` — criação de páginas
- `corpus-criste-carousels.mdc` — carrossel no hero (CSS)
- `corpus-criste-deploy.mdc` — rotas e deploy Vercel
- `corpus-criste-versions.mdc` — política de versionamento

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run test:specs` | Valida JSONs em `specs/` com Zod |
| `npm run test:e2e` | Testes end-to-end (Playwright) |

## Deploy na Vercel

1. Faça push deste repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o repositório.
3. Framework Preset: **Next.js** (detecção automática).
4. Build Command: `npm run build`
5. Output Directory: `.next` (padrão)
6. Clique em **Deploy**.

O arquivo [`vercel.json`](vercel.json) inclui redirects de URLs legadas.

## Identidade visual

- Fundo escuro (`#0f0f12`)
- Dourado primário (`#d4af37`)
- Vinho secundário (`#8B2332`)
- Tipografia: Cormorant Garamond (títulos) + Montserrat (corpo)
- Cantos arredondados (`rounded-2xl`)

## Licença

© 2026 Grupo Deus É Amor. Todos os direitos reservados.
