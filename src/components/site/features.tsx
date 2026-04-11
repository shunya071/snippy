"use client"

import { motion } from "framer-motion"
import { Store, GitMerge, MessageCircle, BarChart3, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Store,
    title: "店舗ビジネス特化",
    description:
      "サロン、飲食店、クリニックなど地域密着型の店舗だけを支援。現場のリアルな課題を知っているから、的外れな提案をしません。",
  },
  {
    icon: GitMerge,
    title: "ワンストップ対応",
    description:
      "サイト制作・集客・業務改善まで窓口をひとつに集約。「デザインはA社、広告はB社…」とあちこちに連絡する手間がゼロになります。",
    stagger: true,
  },
  {
    icon: MessageCircle,
    title: "LINEで気軽に相談",
    description:
      "堅苦しいメールや接客中に出られない電話は不要。スキマ時間にスマホからLINEで相談でき、デジタル担当スタッフを雇う感覚で使えます。",
    hoverColor: "group-hover:bg-[#06C755]",
  },
  {
    icon: BarChart3,
    title: "成果が見える報告",
    description:
      "難しい専門用語の並ぶレポートは出しません。「何をして、予約が何件増えたか」を毎月わかりやすい言葉で共有します。",
    stagger: true,
  },
  {
    icon: Clock,
    title: "レスポンスが早い",
    description:
      "LINEでのご連絡には原則24時間以内に返信。急ぎの修正や相談にもスピーディーに対応し、お店の「今すぐどうにかしたい」に応えます。",
  },
  {
    icon: Users,
    title: "一人ひとりに合わせた提案",
    description:
      "パッケージの押し売りはしません。お店の規模・予算・目標をヒアリングした上で、あなた専用のプランをゼロからつくります。",
    stagger: true,
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

export default function Features() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#f8f8f8] overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e6faf7] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#e6faf7] rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left sticky heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="lg:col-span-4 lg:sticky lg:top-32 mb-16 lg:mb-0"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e6faf7] text-[#00bfa6] text-sm font-bold tracking-wider mb-6 shadow-sm">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.3] tracking-tight mb-6">
            <span className="text-primary">Snippy</span>が
            <br />
            選ばれる理由
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-medium">
            現場の忙しさを知っているからこそ、
            <br className="hidden lg:block" />
            専門用語を使わず、あなたの
            <br className="hidden lg:block" />
            右腕として徹底的に寄り添います。
          </p>
        </motion.div>

        {/* Right 2-column grid (6 items) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={0.1 * (i + 1)}
                  variants={fadeInUp}
                  className={feature.stagger ? "md:translate-y-0 lg:translate-y-12" : ""}
                >
                  <div className="group bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.1)] hover:-translate-y-1 hover:border-[#e6faf7] h-full">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-[#e6faf7] text-[#00bfa6] rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-8 transition-all duration-300 group-hover:scale-110 ${feature.hoverColor ?? "group-hover:bg-[#00bfa6]"} group-hover:text-white`}
                    >
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed sm:leading-loose font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
