'use client'

import { useContext } from 'react'
import { Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeContext } from './ThemeProvider'

export default function ThemeToggle() {
  // Try to use the context, but handle the case where it's not available
  try {
    const context = useContext(ThemeContext)
    
    if (!context) {
      // Return null if context isn't available yet
      return null
    }

    const { theme, toggleTheme } = context

    return (
      <motion.button
        onClick={toggleTheme}
        className="theme-toggle group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={`Switch to ${theme === 'aurora' ? 'Cool Mint' : 'Midnight Aurora'} theme`}
      >
        <Palette className="h-5 w-5 text-primary-text" />
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary-text opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {theme === 'aurora' ? 'Cool Mint' : 'Midnight Aurora'}
        </span>
      </motion.button>
    )
  } catch {
    // Return null if there's any error accessing the context
    return null
  }
}