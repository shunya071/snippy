import dynamic from "next/dynamic"
import Hero from "@/components/site/hero"
import Services from "@/components/site/services"
import Features from "@/components/site/features"
import Process from "@/components/site/process"

const Results = dynamic(() => import("@/components/site/results"))
const ServiceDetail = dynamic(() => import("@/components/site/service-detail"))
const Cases = dynamic(() => import("@/components/site/cases"))
const Testimonials = dynamic(() => import("@/components/site/testimonials"))
const Faq = dynamic(() => import("@/components/site/faq"))
const News = dynamic(() => import("@/components/site/news"))
const Support = dynamic(() => import("@/components/site/support"))
const Promise = dynamic(() => import("@/components/site/promise"))
const Cta = dynamic(() => import("@/components/site/cta"))

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
