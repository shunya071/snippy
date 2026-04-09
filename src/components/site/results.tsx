"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, CalendarCheck, Mail, Star, Quote } from "lucide-react"

const stats = [
  { icon: Search, label: "検索表示回数", value: "3.2", unit: "倍" },
  { icon: CalendarCheck, label: "予約数", value: "2.5", unit: "倍" },
  { icon: Mail, label: "問い合わせ", value: "30", unit: "件/月 増", prefix: "+" },
]

const voices = [
  {
    name: "佐藤 香織",
    role: "ヘアサロン「Luana」 オーナー",
    initial: "S",
    rating: 5,
    text: "導入してすぐ、近所にお住まいの方からの新規予約が目に見えて増えました。パソコンが苦手な私でも、スマホひとつで簡単にお店のお知らせを更新できるのが本当に助かっています。",
  },
  {
    name: "田中 裕子",
    role: "ネイルサロン「Polaris」 オーナー",
    initial: "T",
    rating: 5,
    text: "LINEだけでやり取りできるのが本当にラク。サイトを作ってもらってから、新規のお客様が増えて嬉しいです。提案もいつも具体的で助かります。",
  },
  {
    name: "山田 健太",
    role: "焼肉店「炎」 店長",
    initial: "Y",
    rating: 5,
    text: "Googleマップからの来店がすごく増えました。「ネットで見て来ました」と言ってくれるお客様が毎週いて、効果を実感しています。",
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

function VoiceCard({ voice, isActive, onClick }: { voice: typeof voices[number]; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-[28px] p-6 md:p-8 border-2 transition-all duration-500 ${
        isActive
          ? "bg-white shadow-[8px_12px_0px_#009180] border-[#33ccb8]/30 scale-100 opacity-100"
          : "bg-white/80 shadow-none border-transparent scale-[0.92] opacity-60 hover:opacity-80"
      }`}
    >
      {/* Quote icon — inside the card, no overlap */}
      <div className="flex items-center gap-2 mb-4">
        <Quote className="w-5 h-5 text-[#00bfa6]/30" />
        <div className="flex gap-0.5">
          {[...Array(voice.rating)].map((_, j) => (
            <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      <p className={`text-gray-800 font-bold leading-relaxed tracking-wide mb-6 ${isActive ? "text-base md:text-lg" : "text-sm line-clamp-4"}`}>
        「{voice.text}」
      </p>

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-[#e6faf7] flex items-center justify-center shrink-0 text-[#00bfa6] font-bold text-base">
          {voice.initial}
        </div>
        <div>
          <p className="text-gray-900 font-bold text-sm">
            {voice.name} <span className="text-xs font-normal text-gray-500">様</span>
          </p>
          <p className="text-[#009180] font-medium text-xs">{voice.role}</p>
        </div>
      </div>
    </button>
  )
}

export default function Results() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="relative w-full bg-[#00bfa6] overflow-hidden py-24 md:py-32">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 100%)",
        }}
      />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
            <span className="text-white font-bold tracking-widest text-xs md:text-sm">
              Snippyを導入した店舗の実績
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            驚きの
            <span className="relative inline-block">
              導入効果
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-300 rounded-full opacity-80 -rotate-1" />
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0.1 * (i + 1)}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px] p-8 flex flex-col items-center text-center group hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-white/90 font-bold text-lg md:text-xl mb-4 flex items-center gap-2">
                  <Icon className="w-6 h-6 text-white" />
                  {stat.label}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  {stat.prefix && (
                    <span className="text-3xl font-black text-white">{stat.prefix}</span>
                  )}
                  <span className="text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-md group-hover:scale-105 transition-transform duration-300 origin-bottom tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-2xl lg:text-3xl font-black text-white">{stat.unit}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={fadeInUp}
          className="text-center text-white/60 text-xs mb-16"
        >
          ※ 上記はこれまでの導入店舗における実績の一例です。成果はお店の業種・立地・運用状況によって異なり、同様の効果を保証するものではありません。
        </motion.p>

        {/* Voice cards — 3 cards visible, center is active */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.5}
          variants={fadeInUp}
        >
          <h3 className="text-center text-white font-bold text-lg mb-8">お客様の声</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
            {voices.map((voice, i) => (
              <VoiceCard
                key={voice.name}
                voice={voice}
                isActive={i === current}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {voices.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
                aria-label={`お客様の声 ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
