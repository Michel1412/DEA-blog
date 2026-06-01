import type { ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#0f0f12] text-[#f2f2f2]">{children}</main>
  )
}
