import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import { SNIPPY_LINE_URL } from "@/lib/constants"
import { MessageCircle } from "lucide-react"

export default async function BlogSidebar({
  currentSlug,
}: {
  currentSlug?: string
}) {
  const [categories, recentArticles] = await Promise.all([
    prisma.article.groupBy({
      by: ["category"],
      where: { published: true },
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
    }),
    prisma.article.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: { title: true, slug: true, publishedAt: true, category: true },
    }),
  ])

  return (
    <aside className="space-y-8">
      {/* カテゴリ */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          カテゴリ
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.category}>
              <Link
                href={`/blog?category=${encodeURIComponent(cat.category)}`}
                className="flex items-center justify-between text-sm text-gray-600 hover:text-[#00bfa6] transition-colors py-1"
              >
                <span>{cat.category}</span>
                <Badge variant="secondary" className="text-xs">
                  {cat._count.id}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 最新記事 */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          最新の記事
        </h3>
        <ul className="space-y-3">
          {recentArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className={`block group ${currentSlug === article.slug ? "pointer-events-none" : ""}`}
              >
                <p
                  className={`text-sm font-medium line-clamp-2 transition-colors ${
                    currentSlug === article.slug
                      ? "text-[#00bfa6]"
                      : "text-gray-700 group-hover:text-[#00bfa6]"
                  }`}
                >
                  {article.title}
                </p>
                {article.publishedAt && (
                  <time className="text-xs text-gray-400 mt-0.5 block">
                    {article.publishedAt.toLocaleDateString("ja-JP")}
                  </time>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* LINE CTA */}
      <div className="bg-[#e6faf7] rounded-xl p-5 text-center">
        <p className="text-sm font-bold text-gray-900 mb-2">
          集客のお悩み、ありませんか？
        </p>
        <p className="text-xs text-gray-500 mb-4">
          LINEで気軽にご相談いただけます
        </p>
        <Link
          href={SNIPPY_LINE_URL}
          data-gtm-click="line_cta"
          data-gtm-label="blog_sidebar"
          className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          無料で相談する
        </Link>
      </div>
    </aside>
  )
}
