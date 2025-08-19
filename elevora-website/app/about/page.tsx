import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Elevora',
  description: 'Meet Mathew Mozer, founder of Elevora. Learn how we transform businesses from manual processes to intelligent systems.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}