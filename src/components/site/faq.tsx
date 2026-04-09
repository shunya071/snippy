"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/constants"

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base md:text-lg font-bold text-gray-900 pr-4 group-hover:text-[#00bfa6] transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-[#00bfa6]" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export default function Faq() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#e6faf7] text-[#00bfa6] font-bold text-xs tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            よくあるご質問
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mx-auto mt-8 rounded-full" />
        </motion.div>

        {FAQ_ITEMS.map((category, ci) => (
          <motion.div
            key={category.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1 * (ci + 1)}
            variants={fadeInUp}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-sm font-bold text-[#00bfa6] tracking-wider mb-4 uppercase">
              {category.category}
            </h3>
            <div className="bg-[#f8f8f8] rounded-2xl px-6 md:px-8">
              {category.items.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
