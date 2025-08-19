'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, Database, Cloud, Server } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { cn } from '@/lib/utils'

const icons = {
  'AI/ML': Brain,
  'Frontend': Code2,
  'Backend': Server,
  'Cloud & DevOps': Cloud,
  'Databases': Database,
}

export default function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('AI/ML')

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
            Technical Excellence Across the Stack
          </h2>
          <p className="text-lg text-primary-text/80 max-w-2xl mx-auto">
            Deep expertise in modern technologies to build robust, scalable solutions for your business.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(siteConfig.techStack).map((category) => {
            const Icon = icons[category as keyof typeof icons]
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-accent to-primary-accent-light text-white'
                    : 'bg-primary-bg-light/30 text-primary-text/80 hover:bg-primary-accent/10 border border-primary-border/20'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{category}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Skills Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          <div className="space-y-6">
            {/* Proficiency Bar */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-primary-text">Proficiency Level</span>
                <span className="text-primary-text/70">
                  {siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].level}%
                </span>
              </div>
              <div className="h-4 bg-primary-bg-light/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-accent to-primary-accent-light"
                />
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary-text">Years of Experience</span>
              <span className="text-2xl font-bold gradient-text">
                {siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].years}+
              </span>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-primary-text mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-primary-accent/10 text-primary-text rounded-lg font-medium hover:bg-primary-accent/20 transition-colors border border-primary-border/10"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Key Achievement */}
            <div className="p-4 bg-primary-accent/10 rounded-lg border border-primary-accent/20">
              <h4 className="font-semibold gradient-text mb-2">Key Achievement</h4>
              <p className="text-sm text-primary-text/70">
                {selectedCategory === 'AI/ML' && 'Built RAG system improving document search accuracy by 75%'}
                {selectedCategory === 'Frontend' && 'Reduced page load times by 60% through optimization'}
                {selectedCategory === 'Backend' && 'Architected systems handling 10,000+ concurrent users'}
                {selectedCategory === 'Cloud & DevOps' && 'Achieved 99.9% uptime across production systems'}
                {selectedCategory === 'Databases' && 'Optimized queries reducing response time by 40%'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '7,000+', label: 'Code Contributions' },
            { value: '50+', label: 'Features Delivered' },
            { value: '3', label: 'Industries Served' },
            { value: '75%', label: 'AI Accuracy Improvement' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center card hover-lift"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-primary-text/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}