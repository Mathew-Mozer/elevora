'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Calendar, Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate form submission
    // In production, this would send to your email service
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: 'What size businesses do you work with?',
      answer: 'Typically businesses with 10-100 employees, but I evaluate based on process complexity, not company size. If you\'re drowning in manual work, we should talk.',
    },
    {
      question: 'What if my industry is highly specialized?',
      answer: 'I\'ve worked in healthcare (HIPAA compliant), finance, and sports. Part of my value is bringing cross-industry insights. I learn your domain during the free discovery phase.',
    },
    {
      question: 'How long do projects typically take?',
      answer: 'Quick wins can be deployed in 2-4 weeks. Full transformations typically take 2-6 months, delivered in phases so you see value quickly.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'I use modern, proven technologies tailored to your needs. Everything I build is maintainable, scalable, and uses industry standards.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer maintenance and enhancement packages after launch. I also ensure you have documentation and training to be self-sufficient.',
    },
    {
      question: 'How do you charge for projects?',
      answer: 'After the free discovery, I provide fixed-price proposals for defined scopes. This gives you cost certainty and aligns our incentives.',
    },
  ]

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
            Let&apos;s Explore Your Transformation
          </h1>
          <p className="text-xl text-primary-text/80 max-w-3xl mx-auto">
            Book your free consultation and discover how we can automate your processes and scale your operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Calendly & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Calendly Embed Placeholder */}
            <div className="card rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-elevora-blue" />
                <h2 className="text-2xl font-bold text-primary-text">Book Your Free Strategy Session</h2>
              </div>
              <div className="bg-primary-bg rounded-lg p-12 text-center border border-primary-border/20">
                <Calendar className="h-16 w-16 text-elevora-blue mx-auto mb-4" />
                <p className="text-primary-text/70 mb-4">Calendly widget will be embedded here</p>
                <p className="text-sm text-primary-text/60">60-minute strategy session • No preparation needed</p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-primary-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-text mb-4">What to Expect</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-text mb-1">Before Our Call</h4>
                  <p className="text-sm text-primary-text/80">You&apos;ll receive a confirmation with Zoom link. Optional: Send any materials you&apos;d like me to review.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-text mb-1">During Our Call</h4>
                  <p className="text-sm text-primary-text/80">We&apos;ll discuss your current challenges, I&apos;ll ask questions to understand your operations, and we&apos;ll identify potential quick wins.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-text mb-1">After Our Call</h4>
                  <p className="text-sm text-primary-text/80">You&apos;ll receive a summary of our discussion. If we&apos;re a fit, we&apos;ll schedule free discovery sessions. If not, I&apos;ll try to point you in the right direction.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-text">Direct Contact</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-3 text-primary-text/80 hover:text-primary-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-text/80 hover:text-primary-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-text/80 hover:text-primary-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub Portfolio</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary-text mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-text mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 bg-primary-bg border border-primary-border/30 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-colors text-primary-text"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 bg-primary-bg border border-primary-border/30 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-colors text-primary-text"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary-text mb-2">
                    Company
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-4 py-3 bg-primary-bg border border-primary-border/30 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-colors text-primary-text"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-text mb-2">
                    How can I help you? *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-4 py-3 bg-primary-bg border border-primary-border/30 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-colors resize-none text-primary-text"
                    placeholder="Tell me about your current challenges and what you'd like to automate..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-4 bg-green-50 text-green-800 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! I&apos;ll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-4 bg-red-50 text-red-800 rounded-lg"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span>Something went wrong. Please try again or email directly.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-accent to-primary-accent-light text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-primary-text mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-primary-accent/10 rounded-xl p-6"
              >
                <h3 className="font-semibold text-primary-text mb-2">{faq.question}</h3>
                <p className="text-primary-text/80 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}