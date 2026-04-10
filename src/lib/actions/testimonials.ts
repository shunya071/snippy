"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { testimonialSchema } from "@/lib/validations/testimonial"

export async function createTestimonial(data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = testimonialSchema.parse(data)

  await prisma.testimonial.create({ data: parsed })

  revalidatePath("/admin/testimonials")
  redirect("/admin/testimonials")
}

export async function updateTestimonial(id: string, data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = testimonialSchema.parse(data)

  await prisma.testimonial.update({ where: { id }, data: parsed })

  revalidatePath("/admin/testimonials")
  redirect("/admin/testimonials")
}

export async function deleteTestimonial(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.testimonial.delete({ where: { id } })

  revalidatePath("/admin/testimonials")
  redirect("/admin/testimonials")
}

export async function toggleTestimonialPublished(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const item = await prisma.testimonial.findUnique({ where: { id } })
  if (!item) throw new Error("Not found")

  await prisma.testimonial.update({
    where: { id },
    data: { published: !item.published },
  })

  revalidatePath("/admin/testimonials")
}
