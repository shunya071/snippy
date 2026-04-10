"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { faqSchema } from "@/lib/validations/faq"

export async function createFaq(data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = faqSchema.parse(data)

  await prisma.faq.create({ data: parsed })

  revalidatePath("/admin/faqs")
  redirect("/admin/faqs")
}

export async function updateFaq(id: string, data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = faqSchema.parse(data)

  await prisma.faq.update({ where: { id }, data: parsed })

  revalidatePath("/admin/faqs")
  redirect("/admin/faqs")
}

export async function deleteFaq(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.faq.delete({ where: { id } })

  revalidatePath("/admin/faqs")
  redirect("/admin/faqs")
}

export async function toggleFaqPublished(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const item = await prisma.faq.findUnique({ where: { id } })
  if (!item) throw new Error("Not found")

  await prisma.faq.update({
    where: { id },
    data: { published: !item.published },
  })

  revalidatePath("/admin/faqs")
}
