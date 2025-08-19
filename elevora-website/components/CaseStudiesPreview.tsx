'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    title: 'Healthcare Digital Transformation',
    client: '500+ Clinician Healthcare Platform',
    challenge: 'Manual patient follow-ups taking 200+ hours monthly',
    solution: 'AI-powered chat system with RAG architecture',
    results: [
      '200+ hours saved monthly',
      '75% improvement in response accuracy',
      '99.9% system uptime',
    ],
    metrics: {
      time: '200+ hrs/mo saved',
      users: '10,000+ patients',
      improvement: '75% accuracy',
    },
    color: 'blue',
  },
  {
    title: 'Tournament Operations Platform',
    client: 'Youth Hockey Tournament Organizer',
    challenge: '15+ spreadsheets to manage single tournament',
    solution: 'Comprehensive tournament management system',
    results: [
      'Registration: 3 min → 30 sec',
      'Hotel assignments: 3 days → 2 hours',
      'Real-time financial tracking',
    ],
    metrics: {
      time: '6x faster',
      users: '100+ teams',
      improvement: '85% reduction',
    },
    color: 'green',
  },
  {
    title: 'Recruitment Platform Automation',
    client: 'AI-Powered Hiring Platform',
    challenge: 'Manual candidate tracking across spreadsheets',
    solution: 'GraphQL API with automated workflows',
    results: [
      '5,000+ leads automated monthly',
      '70% faster response time',
      '60% performance improvement',
    ],
    metrics: {
      time: '70% faster',
      users: '5,000+ leads',
      improvement: '60% boost',
    },
    color: 'gold',
  },
]

export default function CaseStudiesPreview() {
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
            Proven Results Across Industries
          </h2>
          <p className="text-lg text-elevora-slate max-w-2xl mx-auto">
            Real transformations delivering measurable impact for businesses like yours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 bg-elevora-${study.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-elevora-indigo mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-elevora-slate mb-4">{study.client}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 mx-auto text-elevora-blue mb-1" />
                    <p className="text-xs font-semibold text-gray-700">{study.metrics.time}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <Users className="h-4 w-4 mx-auto text-elevora-green mb-1" />
                    <p className="text-xs font-semibold text-gray-700">{study.metrics.users}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <TrendingUp className="h-4 w-4 mx-auto text-elevora-gold mb-1" />
                    <p className="text-xs font-semibold text-gray-700">{study.metrics.improvement}</p>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${study.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-flex items-center text-elevora-blue hover:text-elevora-indigo font-medium text-sm group"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-elevora-indigo text-elevora-indigo font-semibold rounded-lg hover:bg-elevora-indigo hover:text-white transition-colors"
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  )
}