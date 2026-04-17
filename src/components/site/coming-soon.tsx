import Link from "next/link"
import { SNIPPY_LINE_URL } from "@/lib/constants"

export default function ComingSoon({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-[#f8f8f8]">
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6faf7] mb-6">
          <svg
            className="w-8 h-8 text-[#00bfa6]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-sm text-[#00bfa6] font-medium mb-4">Coming Soon</p>
        <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            トップに戻る
          </Link>
          <Link
            href={SNIPPY_LINE_URL}
            data-gtm-click="line_cta"
            data-gtm-label="coming_soon"
            className="inline-flex items-center px-6 py-3 bg-[#06C755] text-white text-sm font-medium rounded-full hover:bg-[#05b34c] transition-colors"
          >
            LINEで相談する
          </Link>
        </div>
      </div>
    </section>
  )
}
