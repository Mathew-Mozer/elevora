'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import Link from 'next/link'

export default function AboutContent() {
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
            From Spreadsheet Chaos to System Clarity
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
            Elevora builds clarity from complexity, transforming how businesses operate
          </p>
        </motion.div>

        {/* Meet the Founder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="card p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-primary-text mb-4">
              Meet the Founder
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold gradient-text mb-2">
                  {siteConfig.founder.name}
                </h3>
                <p className="text-lg text-primary-accent mb-4">
                  {siteConfig.founder.title}, Elevora
                </p>
                <p className="text-lg text-primary-text/80 mb-6">
                  {siteConfig.founder.bio}
                </p>
              </div>
              
              <div className="border-l-4 border-primary-accent pl-6 py-2">
                <p className="text-lg text-primary-text/80 italic">
                  &ldquo;{siteConfig.founder.quote}&rdquo;
                </p>
                <p className="text-sm text-primary-accent mt-3">
                  - Mathew Mozer, Founder
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Elevora Approach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center text-primary-text mb-12">
            The Elevora Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-text">Systems Thinking</h3>
              </div>
              <ul className="space-y-2 text-primary-text/80">
                <li>• Elevora spots inefficiencies across workflows and redesigns them into cohesive systems</li>
                <li>• We see order in chaos, uncovering connections and problems others miss</li>
                <li>• Every transformation follows clear phases: Discovery → Prototype → Solution → Launch</li>
              </ul>
            </div>

            <div className="card hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-text">True Partnership</h3>
              </div>
              <ul className="space-y-2 text-primary-text/80">
                <li>• Elevora translates complex concepts into plain business language</li>
                <li>• We guide you through the journey, building your confidence alongside your system</li>
                <li>• Everything ties to business outcomes - time saved, errors reduced, revenue unlocked</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Why Elevora Exists */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center text-primary-text mb-12">
            Why Elevora Exists
          </h2>
          
          <div className="card bg-gradient-to-br from-primary-accent/5 to-primary-accent-light/5 p-8 md:p-12">
            <p className="text-lg text-primary-text/80 mb-6">
              Every business has unique challenges, but the solution isn&apos;t always unique—it&apos;s about applying proven patterns in the right way.
            </p>
            <p className="text-lg text-primary-text/80">
              Elevora exists to bring enterprise-level transformation capabilities to growing businesses. 
              We believe every company deserves systems that work as hard as they do.
            </p>
          </div>
        </motion.div>

        {/* The Elevora Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center text-primary-text mb-12">
            The Elevora Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Start with Understanding', desc: 'Deep dive into your business before proposing solutions' },
              { step: '2', title: 'Build What You Need', desc: 'No over-engineering, just solving real problems' },
              { step: '3', title: 'Measure Everything', desc: 'Focus on ROI and quantifiable improvements' },
              { step: '4', title: 'Transfer Knowledge', desc: 'Documentation and training so you\'re never dependent' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card hover-lift text-center"
              >
                <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold gradient-text">{item.step}</span>
                </div>
                <h3 className="font-semibold text-primary-text mb-2">{item.title}</h3>
                <p className="text-sm text-primary-text/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Team */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-center text-primary-text mb-12">
            The Elevora Team
          </h2>
          
          <div className="card p-8 text-center">
            <Lightbulb className="h-12 w-12 text-primary-accent mx-auto mb-4" />
            <p className="text-lg text-primary-text/80">
              While Mathew leads every client engagement personally, Elevora maintains a network of specialized experts 
              who contribute when specific expertise is needed, ensuring you always get the best solution for your unique challenges.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-display font-bold text-primary-text mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-text/80 mb-8 max-w-2xl mx-auto">
            Give Elevora your toughest process, and we&apos;ll make it simple.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-accent to-primary-accent-light text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>Book Your Free Consultation</span>
            <CheckCircle className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}