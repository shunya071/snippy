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
import { deleteFaq, toggleFaqPublished } from "@/lib/actions/faqs"

export default async function FaqsPage() {
  const faqs = await prisma.faq.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <Button asChild>
          <Link href="/admin/faqs/new">
            <Plus className="w-4 h-4 mr-2" />
            新規作成
          </Link>
        </Button>
      </div>

      {faqs.length === 0 ? (
        <p className="text-gray-500">まだFAQがありません。</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>カテゴリ</TableHead>
              <TableHead>質問</TableHead>
              <TableHead>順番</TableHead>
              <TableHead>公開</TableHead>
              <TableHead className="w-24">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faqs.map((faq) => (
              <TableRow key={faq.id}>
                <TableCell>
                  <Badge variant="secondary">{faq.category}</Badge>
                </TableCell>
                <TableCell className="font-medium max-w-xs truncate">
                  {faq.question}
                </TableCell>
                <TableCell>{faq.sortOrder}</TableCell>
                <TableCell>
                  <PublishedToggle
                    published={faq.published}
                    onToggle={toggleFaqPublished.bind(null, faq.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon-sm" asChild>
                      <Link href={`/admin/faqs/${faq.id}`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <DeleteButton
                      onDelete={deleteFaq.bind(null, faq.id)}
                      label="このFAQ"
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
