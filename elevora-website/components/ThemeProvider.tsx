'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'aurora' | 'mint'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('aurora')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or default to aurora
    const savedTheme = localStorage.getItem('elevora-theme') as Theme
    if (savedTheme && (savedTheme === 'aurora' || savedTheme === 'mint')) {
      setTheme(savedTheme)
      updateThemeClass(savedTheme)
    }
  }, [])

  const updateThemeClass = (newTheme: Theme) => {
    const root = document.documentElement
    if (newTheme === 'mint') {
      root.classList.add('theme-mint')
    } else {
      root.classList.remove('theme-mint')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'aurora' ? 'mint' : 'aurora'
    setTheme(newTheme)
    localStorage.setItem('elevora-theme', newTheme)
    updateThemeClass(newTheme)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}