import { z } from "zod"

export const articleSchema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  slug: z
    .string()
    .min(1, "スラッグは必須です")
    .regex(/^[a-z0-9-]+$/, "半角英数字とハイフンのみ使用できます"),
  body: z.string().min(1, "本文は必須です"),
  category: z.string().min(1, "カテゴリは必須です"),
  thumbnailUrl: z.string().optional(),
  published: z.boolean(),
  publishedAt: z.string().optional(),
})

export type ArticleFormValues = z.infer<typeof articleSchema>
