# CorpusCriste — Spec v1.0.1

releasedAt: 2026-06-02
approvedBy: Grupo Deus É Amor

## Resumo

Correção de UX na navegação: scroll vertical com barra invisível quando o menu não cabe na tela do usuário.

## Entregas

1. Classe `.nav-scroll-invisible` em `app/globals.css` (overflow-y auto, scrollbar oculta)
2. Dropdown desktop (`NavDropdown.tsx`): `max-height` + `data-testid="nav-dropdown-scroll"`
3. Menu mobile (`Navbar.tsx`): `max-height` + `data-testid="nav-mobile-scroll"`

## Checklist de aceite

Referência: `specs/tests/checklist.json` (versão 1.0.1).
