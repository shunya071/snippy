import type { Metadata } from "next"
import Process from "@/components/site/process"
import Faq from "@/components/site/faq"
import Cta from "@/components/site/cta"

export const metadata: Metadata = {
  title: "導入の流れ",
  description:
    "LINEで相談→ヒアリング→ご提案→スタートの4ステップ。ご提案まで完全無料で、無理な勧誘は一切しません。",
}

export default function ProcessPage() {
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
            Process
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            導入の流れ
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl">
            かんたん4ステップで始められます。
            ご提案まで完全無料です。
          </p>
        </div>
      </section>

      <Process />
      <Faq />
      <Cta />
    </>
  )
}
