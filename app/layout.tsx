import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { loadRoutes } from '@/lib/specs/loader'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Grupo Deus É Amor | Nossa Senhora Auxiliadora',
  description:
    'Evangelizando jovens desde o ano 2000. Grupo Deus É Amor — oração, fraternidade e formação cristã.',
  icons: {
    icon: '/logo-deus-e-amor.png',
    apple: '/logo-deus-e-amor.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const routes = loadRoutes()

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-[#0f0f12] text-[#f2f2f2]">
        <Navbar routes={routes} />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
