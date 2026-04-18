import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Snippy | 岐阜の店舗ビジネス専門Web集客パートナー",
    template: "%s | Snippy",
  },
  description:
    "サロン・クリニック・飲食店に特化したWeb集客パートナー。サイト制作・LINE構築・業務改善をワンストップでサポートします。",
  verification: {
    google: "ph6CuET8M_7iNtahutZd-keKHqao1YsxeWrWH7oCoNs",
  },
  metadataBase: new URL("https://snippy-web.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Snippy",
    title: "Snippy | 岐阜の店舗ビジネス専門Web集客パートナー",
    description:
      "サロン・クリニック・飲食店に特化したWeb集客パートナー。サイト制作・LINE構築・業務改善をワンストップでサポートします。",
    url: "https://snippy-web.jp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snippy | 岐阜の店舗ビジネス専門Web集客パートナー",
    description:
      "サロン・クリニック・飲食店に特化したWeb集客パートナー。サイト制作・LINE構築・業務改善をワンストップでサポートします。",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased overflow-x-hidden`}>
      <GoogleTagManager gtmId="GTM-MBB9TWL6" />
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
