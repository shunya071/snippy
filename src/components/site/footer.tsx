import Link from "next/link"
import Image from "next/image"
import { SERVICES, SNIPPY_LINE_URL } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 md:py-16 pb-20 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/logo.webp"
                alt="Snippy"
                width={120}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              サロン・クリニック・飲食店に特化した
              <br />
              岐阜のWeb集客パートナー。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">サービス</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-400 hover:text-[#00bfa6] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">サポート</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#faq" className="text-slate-400 hover:text-[#00bfa6] transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#00bfa6] transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href={SNIPPY_LINE_URL} data-gtm-click="line_cta" data-gtm-label="footer" className="text-slate-400 hover:text-[#06C755] transition-colors">
                  LINE相談
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">企業情報</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#00bfa6] transition-colors">
                  代表について
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-10 pt-8 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Snippy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
