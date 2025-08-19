import PageWrapper from '@/components/PageWrapper'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import SkillsShowcase from '@/components/SkillsShowcase'
import ServicesPreview from '@/components/ServicesPreview'
import CaseStudiesPreview from '@/components/CaseStudiesPreview'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Hero />
        <ProblemSolution />
        <SkillsShowcase />
        <ServicesPreview />
        <CaseStudiesPreview />
        <CTA />
      </main>
    </PageWrapper>
  );
}
