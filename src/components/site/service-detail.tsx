"use client"

import { motion } from "framer-motion"
import { Store, Megaphone, Wand2, Check, AlertCircle } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const icons = [Store, Megaphone, Wand2] as const
const tierColors = ["bg-gray-50", "bg-[#e6faf7]", "bg-[#00bfa6]"] as const
const tierTextColors = ["text-gray-900", "text-gray-900", "text-white"] as const
const tierCheckColors = ["text-[#00bfa6]", "text-[#00bfa6]", "text-white"] as const
const tierLabelColors = ["bg-gray-200 text-gray-700", "bg-[#00bfa6]/20 text-[#00bfa6]", "bg-white/20 text-white"] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function ServiceDetail() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-left md:text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#e6faf7] text-[#00bfa6] font-bold text-xs tracking-widest mb-4">
            Service Details
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            お店に合わせて選べる
            <br className="hidden md:block" />
            3つのサービス
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mt-6 md:mt-8 rounded-full md:mx-auto" />
        </motion.div>

        {/* Service blocks */}
        <div className="space-y-16 md:space-y-24">
          {SERVICES.map((service, si) => {
            const Icon = icons[si]
            return (
              <motion.div
                key={service.slug}
                id={service.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.1}
                variants={fadeInUp}
                className="scroll-mt-24"
              >
                {/* Service header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#e6faf7] text-[#00bfa6] flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 font-medium">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl">
                  {service.description}
                </p>

                {/* こんな方におすすめ */}
                <div className="bg-[#f8f8f8] rounded-2xl p-6 mb-10 max-w-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#00bfa6] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">こんなお悩みありませんか？</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.recommend}</p>
                  </div>
                </div>

                {/* Tier cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.tiers.map((tier, ti) => {
                    const features = service.features[tier.key as keyof typeof service.features]
                    return (
                      <div
                        key={tier.key}
                        className={`${tierColors[ti]} rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 border ${ti === 2 ? "border-[#00bfa6]" : "border-gray-100"} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                      >
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${tierLabelColors[ti]}`}>
                          {tier.label}
                        </span>
                        <p className={`font-bold mb-6 ${tierTextColors[ti]}`}>
                          {tier.summary}
                        </p>
                        <ul className="space-y-3">
                          {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tierCheckColors[ti]}`} />
                              <span className={`text-sm font-medium ${ti === 2 ? "text-white/90" : "text-gray-600"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
