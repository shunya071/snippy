"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { workSchema, type WorkFormValues } from "@/lib/validations/work"
import { createWork, updateWork } from "@/lib/actions/works"

type Props = {
  defaultValues?: WorkFormValues & { id?: string }
}

export default function WorkForm({ defaultValues }: Props) {
  const isEdit = !!defaultValues?.id

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WorkFormValues>({
    resolver: zodResolver(workSchema),
    defaultValues: defaultValues ?? {
      storeName: "",
      slug: "",
      industry: "",
      challenge: "",
      solution: "",
      results: "",
      published: false,
    },
  })

  const published = watch("published")

  async function onSubmit(data: WorkFormValues) {
    if (isEdit && defaultValues?.id) {
      await updateWork(defaultValues.id, data)
    } else {
      await createWork(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="storeName">店舗名</Label>
        <Input id="storeName" {...register("storeName")} placeholder="店舗名" />
        {errors.storeName && (
          <p className="text-sm text-red-500">{errors.storeName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">スラッグ（URL）</Label>
        <Input id="slug" {...register("slug")} placeholder="store-name" />
        {errors.slug && (
          <p className="text-sm text-red-500">{errors.slug.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">業種</Label>
        <Input id="industry" {...register("industry")} placeholder="美容サロン" />
        {errors.industry && (
          <p className="text-sm text-red-500">{errors.industry.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="challenge">課題</Label>
        <Textarea id="challenge" {...register("challenge")} placeholder="導入前の課題..." rows={4} />
        {errors.challenge && (
          <p className="text-sm text-red-500">{errors.challenge.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="solution">施策</Label>
        <Textarea id="solution" {...register("solution")} placeholder="実施した施策..." rows={4} />
        {errors.solution && (
          <p className="text-sm text-red-500">{errors.solution.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="results">成果</Label>
        <Textarea id="results" {...register("results")} placeholder="得られた成果..." rows={4} />
        {errors.results && (
          <p className="text-sm text-red-500">{errors.results.message}</p>
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
