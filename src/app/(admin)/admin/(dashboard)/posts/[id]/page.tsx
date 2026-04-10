import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import PostForm from "@/components/admin/post-form"
import DeleteButton from "@/components/admin/delete-button"
import { deletePost } from "@/lib/actions/posts"

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const post = await prisma.post.findUnique({ where: { id } })

  if (!post) notFound()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">お知らせ編集</h1>
        <DeleteButton
          onDelete={deletePost.bind(null, post.id)}
          label="このお知らせ"
        />
      </div>
      <PostForm
        defaultValues={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          body: post.body,
          thumbnailUrl: post.thumbnailUrl ?? "",
          published: post.published,
          publishedAt: post.publishedAt
            ? post.publishedAt.toISOString().split("T")[0]
            : "",
        }}
      />
    </div>
  )
}
