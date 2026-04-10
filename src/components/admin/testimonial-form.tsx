"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  testimonialSchema,
  type TestimonialFormValues,
} from "@/lib/validations/testimonial"
import {
  createTestimonial,
  updateTestimonial,
} from "@/lib/actions/testimonials"

type Props = {
  defaultValues?: TestimonialFormValues & { id?: string }
}

export default function TestimonialForm({ defaultValues }: Props) {
  const isEdit = !!defaultValues?.id

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: defaultValues ?? {
      name: "",
      role: "",
      comment: "",
      rating: 5,
      published: false,
    },
  })

  const published = watch("published")

  async function onSubmit(data: TestimonialFormValues) {
    if (isEdit && defaultValues?.id) {
      await updateTestimonial(defaultValues.id, data)
    } else {
      await createTestimonial(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="name">お名前</Label>
        <Input id="name" {...register("name")} placeholder="田中 太郎" />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">肩書き・店舗名</Label>
        <Input id="role" {...register("role")} placeholder="〇〇サロン オーナー" />
        {errors.role && (
          <p className="text-sm text-red-500">{errors.role.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="comment">コメント</Label>
        <Textarea id="comment" {...register("comment")} placeholder="お客様の声..." rows={5} />
        {errors.comment && (
          <p className="text-sm text-red-500">{errors.comment.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="rating">評価（1〜5）</Label>
        <Input
          id="rating"
          type="number"
          min={1}
          max={5}
          {...register("rating", { valueAsNumber: true })}
        />
        {errors.rating && (
          <p className="text-sm text-red-500">{errors.rating.message}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="published"
          checked={published}
          onCheckedChange={(checked) => setValue("published", checked)}
        />
        <Label htmlFor="published">公開する</Label>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "保存中..." : isEdit ? "更新する" : "作成する"}
      </Button>
    </form>
  )
}
