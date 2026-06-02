import Image from 'next/image'
import { Cross } from 'lucide-react'
import { goldText } from '@/lib/theme'

export function Footer() {
  return (
    <footer
      className="bg-black py-10 px-5 text-center border-t border-[rgba(212,175,55,0.15)]"
      data-testid="site-footer"
    >
      <div className={`text-3xl mb-3 ${goldText()}`} aria-hidden="true">
        ✝
      </div>
      <Image
        src="/logo-deus-e-amor.png"
        alt="Grupo Deus É Amor"
        width={90}
        height={90}
        className="mx-auto mb-4 rounded-full"
      />
      <div className="flex items-center justify-center gap-2 mb-2">
        <Cross className={`w-5 h-5 hidden sm:block ${goldText()}`} aria-hidden="true" />
        <p className="text-lg font-semibold">Grupo Deus É Amor</p>
      </div>
      <p className="text-base mb-2 text-foreground/90" data-testid="footer-easter-egg">
        Ministério DEA Programadores
      </p>
      <p className="leading-relaxed text-foreground/80" data-testid="footer-pillars">
        Evangelização • Amizade • Compromisso • Serviço
      </p>
      <p className="opacity-80 text-sm mt-4" data-testid="footer-copyright">
        © 2026 Grupo Deus É Amor. Todos os direitos reservados.
      </p>
    </footer>
  )
}
