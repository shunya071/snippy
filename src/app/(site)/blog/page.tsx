import type { Metadata } from "next"
import ComingSoon from "@/components/site/coming-soon"

export const metadata: Metadata = {
  title: "お知らせ | Snippy",
  description: "Snippyのお知らせページは現在準備中です。",
}

export default function BlogPage() {
  return (
    <ComingSoon
      title="お知らせ"
      description="お知らせページは現在準備中です。最新情報はLINEでも配信しておりますので、ぜひ友だち追加してください。"
    />
  )
}
