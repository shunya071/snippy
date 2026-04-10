import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import TestimonialForm from "@/components/admin/testimonial-form"
import DeleteButton from "@/components/admin/delete-button"
import { deleteTestimonial } from "@/lib/actions/testimonials"

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditTestimonialPage({ params }: Props) {
  const { id } = await params
  const item = await prisma.testimonial.findUnique({ where: { id } })

  if (!item) notFound()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">お客様の声 編集</h1>
        <DeleteButton
          onDelete={deleteTestimonial.bind(null, item.id)}
          label="このお客様の声"
        />
      </div>
      <TestimonialForm
        defaultValues={{
          id: item.id,
          name: item.name,
          role: item.role,
          comment: item.comment,
          rating: item.rating,
          published: item.published,
        }}
      />
    </div>
  )
}
