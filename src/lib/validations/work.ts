import { z } from "zod"

export const workSchema = z.object({
  storeName: z.string().min(1, "店舗名は必須です"),
  slug: z
    .string()
    .min(1, "スラッグは必須です")
    .regex(/^[a-z0-9-]+$/, "半角英数字とハイフンのみ使用できます"),
  industry: z.string().min(1, "業種は必須です"),
  challenge: z.string().min(1, "課題は必須です"),
  solution: z.string().min(1, "施策は必須です"),
  results: z.string().min(1, "成果は必須です"),
  published: z.boolean(),
})

export type WorkFormValues = z.infer<typeof workSchema>
