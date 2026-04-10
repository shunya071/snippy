"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, ChevronRight, ArrowRight, Monitor, TrendingUp, Settings } from "lucide-react"
import { SNIPPY_LINE_URL } from "@/lib/constants"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const serviceFeatures = [
  { icon: Monitor, label: "サイト制作", desc: "集客できる看板をつくる" },
  { icon: TrendingUp, label: "集客マーケティング", desc: "お客様を増やす仕組み" },
  { icon: Settings, label: "業務改善", desc: "手間を減らして本業に集中" },
]

const hero = "/images/hero-illust.webp"

export default function Hero() {
  return (
    <section
      className="relative min-h-0 lg:min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden pt-20 md:pt-0 z-10"
      style={{
        background: "linear-gradient(284deg, #009e8a 43%, #00bfa6 73%, #4de8d4 103%)",
      }}
    >
      {/* Background illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Desktop */}
        <div className="hidden lg:block absolute right-[-80px] top-1/2 -translate-y-1/2">
          <Image src={hero} alt="" width={800} height={800} priority className="opacity-50" aria-hidden="true" />
        </div>
        {/* Mobile — centered bottom, subtle */}
        <div className="lg:hidden absolute right-[-40px] bottom-[80px]">
          <Image src={hero} alt="" width={320} height={320} priority className="opacity-[0.12]" aria-hidden="true" />
        </div>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#00bfa6]/80 via-[#00bfa6]/40 to-transparent lg:from-[#00bfa6]/70 lg:via-[#00bfa6]/30 lg:to-transparent" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 flex-1 flex items-center py-10 sm:py-14 md:py-24">
        <div className="w-full lg:w-2/3 text-white flex flex-col items-start">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
            className="text-xs sm:text-sm md:text-base font-bold tracking-wider mb-3 sm:mb-4 text-white"
          >
            <span className="bg-white text-[#03c2b3] px-6 catch-copy relative">業務効率化</span>×<span className="bg-white text-[#03c2b3] px-6 catch-copy relative">Web集客支援</span>
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.25] tracking-tight mb-4 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          >
            お店の集客、
            <br />
            もう悩まない。
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-white/90 mb-8 sm:mb-10 max-w-lg"
          >
            サロン・クリニック・飲食店に特化した、
            <br className="hidden sm:block" />
            岐阜のWeb集客パートナー。
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              href={SNIPPY_LINE_URL}
              className="group inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(6,199,85,0.35)]"
            >
              <MessageCircle className="w-5 h-5" />
              LINEで無料相談
              <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300"
            >
              サービスを見る
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom service band */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-3 gap-3 sm:gap-8">
            {serviceFeatures.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-2 sm:gap-3 text-white">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold truncate">{item.label}</p>
                    <p className="text-[10px] sm:text-xs text-white/70 truncate hidden sm:block">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
