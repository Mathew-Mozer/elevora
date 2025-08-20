import PageWrapper from '@/components/PageWrapper'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import ProblemsShowcase from '@/components/ProblemsShowcase'
import ServicesPreview from '@/components/ServicesPreview'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Hero />
        <ProblemSolution />
        <ProblemsShowcase />
        <ServicesPreview />
        <CTA />
      </main>
    </PageWrapper>
  );
}
