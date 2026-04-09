"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Clock, CheckCircle } from "lucide-react"

const cases = [
  {
    category: "ヘアサロン",
    location: "岐阜市",
    period: "導入6ヶ月",
    title: "検索からの新規来店が3倍に",
    description: "開業5年目のヘアサロン。自作のホームページはあったものの、スマホ非対応でGoogle検索にもほぼ表示されず、新規集客は口コミ頼みの状態でした。",
    challenge: "サイトが古くスマホで見づらい。Google検索で「岐阜市 美容室」と検索しても表示されず、新規のお客様はほぼ紹介のみ。ホットペッパーの掲載費も負担に。",
    solution: "スマホ対応のオリジナルサイトをリニューアルし、Googleビジネスプロフィールを最適化。口コミ投稿の導線を整備し、地域名×業種キーワードでの検索上位表示を実現。",
    result: "地域名＋業種の検索で安定して上位表示。月の新規予約がコンスタントに3倍になり、ホットペッパーへの依存度を大幅に削減できました。",
    metrics: [
      { label: "新規来店", value: "3倍" },
      { label: "検索表示", value: "5.2倍" },
    ],
  },
  {
    category: "イタリアン料理店",
    location: "各務原市",
    period: "導入4ヶ月",
    title: "LINE経由の予約が月40件に",
    description: "ランチ・ディナーともに人気の個人経営レストラン。営業時間中は電話に出られないことが多く、予約の取りこぼしが課題でした。",
    challenge: "電話でしか予約を受け付けておらず、忙しいランチタイムに電話が取れず予約を逃すことが多発。リピーターへの再来店促進もできていない状態。",
    solution: "LINE公式アカウントを構築し、24時間予約受付を実現。リッチメニューから簡単に予約できる導線を設計し、月2回のクーポン配信でリピーターとの接点を維持。",
    result: "LINE予約が月40件に到達し、電話対応の負担が激減。クーポン配信日には予約が集中し、平日の空席も埋まるようになりました。",
    metrics: [
      { label: "LINE予約", value: "月40件" },
      { label: "リピート率", value: "68%" },
    ],
  },
  {
    category: "整骨院",
    location: "大垣市",
    period: "導入3ヶ月",
    title: "予約管理の手間を80%削減",
    description: "院長ひとりで施術と経営を兼務する整骨院。紙の予約台帳での管理に限界を感じ、業務改善を依頼されました。",
    challenge: "紙の予約台帳で管理しており、ダブルブッキングや記入漏れが月に数回発生。閉院後にカルテ整理や次月の予約確認で毎日1時間以上の残業が常態化。",
    solution: "オンライン予約システムを導入し、LINEからの予約→自動リマインド→来院記録までを一元管理。予約確定時の自動返信で患者さんの不安も解消。",
    result: "予約管理にかかる時間が1日あたり約1時間から10分に短縮。ダブルブッキングがゼロになり、施術に集中できる環境が整いました。",
    metrics: [
      { label: "業務削減", value: "80%" },
      { label: "予約数", value: "1.8倍" },
    ],
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

export default function Cases() {
  return (
    <section className="py-20 md:py-32 bg-[#f8f8f8]">
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
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            導入事例
          </h2>
          <div className="w-16 h-1.5 bg-[#00bfa6] mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="space-y-10">
          {cases.map((item, i) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1 * (i + 1)}
              variants={fadeInUp}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#e6faf7] text-[#00bfa6] text-xs font-bold">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.location}・{item.period}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-3xl">{item.description}</p>

                {/* Challenge → Solution → Result flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-red-50/50 rounded-2xl p-5 border border-red-100/50">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      課題
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.challenge}</p>
                  </div>

                  <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100/50">
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      施策
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.solution}</p>
                  </div>

                  <div className="bg-[#e6faf7] rounded-2xl p-5 border border-[#00bfa6]/10">
                    <p className="text-xs font-bold text-[#00bfa6] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      成果
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.result}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex gap-4">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="bg-[#f8f8f8] rounded-xl p-4 text-center min-w-[100px]">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-[#00bfa6]" />
                        <span className="text-xl font-black text-[#00bfa6]">{metric.value}</span>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#00bfa6] text-[#00bfa6] font-bold text-sm hover:bg-[#00bfa6] hover:text-white transition-all duration-300"
          >
            事例をもっと見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
