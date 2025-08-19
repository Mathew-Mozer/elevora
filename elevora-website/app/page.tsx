import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import SkillsShowcase from '@/components/SkillsShowcase'
import ServicesPreview from '@/components/ServicesPreview'
import CaseStudiesPreview from '@/components/CaseStudiesPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <SkillsShowcase />
        <ServicesPreview />
        <CaseStudiesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
