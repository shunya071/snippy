import type { Metadata } from "next"
import ComingSoon from "@/components/site/coming-soon"

export const metadata: Metadata = {
  title: "サービス | Snippy",
  description: "Snippyのサービス紹介ページは現在準備中です。",
}

export default function ServicesPage() {
  return (
    <ComingSoon
      title="サービス"
      description="サービス紹介ページは現在準備中です。詳しい内容が気になる方は、お気軽にLINEでご相談ください。"
    />
  )
}
