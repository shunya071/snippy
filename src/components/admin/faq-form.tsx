"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { faqSchema, type FaqFormValues } from "@/lib/validations/faq"
import { createFaq, updateFaq } from "@/lib/actions/faqs"

type Props = {
  defaultValues?: FaqFormValues & { id?: string }
}

export default function FaqForm({ defaultValues }: Props) {
  const isEdit = !!defaultValues?.id

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: defaultValues ?? {
      category: "",
      question: "",
      answer: "",
      sortOrder: 0,
      published: false,
    },
  })

  const published = watch("published")

  async function onSubmit(data: FaqFormValues) {
    if (isEdit && defaultValues?.id) {
      await updateFaq(defaultValues.id, data)
    } else {
      await createFaq(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="category">カテゴリ</Label>
        <Input
          id="category"
          {...register("category")}
          placeholder="ご依頼について"
        />
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="question">質問</Label>
        <Textarea
          id="question"
          {...register("question")}
          placeholder="よくある質問..."
          rows={3}
        />
        {errors.question && (
          <p className="text-sm text-red-500">{errors.question.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="answer">回答</Label>
        <Textarea
          id="answer"
          {...register("answer")}
          placeholder="回答..."
          rows={5}
        />
        {errors.answer && (
          <p className="text-sm text-red-500">{errors.answer.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="sortOrder">表示順</Label>
        <Input
          id="sortOrder"
          type="number"
          {...register("sortOrder", { valueAsNumber: true })}
        />
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
