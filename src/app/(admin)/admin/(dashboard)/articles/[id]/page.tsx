import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import ArticleForm from "@/components/admin/article-form"
import ArticleImages from "@/components/admin/article-images"
import DeleteButton from "@/components/admin/delete-button"
import { deleteArticle } from "@/lib/actions/articles"
import { Separator } from "@/components/ui/separator"

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params
  const article = await prisma.article.findUnique({
    where: { id },
    include: { images: { orderBy: { slot: "asc" } } },
  })

  if (!article) notFound()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">ブログ記事編集</h1>
        <DeleteButton
          onDelete={deleteArticle.bind(null, article.id)}
          label="このブログ記事"
        />
      </div>
      <ArticleForm
        defaultValues={{
          id: article.id,
          title: article.title,
          slug: article.slug,
          body: article.body,
          category: article.category,
          thumbnailUrl: article.thumbnailUrl ?? "",
          published: article.published,
          publishedAt: article.publishedAt
            ? article.publishedAt.toISOString().split("T")[0]
            : "",
        }}
      />
      <Separator className="my-8" />
      <ArticleImages
        articleId={article.id}
        images={article.images.map((img) => ({
          slot: img.slot,
          url: img.url,
          alt: img.alt,
        }))}
      />
    </div>
  )
}
