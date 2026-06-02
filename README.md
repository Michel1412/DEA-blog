# CorpusCriste — Grupo Deus É Amor

Site institucional do Grupo Deus É Amor, construído com **Next.js 16**, **React 19** e **Tailwind CSS 4**. O conteúdo e os testes são versionados na pasta `specs/`.

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Grupo Deus É Amor |
| `/titulos-nossa-senhora` | Títulos de Nossa Senhora — devoções marianas |
| `/titulos-nossa-senhora/nossa-senhora-auxiliadora` | Nossa Senhora Auxiliadora |
| `/titulos-nossa-senhora/nossa-senhora-medjugorje` | Nossa Senhora em Medjugorje |
| `/titulos-nossa-senhora/nossa-senhora-aparecida` | Nossa Senhora Aparecida |
| `/titulos-nossa-senhora/nossa-senhora-la-salette` | Nossa Senhora de La Salette |
| `/titulos-nossa-senhora/nossa-senhora-lourdes` | Nossa Senhora de Lourdes |
| `/titulos-nossa-senhora/nossa-senhora-guadalupe` | Nossa Senhora de Guadalupe |
| `/titulos-nossa-senhora/template` | **Modelo aprovado** para novas páginas de títulos marianos |
| `/ministerios` | Lista de ministérios |
| `/ministerios/dea-ajuda` | Ministério DEA Ajuda |
| `/ministerios/perseveranca` | Ministério Perseverança |
| `/ministerios/template` | **Modelo aprovado** para novos ministérios |

A navegação é feita pela **navbar horizontal** com dropdowns em Títulos de Nossa Senhora e Ministérios (menu expansível no mobile).

**Redirects legados:** `/imagens` e `/imagens/*` redirecionam para `/titulos-nossa-senhora` (ver `vercel.json`).

## Modelo aprovado

Novas páginas devem copiar:

- JSON: `specs/content/titulos-nossa-senhora-template.json` ou `ministerios-template.json`
- Page: `app/titulos-nossa-senhora/template/page.tsx` ou `app/ministerios/template/page.tsx`
- Componentes: `ContentPageTemplate`, `ListingPageTemplate`, `PageShell`

Consulte `specs/spec-0.1.0.md` (versão atual), `specs/spec-0.0.5.md` e releases `0.0.x` (baseline em `spec-0.0.0.md`). Padrões de código: [`specs/CORPUS-CRISTE-ENGINEERING.md`](specs/CORPUS-CRISTE-ENGINEERING.md).

## Versionamento

Por padrão, cada versão `0.0.x` adiciona uma nova página; um release pode agrupar várias (v0.0.3 = 3 páginas). Política em `.cursor/rules/corpus-criste-versions.mdc`.

| Versão | Entrega |
|--------|---------|
| 0.0.0 | Templates, navbar horizontal, páginas-modelo |
| 0.0.1 | Nossa Senhora em Medjugorje |
| 0.0.2 | Nossa Senhora Aparecida |
| 0.0.3 | Perseverança, La Salette e Lourdes |
| 0.0.4 | Nossa Senhora de Guadalupe |
| 0.0.5 | Home (vitrine do grupo) + rodapé |
| 0.1.0 | Revisão técnica (componentes, tokens, performance) |

## Estrutura de specs

```
specs/
├── version.json          # versão semver do conteúdo + specFile
├── spec-0.0.0.md         # release notes v0.0.0 (baseline)
├── spec-0.0.1.md         # release notes v0.0.1
├── spec-0.0.2.md
├── spec-0.0.3.md
├── spec-0.0.4.md
├── spec-0.0.5.md
├── spec-0.1.0.md         # release notes da versão atual
├── CORPUS-CRISTE-ENGINEERING.md  # guia para agentes (padrões de código)
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

O arquivo [`vercel.json`](vercel.json) inclui redirects de URLs legadas (`/imagens`, `/dea-ajuda`, `/nossa-senhora-auxiliadora`) para as rotas atuais.

## Identidade visual

- Fundo escuro (`#0F1115`)
- Dourado primário (`#D4AF37`)
- Vinho secundário (`#8B2332`)
- Tipografia: Cormorant Garamond (títulos) + Montserrat (corpo)
- Cantos arredondados (`rounded-2xl`, `rounded-full`)

## Licença

© 2026 Grupo Deus É Amor. Todos os direitos reservados.
