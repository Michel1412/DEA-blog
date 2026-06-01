# CorpusCriste — Grupo Deus É Amor

Site institucional do Grupo Deus É Amor, construído com **Next.js 16**, **React 19** e **Tailwind CSS 4**. O conteúdo e os testes são versionados na pasta `specs/`.

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Grupo Deus É Amor |
| `/imagens` | Galeria de imagens e devoções |
| `/imagens/nossa-senhora-auxiliadora` | Nossa Senhora Auxiliadora |
| `/imagens/template` | **Modelo aprovado** para novas páginas de imagens |
| `/ministerios` | Lista de ministérios |
| `/ministerios/dea-ajuda` | Ministério DEA Ajuda |
| `/ministerios/template` | **Modelo aprovado** para novos ministérios |

A navegação é feita pela **navbar horizontal** com dropdowns em Imagens e Ministérios (menu expansível no mobile).

## Modelo aprovado

Novas páginas devem copiar:

- JSON: `specs/content/imagens-template.json` ou `ministerios-template.json`
- Page: `app/imagens/template/page.tsx` ou `app/ministerios/template/page.tsx`
- Componentes: `ContentPageTemplate`, `ListingPageTemplate`, `PageShell`

Consulte `specs/spec-0.0.0.md` para o resumo completo da versão baseline.

## Estrutura de specs

```
specs/
├── version.json          # versão semver do conteúdo + specFile
├── spec-0.0.0.md         # release notes da versão atual
├── routes.json           # rotas da navbar (parent = dropdown)
├── content/              # textos e dados das páginas
└── tests/
    ├── checklist.json    # critérios de aceite aprovados
    └── e2e/              # testes Playwright
```

## Regras Cursor

Agentes devem seguir `.cursor/rules/`:

- `corpus-criste-base.mdc` — padrões gerais (always apply)
- `corpus-criste-pages.mdc` — criação de páginas e templates
- `corpus-criste-deploy.mdc` — rotas e deploy Vercel

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

O arquivo [`vercel.json`](vercel.json) inclui redirects de `/dea-ajuda` e `/nossa-senhora-auxiliadora` para as novas rotas, além de cache para assets estáticos.

## Identidade visual

- Fundo escuro (`#0F1115`)
- Dourado primário (`#D4AF37`)
- Vinho secundário (`#8B2332`)
- Tipografia: Cormorant Garamond (títulos) + Montserrat (corpo)
- Cantos arredondados (`rounded-2xl`, `rounded-full`)

## Licença

© 2026 Ministério DEA Ajuda. Todos os direitos reservados.
