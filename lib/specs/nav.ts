import type { RoutesSpec } from './types'

export type NavTreeItem = {
  label: string
  path: string
  children: NavTreeItem[]
}

export function buildNavTree(routes: RoutesSpec): NavTreeItem[] {
  return routes.items
    .filter((item) => !item.parent)
    .map((item) => ({
      label: item.label,
      path: item.path,
      children: routes.items
        .filter((child) => child.parent === item.path)
        .map((child) => ({
          label: child.label,
          path: child.path,
          children: [],
        })),
    }))
}

export function resolveActivePath(pathname: string, routes: RoutesSpec): string {
  const exact = routes.items.find((item) => item.path === pathname)
  if (exact) return exact.path

  const nestedMatches = routes.items
    .filter((item) => item.path !== '/' && pathname.startsWith(item.path))
    .sort((a, b) => b.path.length - a.path.length)

  return nestedMatches[0]?.path ?? '/'
}

export function isNavItemActive(pathname: string, path: string): boolean {
  if (path === '/') return pathname === '/'
  return pathname === path || pathname.startsWith(`${path}/`)
}
