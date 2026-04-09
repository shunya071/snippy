"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Handshake } from "lucide-react"

const promises = [
  {
    icon: Eye,
    title: "専門用語を使いません",
    description: "すべてのやり取りを、わかりやすい言葉で行います。IT用語でごまかすことはしません。",
  },
  {
    icon: Handshake,
    title: "無理な売り込みはしません",
    description: "お店に本当に必要なことだけをご提案します。不要なオプションを勧めることはありません。",
  },
  {
    icon: Shield,
    title: "成果にこだわります",
    description: "「作って終わり」ではなく、実際にお客様が増えるまで伴走し続けます。",
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

export default function Promise() {
  return (
    <section className="py-20 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#e6faf7] text-[#00bfa6] font-bold text-xs tracking-widest mb-4">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            私たちの約束
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.1 * (i + 1)}
                variants={fadeInUp}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-[#e6faf7] text-[#00bfa6] flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
