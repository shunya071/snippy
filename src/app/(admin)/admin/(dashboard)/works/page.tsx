import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { Plus, Pencil } from "lucide-react"
import DeleteButton from "@/components/admin/delete-button"
import PublishedToggle from "@/components/admin/published-toggle"
import { deleteWork, toggleWorkPublished } from "@/lib/actions/works"

export default async function WorksPage() {
  const works = await prisma.work.findMany({ orderBy: { createdAt: "desc" } })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">導入事例</h1>
        <Button asChild>
          <Link href="/admin/works/new">
            <Plus className="w-4 h-4 mr-2" />
            新規作成
          </Link>
        </Button>
      </div>

      {works.length === 0 ? (
        <p className="text-gray-500">まだ導入事例がありません。</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>店舗名</TableHead>
              <TableHead>業種</TableHead>
              <TableHead>公開</TableHead>
              <TableHead>作成日</TableHead>
              <TableHead className="w-24">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {works.map((work) => (
              <TableRow key={work.id}>
                <TableCell className="font-medium">{work.storeName}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{work.industry}</Badge>
                </TableCell>
                <TableCell>
                  <PublishedToggle
                    published={work.published}
                    onToggle={toggleWorkPublished.bind(null, work.id)}
                  />
                </TableCell>
                <TableCell>
                  {work.createdAt.toLocaleDateString("ja-JP")}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon-sm" asChild>
                      <Link href={`/admin/works/${work.id}`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <DeleteButton
                      onDelete={deleteWork.bind(null, work.id)}
                      label="この導入事例"
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
