'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Trophy, Users, Search, TrendingUp } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'

const icons = {
  'Heart': Heart,
  'Trophy': Trophy,
  'Users': Users,
  'Search': Search,
  'TrendingUp': TrendingUp,
}

export default function ProblemsShowcase() {
  const [selectedProblem, setSelectedProblem] = useState<string>('Healthcare Overwhelm')

  return (
    <section className="py-20 bg-primary-bg">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-4">
            Problems Elevora Solves
          </h2>
          <p className="text-lg text-primary-text/80 max-w-2xl mx-auto">
            Give Elevora your toughest process, and we'll make it simple. 
            Here's how we transform common business challenges.
          </p>
        </motion.div>

        {/* Problem Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(siteConfig.problemsSolved).map((problem) => {
            const problemData = siteConfig.problemsSolved[problem as keyof typeof siteConfig.problemsSolved]
            const Icon = icons[problemData.icon as keyof typeof icons]
            return (
              <motion.button
                key={problem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProblem(problem)}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all',
                  selectedProblem === problem
                    ? 'bg-gradient-to-r from-primary-accent to-primary-accent-light text-white'
                    : 'bg-primary-bg-light/30 text-primary-text/80 hover:bg-primary-accent/10 border border-primary-border/20'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{problem}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Problem & Solution Display */}
        <motion.div
          key={selectedProblem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          <div className="space-y-6">
            {/* The Problem */}
            <div className="border-l-4 border-red-500/50 pl-4">
              <h3 className="font-semibold text-primary-text mb-2">The Problem</h3>
              <p className="text-lg text-primary-text/70">
                {siteConfig.problemsSolved[selectedProblem as keyof typeof siteConfig.problemsSolved].problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="border-l-4 border-primary-accent pl-4">
              <h3 className="font-semibold text-primary-text mb-2">The Elevora Solution</h3>
              <p className="text-lg text-primary-text/70">
                {siteConfig.problemsSolved[selectedProblem as keyof typeof siteConfig.problemsSolved].solution}
              </p>
            </div>

            {/* The Impact */}
            <div className="p-4 bg-primary-accent/10 rounded-lg border border-primary-accent/20">
              <h4 className="font-semibold gradient-text mb-2">The Business Impact</h4>
              <p className="text-lg text-primary-text/80">
                {siteConfig.problemsSolved[selectedProblem as keyof typeof siteConfig.problemsSolved].impact}
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Elevora Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-center text-primary-text mb-8">
            The Elevora Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.promise.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center card hover-lift"
              >
                <p className="text-lg font-medium gradient-text">"{promise}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Businesses Choose Elevora */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-primary-text mb-8">
            Why Businesses Choose Elevora
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Overwhelmed by manual systems needing untangling',
              'Tired of jargon, want business outcomes',
              'Need a partner who sees the big picture',
              'Want both quick wins and transformation',
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="card hover-lift"
              >
                <p className="text-sm text-primary-text/80">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}