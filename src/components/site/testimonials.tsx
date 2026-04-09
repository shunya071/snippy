"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "田中 裕子",
    role: "ネイルサロン「Polaris」オーナー",
    initial: "T",
    text: "パソコンが苦手で不安でしたが、LINEだけでやり取りできるのが本当にラク。サイトを作ってもらってから、新規のお客様が増えて嬉しいです。",
    rating: 5,
  },
  {
    name: "山田 健太",
    role: "焼肉店「炎」店長",
    initial: "Y",
    text: "Googleマップからの来店がすごく増えました。「ネットで見て来ました」と言ってくれるお客様が毎週いて、効果を実感しています。",
    rating: 5,
  },
  {
    name: "伊藤 美咲",
    role: "エステサロン「bloom」代表",
    initial: "I",
    text: "以前は電話予約の対応に追われていましたが、オンライン予約を入れてもらってからは施術に集中できるようになりました。",
    rating: 5,
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

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            お客様の声
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1 * (i + 1)}
              variants={fadeInUp}
              className="bg-[#f8f8f8] rounded-[2rem] p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="w-8 h-8 text-[#00bfa6]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed font-medium mb-6">
                {item.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-[#e6faf7] flex items-center justify-center text-[#00bfa6] font-bold text-lg shrink-0">
                  {item.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.name} <span className="text-sm font-normal text-gray-500">様</span></p>
                  <p className="text-sm text-[#009180] font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
