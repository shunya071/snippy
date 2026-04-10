import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import BlogSidebar from "@/components/site/blog-sidebar"

export const metadata: Metadata = {
  title: "ブログ | Snippy",
  description: "店舗集客に役立つノウハウやSnippyの最新情報をお届けします。",
}

type Props = {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams

  const articles = await prisma.article.findMany({
    where: {
      published: true,
      ...(category ? { category } : {}),
    },
    orderBy: { publishedAt: "desc" },
  })

  return (
    <section className="py-20 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            ブログ
          </h1>
          <p className="text-gray-500">
            店舗集客に役立つノウハウやSnippyの最新情報をお届けします。
          </p>
          {category && (
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="secondary">{category}</Badge>
              <Link href="/blog" className="text-xs text-gray-400 hover:text-[#00bfa6]">
                すべて表示
              </Link>
            </div>
          )}
        </div>

        {/* メイン + サイドバー */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* 記事一覧 */}
          <div className="flex-1 min-w-0">
            {articles.length === 0 ? (
              <p className="text-gray-500 bg-white rounded-xl p-10 text-center">
                {category
                  ? `「${category}」の記事はまだありません。`
                  : "記事を準備中です。お楽しみに。"}
              </p>
            ) : (
              <div className="space-y-6">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    {/* サムネイル */}
                    <div className="sm:w-[280px] shrink-0">
                      {article.thumbnailUrl ? (
                        <div className="aspect-[16/9] sm:aspect-auto sm:h-full relative overflow-hidden bg-gray-100">
                          <Image
                            src={article.thumbnailUrl}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/9] sm:aspect-auto sm:h-full bg-gradient-to-br from-[#e6faf7] to-[#00bfa6]/20 flex items-center justify-center min-h-[140px]">
                          <span className="text-[#00bfa6] font-bold text-lg">
                            Snippy
                          </span>
                        </div>
                      )}
                    </div>

                    {/* テキスト */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        {article.publishedAt && (
                          <time className="text-xs text-gray-400">
                            {article.publishedAt.toLocaleDateString("ja-JP")}
                          </time>
                        )}
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#00bfa6] transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {article.body.replace(/[#*\[\]>|-]/g, "").slice(0, 100)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* サイドバー（PC） */}
          <div className="w-full lg:w-[300px] shrink-0">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
