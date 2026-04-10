"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { workSchema } from "@/lib/validations/work"

export async function createWork(data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = workSchema.parse(data)

  await prisma.work.create({ data: parsed })

  revalidatePath("/admin/works")
  redirect("/admin/works")
}

export async function updateWork(id: string, data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = workSchema.parse(data)

  await prisma.work.update({ where: { id }, data: parsed })

  revalidatePath("/admin/works")
  redirect("/admin/works")
}

export async function deleteWork(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.work.delete({ where: { id } })

  revalidatePath("/admin/works")
  redirect("/admin/works")
}

export async function toggleWorkPublished(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const work = await prisma.work.findUnique({ where: { id } })
  if (!work) throw new Error("Not found")

  await prisma.work.update({
    where: { id },
    data: { published: !work.published },
  })

  revalidatePath("/admin/works")
}
