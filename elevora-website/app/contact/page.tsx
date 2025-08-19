import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's explore your transformation. Book a free consultation today.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}