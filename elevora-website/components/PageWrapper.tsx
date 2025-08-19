'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeToggle />
      <Header />
      {children}
      <Footer />
    </>
  )
}