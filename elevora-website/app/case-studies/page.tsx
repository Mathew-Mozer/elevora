import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CaseStudiesListing from '@/components/CaseStudiesListing'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real transformations delivering measurable impact for businesses across industries.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesListing />
      </main>
      <Footer />
    </>
  )
}