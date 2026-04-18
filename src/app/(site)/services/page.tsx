import type { Metadata } from "next"
import ServiceDetail from "@/components/site/service-detail"
import Cta from "@/components/site/cta"

export const metadata: Metadata = {
  title: "サービス",
  description:
    "サイト制作・マーケティング・業務改善の3つのサービスで、お店のWeb集客をまるごとサポート。お店の状況に合わせて選べるプランをご用意しています。",
}

export default function ServicesPage() {
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
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            サービス紹介
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl">
            お店の規模や目標に合わせて選べる3つのサービス。
            まずは気軽にご相談ください。
          </p>
        </div>
      </section>

      <ServiceDetail />
      <Cta />
    </>
  )
}
