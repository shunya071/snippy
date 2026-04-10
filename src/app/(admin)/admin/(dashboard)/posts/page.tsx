import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil } from "lucide-react"
import DeleteButton from "@/components/admin/delete-button"
import PublishedToggle from "@/components/admin/published-toggle"
import { deletePost, togglePostPublished } from "@/lib/actions/posts"

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">お知らせ</h1>
        <Button asChild>
          <Link href="/admin/posts/new">
            <Plus className="w-4 h-4 mr-2" />
            新規作成
          </Link>
        </Button>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">まだお知らせがありません。</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>タイトル</TableHead>
              <TableHead>スラッグ</TableHead>
              <TableHead>公開</TableHead>
              <TableHead>作成日</TableHead>
              <TableHead className="w-24">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{post.slug}</Badge>
                </TableCell>
                <TableCell>
                  <PublishedToggle
                    published={post.published}
                    onToggle={togglePostPublished.bind(null, post.id)}
                  />
                </TableCell>
                <TableCell>
                  {post.createdAt.toLocaleDateString("ja-JP")}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon-sm" asChild>
                      <Link href={`/admin/posts/${post.id}`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <DeleteButton
                      onDelete={deletePost.bind(null, post.id)}
                      label="このお知らせ"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
