'use client'

import { Plus_Jakarta_Sans, Figtree } from 'next/font/google'
import './globals.css'
import PromoStrip from '@/components/layout/PromoStrip'
import Navbar from '@/components/layout/Navbar'
import { usePathname } from 'next/navigation'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
})

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminPage && (
        <>
          <PromoStrip />
          <Navbar />
        </>
      )}
      {children}
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${figtree.variable}`}>
      <head>
        <title>Construction Website</title>
        <meta name="description" content="Construction Website" />
      </head>
      <body className="font-sans bg-[#F5F1E6]">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}

