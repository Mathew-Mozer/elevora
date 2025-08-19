import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkillsShowcase from '@/components/SkillsShowcase'

export const metadata: Metadata = {
  title: 'Skills & Expertise',
  description: 'Deep technical expertise across AI/ML, full-stack development, and cloud infrastructure.',
}

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-20">
          <SkillsShowcase />
        </div>
      </main>
      <Footer />
    </>
  )
}