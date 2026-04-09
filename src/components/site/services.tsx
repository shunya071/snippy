"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, BarChart3, Settings, ArrowRight, MessageCircle, ChevronRight, FileText } from "lucide-react"
import { SERVICES, SNIPPY_LINE_URL } from "@/lib/constants"

const icons = [Monitor, BarChart3, Settings] as const
const accents = ["bg-[#00bfa6]", "bg-[#06C755]", "bg-[#0284c7]"] as const
const accentTexts = ["text-[#00bfa6]", "text-[#06C755]", "text-[#0284c7]"] as const
const nums = ["01", "02", "03"] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#e6faf7] text-[#00bfa6] font-bold text-xs tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            3つのサービスで、お店の
            <br className="hidden md:block" />
            Web集客をまるごとサポート
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Cards — number + icon + tagline + short description. Minimal, overview-only. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.1 * (i + 1)}
                variants={fadeInUp}
              >
                <Link
                  href={`#${service.slug}`}
                  className="group block h-full bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.08)]"
                >
                  {/* Accent top bar */}
                  <div className={`${accents[i]} h-1.5`} />

                  <div className="p-8 md:p-10">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-4xl font-black ${accentTexts[i]} opacity-20`}>
                        {nums[i]}
                      </span>
                      <div className={`w-14 h-14 rounded-2xl ${accents[i]}/10 flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${accentTexts[i]}`} />
                      </div>
                    </div>

                    {/* Name + Tagline */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className={`text-sm font-bold ${accentTexts[i]} mb-4`}>{service.tagline}</p>

                    {/* Short description — 2 lines max */}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">
                      {service.description}
                    </p>

                    {/* Link */}
                    <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${accentTexts[i]} group-hover:underline`}>
                      詳しく見る
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeInUp}
          className="mt-20 pt-12 border-t border-gray-100 text-center"
        >
          <p className="text-gray-900 font-bold text-xl mb-2">もっと詳しく知りたい方へ</p>
          <p className="text-gray-500 text-sm mb-8">お店の状況に合わせて、最適なプランをご提案します。</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SNIPPY_LINE_URL}
              className="group inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(6,199,85,0.35)]"
            >
              <MessageCircle className="w-5 h-5" />
              LINEで相談する
              <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border-2 border-[#00bfa6] text-[#00bfa6] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#00bfa6] hover:text-white"
            >
              <FileText className="w-5 h-5" />
              資料請求する
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
