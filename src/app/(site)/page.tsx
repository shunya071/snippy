import Hero from "@/components/site/hero"
import Services from "@/components/site/services"
import Features from "@/components/site/features"
import Process from "@/components/site/process"
import Results from "@/components/site/results"
import ServiceDetail from "@/components/site/service-detail"
import Cases from "@/components/site/cases"
import Testimonials from "@/components/site/testimonials"
import Faq from "@/components/site/faq"
import News from "@/components/site/news"
import Support from "@/components/site/support"
import Promise from "@/components/site/promise"
import Cta from "@/components/site/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Process />
      <Results />
      <ServiceDetail />
      <Cases />
      <Testimonials />
      <Faq />
      <News />
      <Support />
      <Promise />
      <Cta />
    </>
  )
}
