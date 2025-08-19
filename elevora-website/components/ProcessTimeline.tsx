'use client'

import { motion } from 'framer-motion'
import { Phone, Search, Map, Rocket, CheckCircle, Gift, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Free Strategy Session',
    duration: '60 minutes',
    icon: Phone,
    description: "Let's discuss your current challenges and explore potential solutions.",
    details: [
      'Your current pain points and bottlenecks',
      'Biggest opportunities for automation',
      'Technical feasibility assessment',
      'Potential ROI and impact',
      "Whether we're a good fit to work together",
    ],
    deliverables: [
      'Honest assessment of your situation',
      'High-level solution directions',
      'Realistic timeline expectations',
      'Clear next steps',
    ],
    color: 'blue',
  },
  {
    number: '02',
    title: 'Discovery & Analysis',
    duration: 'Up to 5 hours - FREE',
    icon: Search,
    description: 'Deep dive into your processes to understand exactly what you need.',
    details: [
      'Map your existing processes in detail',
      'Identify all data sources and systems',
      'Interview key stakeholders',
      'Analyze integration points',
      'Calculate potential ROI',
      'Design solution architecture',
    ],
    deliverables: [
      'Complete process documentation',
      'Gap analysis report',
      'Preliminary solution design',
      'No commitment required',
    ],
    color: 'green',
    highlight: true,
  },
  {
    number: '03',
    title: 'Custom Transformation Roadmap',
    duration: '2-3 days',
    icon: Map,
    description: 'Receive a detailed plan for your digital transformation.',
    details: [
      'Detailed analysis of current state',
      'Proposed future state architecture',
      'Phased implementation plan',
      'Technology recommendations',
      'Time and investment estimates',
      'Expected ROI calculations',
      'Risk assessment and mitigation',
    ],
    deliverables: [
      'Comprehensive roadmap document',
      'Technical architecture diagrams',
      'Implementation timeline',
      'Fixed-price proposal',
    ],
    color: 'gold',
  },
  {
    number: '04',
    title: 'Implementation',
    duration: '2-6 months typical',
    icon: Rocket,
    description: 'Transform your business with iterative development and continuous feedback.',
    details: [
      'Start with highest-impact quick wins',
      'Weekly progress updates and demos',
      'Iterative development with your feedback',
      'Continuous testing and validation',
      'Training and documentation included',
      'Post-launch support and optimization',
    ],
    deliverables: [
      'Fully functional solution',
      'Complete documentation',
      'Team training',
      'Ongoing support options',
    ],
    color: 'indigo',
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-primary-bg">
      <div className="container-width section-padding">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-text mb-6">
            Your Journey from Chaos to Clarity
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto mb-8">
            A proven 4-step process that takes you from manual processes to intelligent automation, 
            with no risk and complete transparency.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-accent/10 border border-primary-accent/20 rounded-full">
            <Gift className="h-5 w-5 text-elevora-green" />
            <span className="text-sm font-medium gradient-text">
              Get up to 5 hours of discovery absolutely FREE
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-border/20 hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 bg-elevora-${step.color}/10 rounded-full flex items-center justify-center relative z-10`}>
                        <Icon className={`h-8 w-8 text-elevora-${step.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-11 mt-4 lg:mt-0 ${step.highlight ? 'bg-primary-accent/10 rounded-2xl p-8 border-2 border-primary-accent/20' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`text-4xl font-bold text-elevora-${step.color}/20`}>
                              {step.number}
                            </span>
                            <h2 className="text-2xl font-bold text-primary-text">
                              {step.title}
                            </h2>
                            {step.highlight && (
                              <span className="px-3 py-1 bg-gradient-to-r from-primary-accent to-primary-accent-light text-white rounded-full text-xs font-bold">
                                FREE
                              </span>
                            )}
                          </div>
                          <p className="text-primary-text/80 mb-1">{step.description}</p>
                          <p className="text-sm font-medium gradient-text">Duration: {step.duration}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-primary-text mb-3">What We&apos;ll Do</h3>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-elevora-green flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-primary-text/80">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary-text mb-3">What You&apos;ll Get</h3>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-elevora-blue flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-primary-text/80">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Why This Approach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-primary-accent to-primary-accent-light rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why This Approach Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'No Risk',
                description: 'You get value before spending money with free discovery and roadmap.',
              },
              {
                title: 'Full Clarity',
                description: 'Clear roadmap and fixed pricing before any commitment.',
              },
              {
                title: 'Proven Expertise',
                description: 'See my capabilities during discovery phase.',
              },
              {
                title: 'No Surprises',
                description: 'Fixed scope and timeline before starting implementation.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-primary-text mb-4">
            Ready to Start Your Transformation Journey?
          </h3>
          <p className="text-lg text-primary-text/80 mb-8 max-w-2xl mx-auto">
            Book your free strategy session today and discover how much time and money you could save with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-accent to-primary-accent-light text-white font-semibold rounded-lg hover:opacity-90 transition-opacity group text-lg"
            >
              Book Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-accent text-primary-accent font-semibold rounded-lg hover:bg-gradient-to-r hover:from-primary-accent hover:to-primary-accent-light hover:text-white transition-colors text-lg"
            >
              See Success Stories
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}