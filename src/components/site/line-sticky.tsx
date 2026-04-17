"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SNIPPY_LINE_URL } from "@/lib/constants"

export default function LineSticky() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function onScroll() { setShow(window.scrollY > 200) }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <>
      {/* SP: 下部バー */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#06C755] px-4 py-3 shadow-lg">
        <Link href={SNIPPY_LINE_URL} data-gtm-click="line_cta" data-gtm-label="sticky_mobile" className="flex items-center justify-center gap-2 text-white text-sm font-semibold w-full">
          LINEで無料相談
        </Link>
      </div>
      {/* PC: 右下フローティング */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Link href={SNIPPY_LINE_URL} data-gtm-click="line_cta" data-gtm-label="sticky_desktop" className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#05b34c] hover:scale-105 transition-all text-sm font-bold">
          LINEで相談する
        </Link>
      </div>
    </>
  )
}
