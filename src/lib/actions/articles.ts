"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { articleSchema } from "@/lib/validations/article"

export async function createArticle(data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = articleSchema.parse(data)

  await prisma.article.create({
    data: {
      title: parsed.title,
      slug: parsed.slug,
      body: parsed.body,
      category: parsed.category,
      thumbnailUrl: parsed.thumbnailUrl || null,
      published: parsed.published,
      publishedAt: parsed.publishedAt ? new Date(parsed.publishedAt) : null,
    },
  })

  revalidatePath("/admin/articles")
  redirect("/admin/articles")
}

export async function updateArticle(id: string, data: unknown) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const parsed = articleSchema.parse(data)

  await prisma.article.update({
    where: { id },
    data: {
      title: parsed.title,
      slug: parsed.slug,
      body: parsed.body,
      category: parsed.category,
      thumbnailUrl: parsed.thumbnailUrl || null,
      published: parsed.published,
      publishedAt: parsed.publishedAt ? new Date(parsed.publishedAt) : null,
    },
  })

  revalidatePath("/admin/articles")
  redirect("/admin/articles")
}

export async function deleteArticle(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.article.delete({ where: { id } })

  revalidatePath("/admin/articles")
  redirect("/admin/articles")
}

export async function upsertArticleImage(
  articleId: string,
  slot: number,
  url: string,
  alt: string = ""
) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.articleImage.upsert({
    where: { articleId_slot: { articleId, slot } },
    update: { url, alt },
    create: { articleId, slot, url, alt },
  })

  revalidatePath(`/admin/articles/${articleId}`)
}

export async function deleteArticleImage(articleId: string, slot: number) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.articleImage.deleteMany({
    where: { articleId, slot },
  })

  revalidatePath(`/admin/articles/${articleId}`)
}

export async function toggleArticlePublished(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const article = await prisma.article.findUnique({ where: { id } })
  if (!article) throw new Error("Not found")

  await prisma.article.update({
    where: { id },
    data: {
      published: !article.published,
      publishedAt: !article.published ? new Date() : article.publishedAt,
    },
  })

  revalidatePath("/admin/articles")
}
