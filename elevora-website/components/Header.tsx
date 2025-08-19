'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-width section-padding">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display font-bold text-2xl text-elevora-indigo">
              Elevora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-elevora-slate hover:text-elevora-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-elevora-blue text-white rounded-lg hover:bg-elevora-indigo transition-colors font-medium text-sm"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-elevora-indigo" />
            ) : (
              <Menu className="h-6 w-6 text-elevora-indigo" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="py-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-elevora-slate hover:text-elevora-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-elevora-blue text-white rounded-lg hover:bg-elevora-indigo transition-colors font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}