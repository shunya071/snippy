import type { Metadata } from "next"
import ComingSoon from "@/components/site/coming-soon"

export const metadata: Metadata = {
  title: "サポート体制 | Snippy",
  description: "Snippyのサポート体制ページは現在準備中です。",
}

export default function SupportPage() {
  return (
    <ComingSoon
      title="サポート体制"
      description="サポート体制ページは現在準備中です。サポート内容について詳しく知りたい方は、お気軽にLINEでご相談ください。"
    />
  )
}
