'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 'healthcare-transformation',
    title: 'Healthcare Digital Transformation',
    client: '500+ Clinician Healthcare Platform',
    industry: 'Healthcare',
    duration: '6 months',
    challenge: 'Manual patient follow-ups consuming 200+ hours monthly with disconnected systems requiring duplicate data entry',
    solution: 'Built AI-powered chat system with RAG architecture, integrated EHR systems for real-time sync, and automated appointment reminders',
    technologies: ['TypeScript', 'Node.js', 'RAG/Vector DBs', 'PostgreSQL', 'AWS', 'DataDog'],
    results: {
      time: '200+ hrs/mo saved',
      users: '10,000+ patients',
      improvement: '75% accuracy boost',
    },
    keyOutcomes: [
      '200+ hours saved monthly on patient follow-ups',
      '75% improvement in chat response accuracy',
      '50% reduction in response time to inquiries',
      'Zero manual data entry for 10,000+ patients',
      '99.9% system uptime achieved',
    ],
    color: 'blue',
  },
  {
    id: 'tournament-platform',
    title: 'Tournament Operations Platform',
    client: 'Youth Hockey Tournament Organizer',
    industry: 'Sports & Events',
    duration: '4 months',
    challenge: '15+ spreadsheets to manage single tournament with 3+ minutes per team registration and manual hotel assignments taking days',
    solution: 'Comprehensive tournament management system with automated hotel assignments, financial reconciliation engine, and mobile-optimized registration',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    results: {
      time: '6x faster registration',
      users: '100+ teams',
      improvement: '85% time reduction',
    },
    keyOutcomes: [
      'Registration time: 3 minutes → 30 seconds',
      'Hotel assignments: 3 days → 2 hours',
      'Real-time financial tracking vs. weekly',
      'Handles 100+ teams per tournament seamlessly',
      'Zero double-bookings or conflicts',
    ],
    color: 'green',
  },
  {
    id: 'recruitment-automation',
    title: 'Recruitment Platform Automation',
    client: 'AI-Powered Hiring Platform',
    industry: 'HR Technology',
    duration: '5 months',
    challenge: 'Manual candidate tracking across multiple spreadsheets with no analytics or insights into hiring funnel',
    solution: 'GraphQL API architecture with auto-generated schemas, AI-powered interview assessment, and Salesforce CRM integration',
    technologies: ['React', 'GraphQL', 'Neo4j', 'TypeScript', 'Salesforce API'],
    results: {
      time: '70% faster response',
      users: '5,000+ leads/mo',
      improvement: '60% performance',
    },
    keyOutcomes: [
      '5,000+ leads processed automatically monthly',
      '70% faster candidate response time',
      '40% reduction in API development time',
      '60% performance improvement',
      '99.9% platform uptime',
    ],
    color: 'gold',
  },
]

export default function CaseStudiesListing() {
  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-elevora-indigo mb-6">
            Proven Results Across Industries
          </h1>
          <p className="text-xl text-elevora-slate max-w-3xl mx-auto">
            Real transformations delivering measurable impact. See how I've helped businesses eliminate manual work, 
            automate operations, and scale with confidence.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-3 bg-elevora-${study.color}`} />
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-elevora-indigo mb-2">
                          {study.title}
                        </h2>
                        <p className="text-lg text-elevora-slate">{study.client}</p>
                      </div>
                      <span className={`px-3 py-1 bg-elevora-${study.color}/10 text-elevora-${study.color} rounded-full text-sm font-medium`}>
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">The Solution</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Key Outcomes</h3>
                        <ul className="space-y-2">
                          {study.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-elevora-green flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Impact Metrics</h4>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-white rounded-lg">
                          <Clock className="h-6 w-6 mx-auto text-elevora-blue mb-2" />
                          <p className="text-2xl font-bold text-elevora-indigo">{study.results.time}</p>
                          <p className="text-sm text-gray-600">Time Saved</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <Users className="h-6 w-6 mx-auto text-elevora-green mb-2" />
                          <p className="text-2xl font-bold text-elevora-indigo">{study.results.users}</p>
                          <p className="text-sm text-gray-600">Users Impacted</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <TrendingUp className="h-6 w-6 mx-auto text-elevora-gold mb-2" />
                          <p className="text-2xl font-bold text-elevora-indigo">{study.results.improvement}</p>
                          <p className="text-sm text-gray-600">Performance Gain</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Project Duration</p>
                      <p className="text-lg font-semibold text-elevora-indigo">{study.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 p-12 bg-gradient-to-br from-elevora-blue/10 to-elevora-green/10 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-elevora-indigo mb-4">
            Ready to Be the Next Success Story?
          </h3>
          <p className="text-lg text-elevora-slate mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your manual processes into intelligent systems that drive real results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-elevora-blue text-white font-semibold rounded-lg hover:bg-elevora-indigo transition-colors group text-lg"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}