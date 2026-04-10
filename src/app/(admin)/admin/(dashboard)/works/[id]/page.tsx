import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import WorkForm from "@/components/admin/work-form"
import DeleteButton from "@/components/admin/delete-button"
import { deleteWork } from "@/lib/actions/works"

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditWorkPage({ params }: Props) {
  const { id } = await params
  const work = await prisma.work.findUnique({ where: { id } })

  if (!work) notFound()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">導入事例編集</h1>
        <DeleteButton
          onDelete={deleteWork.bind(null, work.id)}
          label="この導入事例"
        />
      </div>
      <WorkForm
        defaultValues={{
          id: work.id,
          storeName: work.storeName,
          slug: work.slug,
          industry: work.industry,
          challenge: work.challenge,
          solution: work.solution,
          results: work.results,
          published: work.published,
        }}
      />
    </div>
  )
}
