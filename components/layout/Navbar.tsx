'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NavDropdown } from '@/components/layout/NavDropdown'
import { buildNavTree, isNavItemActive } from '@/lib/specs/nav'
import { goldText, navDropdownParentClass, navLinkClass } from '@/lib/theme'
import type { RoutesSpec } from '@/lib/specs/types'

type NavbarProps = {
  routes: RoutesSpec
}

export function Navbar({ routes }: NavbarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navTree = buildNavTree(routes)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(212,175,55,0.2)] bg-[#0f0f12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] w-[92%] items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-deus-e-amor.png"
            alt="Grupo Deus É Amor"
            width={44}
            height={44}
            className="rounded-full bg-white p-1 object-contain"
          />
          <span className={`hidden sm:block font-serif text-lg ${goldText()}`}>
            Deus É Amor
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegação principal"
          data-testid="nav-desktop"
        >
          {navTree.map((item) => (
            <NavDropdown key={item.path} item={item} />
          ))}
        </nav>

        <button
          type="button"
          className={`md:hidden rounded-lg border border-[rgba(212,175,55,0.3)] px-3 py-2 text-sm ${goldText()}`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          data-testid="nav-mobile-toggle"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-[rgba(212,175,55,0.15)] bg-[#0f0f12]/95"
          aria-label="Navegação mobile"
          data-testid="nav-mobile"
        >
          <div className="mx-auto max-w-[1100px] w-[92%] py-4 space-y-2">
            {navTree.map((item) => {
              const isActive = isNavItemActive(pathname, item.path)

              if (item.children.length === 0) {
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={navLinkClass(isActive, 'mobile-top')}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`nav-mobile-link-${item.path === '/' ? 'home' : item.path.slice(1)}`}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <div key={item.path} className="space-y-1">
                  <Link
                    href={item.path}
                    className={navDropdownParentClass(isActive)}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`nav-mobile-link-${item.path.slice(1)}`}
                  >
                    {item.label}
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      className={navLinkClass(pathname === child.path, 'mobile-child')}
                      onClick={() => setMobileOpen(false)}
                      data-testid={`nav-mobile-link-${child.path.slice(1).replace(/\//g, '-')}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
