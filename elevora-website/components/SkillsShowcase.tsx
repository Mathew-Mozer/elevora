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
    <section className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-elevora-indigo mb-4">
            Technical Excellence Across the Stack
          </h2>
          <p className="text-lg text-elevora-slate max-w-2xl mx-auto">
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
                    ? 'bg-elevora-blue text-white shadow-lg'
                    : 'bg-white text-elevora-slate hover:bg-elevora-blue/10 border border-gray-200'
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
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="space-y-6">
            {/* Proficiency Bar */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-elevora-indigo">Proficiency Level</span>
                <span className="text-elevora-slate">
                  {siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].level}%
                </span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-elevora-blue to-elevora-green"
                />
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-elevora-indigo">Years of Experience</span>
              <span className="text-2xl font-bold text-elevora-blue">
                {siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].years}+
              </span>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-elevora-indigo mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {siteConfig.techStack[selectedCategory as keyof typeof siteConfig.techStack].items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-elevora-blue/10 text-elevora-indigo rounded-lg font-medium hover:bg-elevora-blue/20 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Key Achievement */}
            <div className="p-4 bg-elevora-green/10 rounded-lg border border-elevora-green/20">
              <h4 className="font-semibold text-elevora-green mb-2">Key Achievement</h4>
              <p className="text-sm text-gray-700">
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
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl font-bold text-elevora-blue mb-1">{stat.value}</div>
              <div className="text-sm text-elevora-slate">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}