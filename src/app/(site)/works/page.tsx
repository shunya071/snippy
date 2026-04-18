import type { Metadata } from "next"
import Cases from "@/components/site/cases"
import Testimonials from "@/components/site/testimonials"
import Cta from "@/components/site/cta"

export const metadata: Metadata = {
  title: "導入事例",
  description:
    "Snippyを導入した店舗の実績をご紹介。サロン・飲食店・整骨院など、さまざまな業種の成功事例をご覧ください。",
}

export default function WorksPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-28 sm:pt-32 pb-12 sm:pb-16"
        style={{
          background:
            "linear-gradient(284deg, #009e8a 43%, #00bfa6 73%, #4de8d4 103%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-white/70 text-sm font-bold tracking-widest uppercase mb-3">
            Works
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            導入事例
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl">
            さまざまな業種の店舗オーナー様に
            ご利用いただいています。
          </p>
        </div>
      </section>

      <Cases showMoreLink={false} />
      <Testimonials />
      <Cta />
    </>
  )
}
