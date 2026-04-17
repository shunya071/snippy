"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const newsItems = [
  { date: "2025.04.01", category: "お知らせ", title: "Snippy公式サイトをリニューアルしました" },
  { date: "2025.03.15", category: "事例紹介", title: "ヘアサロン「Luana」様の導入事例を公開しました" },
  { date: "2025.03.01", category: "お知らせ", title: "LINE無料相談を開始しました" },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function News() {
  return (
    <section className="py-20 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-left md:text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#e6faf7] text-[#00bfa6] font-bold text-xs tracking-widest mb-4">
            News
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            お知らせ
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mt-6 md:mt-8 rounded-full md:mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
        >
          {newsItems.map((item, i) => (
            <Link
              key={i}
              href="/blog"
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-5 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-gray-100 last:border-0 hover:bg-[#f8f8f8] transition-colors group"
            >
              <div className="flex items-center gap-3 shrink-0">
                <time className="text-xs sm:text-sm text-gray-400 font-medium tabular-nums">
                  {item.date}
                </time>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#e6faf7] text-[#00bfa6] text-[10px] sm:text-xs font-bold">
                  {item.category}
                </span>
              </div>
              <span className="text-gray-800 font-medium text-sm md:text-base group-hover:text-[#00bfa6] transition-colors flex-1">
                {item.title}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-300 shrink-0 group-hover:text-[#00bfa6] group-hover:translate-x-1 transition-all hidden sm:block" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeInUp}
          className="text-center mt-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00bfa6] hover:underline"
          >
            すべてのお知らせを見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
