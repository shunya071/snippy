"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, Users, Lightbulb, Rocket, ChevronRight, CheckCircle } from "lucide-react"
import { SNIPPY_LINE_URL } from "@/lib/constants"

const steps = [
  {
    icon: MessageCircle,
    title: "LINEで相談",
    description: "「予約が増えない」「サイトがない」など、困っていることをざっくりで構いません。お気軽にLINEでメッセージをお送りください。",
    free: true,
  },
  {
    icon: Users,
    title: "ヒアリング",
    description: "お店の状況・目標・ご予算を丁寧にお伺いします。ITに詳しくなくても大丈夫。専門用語は使いません。",
    free: true,
  },
  {
    icon: Lightbulb,
    title: "ご提案",
    description: "ヒアリング内容をもとに、あなたのお店だけの具体的な施策プランをお作りします。サイト・集客・業務改善を横断した幅広い提案が可能です。",
    free: true,
  },
  {
    icon: Rocket,
    title: "スタート",
    description: "ご納得いただけたら契約・実装開始。スタート後も月次レポートとLINEサポートで伴走し続けます。",
    free: false,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#e6faf7] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-left md:text-center mb-12 md:mb-24"
        >
          <p className="text-[#00bfa6] font-bold text-sm tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            導入の流れ
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            かんたん<span className="text-[#00bfa6] font-bold text-xl px-1">4</span>ステップで始められます
          </p>
          {/* Free badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#06C755]/10 border border-[#06C755]/20">
            <span className="w-2 h-2 rounded-full bg-[#06C755] animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#06C755]">
              ご提案まで完全無料<span className="hidden sm:inline"> — まずはお気軽にご相談ください</span>
            </span>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#e6faf7] z-0" />
          {/* Free zone overlay on line */}
          <div className="hidden md:block absolute top-[38px] left-[12.5%] right-[37.5%] h-1 bg-[#06C755]/20 rounded-full z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.1 * (i + 1)}
                variants={fadeInUp}
                className="relative flex flex-row md:flex-col items-start md:items-center gap-5 md:gap-0 group"
              >
                {/* Icon circle */}
                <div className="relative z-10 mb-0 md:mb-8 shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-white border-2 ${step.free ? "border-[#06C755]/30" : "border-[#e6faf7]"} flex items-center justify-center text-[#00bfa6] shadow-[0_4px_20px_-4px_rgba(0,191,166,0.1)] transition-all duration-300 group-hover:border-[#00bfa6] group-hover:scale-105`}>
                    <div className={`absolute -top-2 -left-2 w-8 h-8 ${step.free ? "bg-[#06C755]" : "bg-[#00bfa6]"} text-white font-bold rounded-full flex items-center justify-center text-sm shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                      {i + 1}
                    </div>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 md:mb-3 flex items-center md:justify-center gap-2">
                    {step.title}
                    {step.free && (
                      <span className="bg-[#06C755] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider shadow-sm">
                        無料
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed md:max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.5}
          variants={fadeInUp}
          className="mt-14 md:mt-20 pt-10 border-t border-gray-100 text-center flex flex-col items-start sm:items-center"
        >
          <p className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#00bfa6] shrink-0" />
            ヒアリングからご提案まで無料。無理な勧誘は一切しません。
          </p>
          <Link
            href={SNIPPY_LINE_URL}
            data-gtm-click="line_cta"
            data-gtm-label="process"
            className="group inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-200 shadow-[0_8px_20px_-6px_rgba(6,199,85,0.4)] hover:shadow-[0_10px_25px_-4px_rgba(6,199,85,0.5)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            無料でLINE相談してみる
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
