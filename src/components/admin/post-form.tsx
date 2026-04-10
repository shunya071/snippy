"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { postSchema, type PostFormValues } from "@/lib/validations/post"
import { createPost, updatePost } from "@/lib/actions/posts"
import MarkdownPreview from "@/components/admin/markdown-preview"

type Props = {
  defaultValues?: PostFormValues & { id?: string }
}

export default function PostForm({ defaultValues }: Props) {
  const isEdit = !!defaultValues?.id

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: defaultValues ?? {
      title: "",
      slug: "",
      body: "",
      thumbnailUrl: "",
      published: false,
      publishedAt: "",
    },
  })

  const published = watch("published")

  async function onSubmit(data: PostFormValues) {
    if (isEdit && defaultValues?.id) {
      await updatePost(defaultValues.id, data)
    } else {
      await createPost(data)
    }
  }

  function generateSlug() {
    const title = watch("title")
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
    setValue("slug", slug)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="title">タイトル</Label>
        <Input id="title" {...register("title")} placeholder="記事タイトル" />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">スラッグ（URL）</Label>
        <div className="flex gap-2">
          <Input id="slug" {...register("slug")} placeholder="article-slug" />
          <Button type="button" variant="outline" onClick={generateSlug}>
            自動生成
          </Button>
        </div>
        {errors.slug && (
          <p className="text-sm text-red-500">{errors.slug.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="body">本文（Markdown）</Label>
        <Textarea
          id="body"
          {...register("body")}
          placeholder="本文を入力..."
          rows={15}
        />
        {errors.body && (
          <p className="text-sm text-red-500">{errors.body.message}</p>
        )}
        <MarkdownPreview content={watch("body")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="thumbnailUrl">サムネイルURL</Label>
        <Input
          id="thumbnailUrl"
          {...register("thumbnailUrl")}
          placeholder="https://..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="publishedAt">公開日</Label>
        <Input id="publishedAt" type="date" {...register("publishedAt")} />
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="published"
          checked={published}
          onCheckedChange={(checked) => setValue("published", checked)}
        />
        <Label htmlFor="published">公開する</Label>
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "保存中..." : isEdit ? "更新する" : "作成する"}
        </Button>
      </div>
    </form>
  )
}
