'use client'

import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

export default function ProblemSolution() {
  const problems = [
    'Hours lost to manual data entry',
    'Errors from copy-paste workflows',
    "Can't scale without hiring more people",
    'Information scattered across files',
  ]

  const solutions = [
    'Automated workflows that run 24/7',
    'Single source of truth for all data',
    'AI-powered insights and decisions',
    'Scale without adding headcount',
  ]

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
            Is Your Business Still Running on Spreadsheets?
          </h2>
          <p className="text-lg text-primary-text/80 max-w-2xl mx-auto">
            Transform your manual processes into intelligent systems that work for you, not against you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Current State */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card bg-red-900/10 border-red-500/30"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              Current State
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-text/80">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Future State */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card bg-green-900/10 border-green-500/30"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              With Elevora
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-text/80">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Transformation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-primary-text mb-8">
            Real Transformations, Real Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: 'Healthcare Operations',
                result: '200+ hours saved monthly by automating patient follow-ups with AI',
              },
              {
                industry: 'Tournament Management',
                result: 'Registration time reduced from 3 minutes to 30 seconds',
              },
              {
                industry: 'Sales Pipeline',
                result: '5,000 leads processed automatically with 70% faster response time',
              },
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="card hover-lift"
              >
                <h4 className="font-semibold gradient-text mb-2">
                  {example.industry}
                </h4>
                <p className="text-sm text-primary-text/70">{example.result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/process"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-accent to-primary-accent-light text-white font-semibold rounded-lg hover:opacity-90 transition-all group"
          >
            See How We Transform Businesses
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}