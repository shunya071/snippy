import type { Metadata } from "next"
import ComingSoon from "@/components/site/coming-soon"

export const metadata: Metadata = {
  title: "導入の流れ | Snippy",
  description: "Snippyの導入の流れページは現在準備中です。",
}

export default function ProcessPage() {
  return (
    <ComingSoon
      title="導入の流れ"
      description="導入の流れページは現在準備中です。ご不明な点はLINEでお気軽にご相談ください。"
    />
  )
}
