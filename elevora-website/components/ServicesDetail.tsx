'use client'

import { motion } from 'framer-motion'
import { Workflow, Database, Brain, Globe, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/constants'

const icons = {
  Workflow,
  Database,
  Brain,
  Globe,
}

export default function ServicesDetail() {
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
            How I Transform Your Business
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
            From automation to AI, I provide end-to-end solutions that eliminate manual work and unlock growth. 
            Every solution is tailored to your specific needs and designed to deliver measurable ROI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-text">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-primary-text/70 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-primary-text">What I Do:</h3>
                    {service.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <Check className="h-5 w-5 text-primary-accent flex-shrink-0 mt-0.5" />
                        <span className="text-primary-text/80">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary-accent/10 to-primary-accent-light/10 rounded-xl border border-primary-accent/20">
                    <h4 className="font-semibold gradient-text mb-2">Real Result:</h4>
                    <p className="text-primary-text/80">{service.result}</p>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-primary-accent/5 via-primary-accent-light/5 to-primary-accent/5 rounded-2xl flex items-center justify-center">
                    <Icon className="h-32 w-32 text-primary-accent/20" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Elevora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 card p-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-text">Why Choose Elevora?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'End-to-End Solutions',
                description: 'From initial analysis to ongoing support, I handle every aspect of your digital transformation.',
              },
              {
                title: 'Proven ROI',
                description: 'Every solution is designed to deliver measurable results and pay for itself through efficiency gains.',
              },
              {
                title: 'Industry Expertise',
                description: 'Experience across healthcare, SaaS, and sports industries means I understand complex business needs.',
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
                <h3 className="font-semibold text-xl mb-3 gradient-text">{item.title}</h3>
                <p className="text-primary-text/70">{item.description}</p>
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
          <h3 className="text-2xl font-bold text-primary-text mb-4">
            Ready to eliminate manual work and scale your business?
          </h3>
          <p className="text-lg text-primary-text/70 mb-8">
            Get a free consultation and custom roadmap for your transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-accent to-primary-accent-light text-white font-semibold rounded-lg hover:opacity-90 transition-all group text-lg"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}