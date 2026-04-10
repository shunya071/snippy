import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Star } from "lucide-react"
import DeleteButton from "@/components/admin/delete-button"
import PublishedToggle from "@/components/admin/published-toggle"
import {
  deleteTestimonial,
  toggleTestimonialPublished,
} from "@/lib/actions/testimonials"

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">お客様の声</h1>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <Plus className="w-4 h-4 mr-2" />
            新規作成
          </Link>
        </Button>
      </div>

      {testimonials.length === 0 ? (
        <p className="text-gray-500">まだお客様の声がありません。</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>お名前</TableHead>
              <TableHead>肩書き</TableHead>
              <TableHead>評価</TableHead>
              <TableHead>公開</TableHead>
              <TableHead className="w-24">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <PublishedToggle
                    published={item.published}
                    onToggle={toggleTestimonialPublished.bind(null, item.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon-sm" asChild>
                      <Link href={`/admin/testimonials/${item.id}`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <DeleteButton
                      onDelete={deleteTestimonial.bind(null, item.id)}
                      label="このお客様の声"
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
