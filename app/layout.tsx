import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Figtree } from 'next/font/google'
import './globals.css'
import PromoStrip from '@/components/layout/PromoStrip'
import Navbar from '@/components/layout/Navbar'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  title: 'Construction Website',
  description: 'Construction Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${figtree.variable}`}>
      <body className="font-sans bg-[#F5F1E6]">
        <PromoStrip />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

