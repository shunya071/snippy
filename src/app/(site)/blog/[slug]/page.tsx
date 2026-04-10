import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import MarkdownRenderer from "@/components/markdown-renderer"
import BlogSidebar from "@/components/site/blog-sidebar"
import { ChevronLeft, Clock } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
  })

  if (!article) return { title: "記事が見つかりません" }

  return {
    title: `${article.title} | Snippy ブログ`,
    description: article.body.replace(/[#*\[\]>|-]/g, "").slice(0, 120),
  }
}

function estimateReadTime(text: string): number {
  const charCount = text.replace(/\s/g, "").length
  return Math.max(1, Math.ceil(charCount / 600))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
    include: { images: { orderBy: { slot: "asc" } } },
  })

  if (!article) notFound()

  const imageMap: { [slot: number]: { url: string; alt: string } } = {}
  for (const img of article.images) {
    imageMap[img.slot] = { url: img.url, alt: img.alt }
  }

  const readTime = estimateReadTime(article.body)

  return (
    <section className="py-20 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* パンくず */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#00bfa6] mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          ブログ一覧に戻る
        </Link>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* メインコンテンツ */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {/* サムネイル */}
              {article.thumbnailUrl && (
                <div className="aspect-[2/1] relative overflow-hidden">
                  <Image
                    src={article.thumbnailUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* 記事ヘッダー */}
              <div className="p-6 sm:p-10 pb-0 sm:pb-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="secondary">{article.category}</Badge>
                  {article.publishedAt && (
                    <time className="text-sm text-gray-400">
                      {article.publishedAt.toLocaleDateString("ja-JP")}
                    </time>
                  )}
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    約{readTime}分で読めます
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                  {article.title}
                </h1>
              </div>

              {/* 記事本文 */}
              <div className="p-6 sm:p-10 pt-8 sm:pt-8">
                <MarkdownRenderer content={article.body} images={imageMap} />
              </div>
            </div>
          </article>

          {/* サイドバー（PC） */}
          <div className="w-full lg:w-[300px] shrink-0">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar currentSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
