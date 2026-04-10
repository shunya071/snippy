import { z } from "zod"

export const testimonialSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  role: z.string().min(1, "肩書き・店舗名は必須です"),
  comment: z.string().min(1, "コメントは必須です"),
  rating: z.number().min(1).max(5),
  published: z.boolean(),
})

export type TestimonialFormValues = z.infer<typeof testimonialSchema>
