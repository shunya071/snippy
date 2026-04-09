"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock, FileText, HeartHandshake } from "lucide-react"

const supports = [
  {
    icon: MessageCircle,
    title: "LINEでいつでも相談",
    description: "営業時間中はもちろん、思いついたときにいつでもLINEでメッセージを送れます。",
  },
  {
    icon: Clock,
    title: "迅速な対応",
    description: "お問い合わせには原則24時間以内にご返信。急ぎのご要望にも柔軟に対応します。",
  },
  {
    icon: FileText,
    title: "わかりやすい月次レポート",
    description: "数字の変化とその理由を、専門用語を使わず毎月お伝えします。",
  },
  {
    icon: HeartHandshake,
    title: "伴走型サポート",
    description: "作って終わりではありません。お店の成長に合わせて、改善提案を続けます。",
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

export default function Support() {
  return (
    <section id="support" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#e6faf7] text-[#00bfa6] font-bold text-xs tracking-widest mb-4">
            Support
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            サポート体制
          </h2>
          <p className="text-gray-500 text-lg mt-6">
            導入後も安心。あなたのお店の成長を一緒に支えます。
          </p>
          <div className="w-16 h-1.5 bg-[#00bfa6] mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supports.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.1 * (i + 1)}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#e6faf7] text-[#00bfa6] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#00bfa6] group-hover:text-white group-hover:scale-110">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
