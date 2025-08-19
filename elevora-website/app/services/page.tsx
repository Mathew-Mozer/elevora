import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicesDetail from '@/components/ServicesDetail'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Transform your business with process automation, AI intelligence, and custom platforms.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesDetail />
      </main>
      <Footer />
    </>
  )
}