import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import FaqForm from "@/components/admin/faq-form"
import DeleteButton from "@/components/admin/delete-button"
import { deleteFaq } from "@/lib/actions/faqs"

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditFaqPage({ params }: Props) {
  const { id } = await params
  const faq = await prisma.faq.findUnique({ where: { id } })

  if (!faq) notFound()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">FAQ編集</h1>
        <DeleteButton
          onDelete={deleteFaq.bind(null, faq.id)}
          label="このFAQ"
        />
      </div>
      <FaqForm
        defaultValues={{
          id: faq.id,
          category: faq.category,
          question: faq.question,
          answer: faq.answer,
          sortOrder: faq.sortOrder,
          published: faq.published,
        }}
      />
    </div>
  )
}
