import type { Metadata } from "next"
import ComingSoon from "@/components/site/coming-soon"

export const metadata: Metadata = {
  title: "導入事例 | Snippy",
  description: "Snippyの導入事例ページは現在準備中です。",
}

export default function WorksPage() {
  return (
    <ComingSoon
      title="導入事例"
      description="導入事例ページは現在準備中です。実績について詳しく知りたい方は、お気軽にLINEでご相談ください。"
    />
  )
}
