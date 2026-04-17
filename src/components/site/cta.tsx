"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, ChevronRight, Phone } from "lucide-react"
import { SNIPPY_LINE_URL } from "@/lib/constants"

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Cta() {
  return (
    <section className="relative bg-[#00bfa6] py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-white opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6">
            まずは気軽に
            <br />
            ご相談ください
          </h2>
          <p className="text-white/90 text-sm sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto text-left sm:text-center">
            「何から始めればいいかわからない」でも大丈夫。
            <br className="hidden sm:block" />
            お店の状況をお聞きして、最適なプランをご提案します。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.2}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={SNIPPY_LINE_URL}
            data-gtm-click="line_cta"
            data-gtm-label="cta_section"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,199,85,0.4)] w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            LINEで無料相談
            <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-2 text-white/70 text-sm"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="text-xs sm:text-sm">お電話でのご相談: 058-XXX-XXXX（平日 10:00〜18:00）</span>
        </motion.div>
      </div>
    </section>
  )
}
