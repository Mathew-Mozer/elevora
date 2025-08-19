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
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-elevora-indigo mb-4">
            Is Your Business Still Running on Spreadsheets?
          </h2>
          <p className="text-lg text-elevora-slate max-w-2xl mx-auto">
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
            className="bg-red-50 rounded-2xl p-8 border border-red-100"
          >
            <h3 className="text-2xl font-bold text-red-900 mb-6">
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
                  <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
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
            className="bg-green-50 rounded-2xl p-8 border border-green-100"
          >
            <h3 className="text-2xl font-bold text-green-900 mb-6">
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
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{solution}</span>
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
          <h3 className="text-2xl font-bold text-center text-elevora-indigo mb-8">
            Real Transformations, Real Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: 'Healthcare Operations',
                result: '200+ hours saved monthly by automating patient follow-ups with AI',
                color: 'blue',
              },
              {
                industry: 'Tournament Management',
                result: 'Registration time reduced from 3 minutes to 30 seconds',
                color: 'green',
              },
              {
                industry: 'Sales Pipeline',
                result: '5,000 leads processed automatically with 70% faster response time',
                color: 'gold',
              },
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-elevora-${example.color}/20 bg-elevora-${example.color}/5 hover:border-elevora-${example.color}/40 transition-colors`}
              >
                <h4 className={`font-semibold text-elevora-indigo mb-2`}>
                  {example.industry}
                </h4>
                <p className="text-sm text-elevora-slate">{example.result}</p>
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
            className="inline-flex items-center justify-center px-6 py-3 bg-elevora-blue text-white font-semibold rounded-lg hover:bg-elevora-indigo transition-colors group"
          >
            See How We Transform Businesses
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}