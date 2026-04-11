"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS, SNIPPY_LINE_URL } from "@/lib/constants"

const logo = "/images/logo.webp"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <Image src={logo} alt="Snippy" width={120} height={40} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href={SNIPPY_LINE_URL} data-gtm-click="line_cta" data-gtm-label="header_desktop" className="inline-flex items-center px-5 py-2.5 bg-[#06C755] text-white text-sm font-medium rounded-full hover:bg-[#05b34c] transition-colors">
              無料相談
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            aria-label="メニュー"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-primary py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={SNIPPY_LINE_URL}
              data-gtm-click="line_cta"
              data-gtm-label="header_mobile"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-[#06C755] text-white text-base font-medium rounded-full hover:bg-[#05b34c] transition-colors"
            >
              無料相談
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
