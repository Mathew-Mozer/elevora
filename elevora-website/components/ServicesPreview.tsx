'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Workflow, Database, Brain, Globe, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

const icons = {
  Workflow,
  Database,
  Brain,
  Globe,
}

export default function ServicesPreview() {
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
            How I Transform Your Business
          </h2>
          <p className="text-lg text-elevora-slate max-w-2xl mx-auto">
            From automation to AI, I provide end-to-end solutions that eliminate manual work and unlock growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-elevora-blue/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-elevora-blue/10 rounded-lg flex items-center justify-center group-hover:bg-elevora-blue/20 transition-colors">
                    <Icon className="h-6 w-6 text-elevora-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-elevora-indigo mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-elevora-slate mb-4">
                  {service.description}
                </p>
                <div className="p-3 bg-elevora-green/10 rounded-lg border border-elevora-green/20">
                  <p className="text-xs text-elevora-green font-medium">
                    Example: {service.result}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-elevora-blue text-white font-semibold rounded-lg hover:bg-elevora-indigo transition-colors group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}