import { z } from "zod"

export const faqSchema = z.object({
  category: z.string().min(1, "カテゴリは必須です"),
  question: z.string().min(1, "質問は必須です"),
  answer: z.string().min(1, "回答は必須です"),
  sortOrder: z.number().int(),
  published: z.boolean(),
})

export type FaqFormValues = z.infer<typeof faqSchema>
