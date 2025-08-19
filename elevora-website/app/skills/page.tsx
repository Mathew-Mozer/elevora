import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProblemsShowcase from '@/components/ProblemsShowcase'

export const metadata: Metadata = {
  title: 'Solutions - Problems Elevora Solves',
  description: 'From healthcare overwhelm to recruitment bottlenecks, see how Elevora transforms business challenges into automated solutions.',
}

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-20">
          <ProblemsShowcase />
        </div>
      </main>
      <Footer />
    </>
  )
}