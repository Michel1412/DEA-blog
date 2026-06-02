'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isNavItemActive } from '@/lib/specs/nav'
import { navLinkClass } from '@/lib/theme'
import type { NavTreeItem } from '@/lib/specs/nav'

type NavDropdownProps = {
  item: NavTreeItem
}

export function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname()
  const isActive = isNavItemActive(pathname, item.path)

  if (item.children.length === 0) {
    return (
      <Link
        href={item.path}
        className={navLinkClass(isActive, 'desktop')}
        data-testid={`nav-link-${item.path === '/' ? 'home' : item.path.slice(1).replace(/\//g, '-')}`}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="relative group" data-testid={`nav-dropdown-${item.path.slice(1)}`}>
      <Link
        href={item.path}
        className={`inline-flex items-center gap-1 ${navLinkClass(isActive, 'desktop')}`}
      >
        {item.label}
        <span className="text-xs opacity-70" aria-hidden="true">
          ▾
        </span>
      </Link>

      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all z-50">
        <div
          className="nav-scroll-invisible max-h-[min(70vh,calc(100dvh-5rem))] min-w-[220px] rounded-xl border border-[rgba(212,175,55,0.2)] bg-[#1c1e24] py-2 shadow-lg"
          data-testid="nav-dropdown-scroll"
        >
          {item.children.map((child) => {
            const childActive = pathname === child.path
            return (
              <Link
                key={child.path}
                href={child.path}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  childActive
                    ? 'bg-[rgba(212,175,55,0.12)] text-[#d4af37]'
                    : 'text-foreground/90 hover:bg-[rgba(212,175,55,0.08)] hover:text-[#d4af37]'
                }`}
                data-testid={`nav-link-${child.path.slice(1).replace(/\//g, '-')}`}
              >
                {child.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
