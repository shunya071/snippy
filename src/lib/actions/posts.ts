"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { postSchema } from "@/lib/validations/post"

export async function createPost(data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = postSchema.parse(data)

  await prisma.post.create({
    data: {
      title: parsed.title,
      slug: parsed.slug,
      body: parsed.body,
      thumbnailUrl: parsed.thumbnailUrl || null,
      published: parsed.published,
      publishedAt: parsed.publishedAt ? new Date(parsed.publishedAt) : null,
    },
  })

  revalidatePath("/admin/posts")
  redirect("/admin/posts")
}

export async function updatePost(id: string, data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = postSchema.parse(data)

  await prisma.post.update({
    where: { id },
    data: {
      title: parsed.title,
      slug: parsed.slug,
      body: parsed.body,
      thumbnailUrl: parsed.thumbnailUrl || null,
      published: parsed.published,
      publishedAt: parsed.publishedAt ? new Date(parsed.publishedAt) : null,
    },
  })

  revalidatePath("/admin/posts")
  redirect("/admin/posts")
}

export async function deletePost(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.post.delete({ where: { id } })

  revalidatePath("/admin/posts")
  redirect("/admin/posts")
}

export async function togglePostPublished(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const post = await prisma.post.findUnique({ where: { id } })
  if (!post) throw new Error("Not found")

  await prisma.post.update({
    where: { id },
    data: {
      published: !post.published,
      publishedAt: !post.published ? new Date() : post.publishedAt,
    },
  })

  revalidatePath("/admin/posts")
}
