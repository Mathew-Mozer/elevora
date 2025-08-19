import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProcessTimeline from '@/components/ProcessTimeline'

export const metadata: Metadata = {
  title: 'Process',
  description: 'Your journey from chaos to clarity with Elevora Technologies.',
}

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <ProcessTimeline />
      </main>
      <Footer />
    </>
  )
}