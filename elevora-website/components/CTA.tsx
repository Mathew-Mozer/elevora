'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Gift, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-elevora-indigo via-elevora-blue to-elevora-indigo">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and up to 5 hours of discovery to see exactly how we can automate your processes and scale your operations.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Calendar className="h-6 w-6" />
              <div className="text-left">
                <p className="font-semibold">Free 60-Min Strategy Session</p>
                <p className="text-sm opacity-80">No commitment required</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Gift className="h-6 w-6" />
              <div className="text-left">
                <p className="font-semibold">Up to 5 Hours Free Discovery</p>
                <p className="text-sm opacity-80">Get a custom roadmap</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-elevora-indigo font-bold rounded-lg hover:bg-elevora-cloud transition-colors text-lg group shadow-xl"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-sm opacity-80"
          >
            No risk. No obligation. Just a conversation about your business challenges.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}