import type { Metadata } from "next"
import Support from "@/components/site/support"
import Promise from "@/components/site/promise"
import Faq from "@/components/site/faq"
import Cta from "@/components/site/cta"

export const metadata: Metadata = {
  title: "サポート体制",
  description:
    "LINEでいつでも相談可能。原則24時間以内の返信、わかりやすい月次レポート、伴走型サポートでお店の成長を支えます。",
}

export default function SupportPage() {
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
            Support
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            サポート体制
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl">
            導入後も安心。お店の成長を一緒に支えます。
          </p>
        </div>
      </section>

      <Support />
      <Promise />
      <Faq />
      <Cta />
    </>
  )
}
