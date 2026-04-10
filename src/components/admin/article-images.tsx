"use client"

import { useState, useTransition } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2, Upload, ImageIcon } from "lucide-react"
import {
  upsertArticleImage,
  deleteArticleImage,
} from "@/lib/actions/articles"

type ImageSlot = {
  slot: number
  url: string
  alt: string
}

type Props = {
  articleId: string
  images: ImageSlot[]
}

export default function ArticleImages({ articleId, images }: Props) {
  const [slots, setSlots] = useState<ImageSlot[]>(images)
  const [isPending, startTransition] = useTransition()

  function addSlot() {
    const nextSlot = slots.length > 0
      ? Math.max(...slots.map((s) => s.slot)) + 1
      : 1
    setSlots([...slots, { slot: nextSlot, url: "", alt: "" }])
  }

  async function handleUpload(slot: number, file: File) {
    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    })

    if (!res.ok) return

    const { url } = await res.json()

    setSlots((prev) =>
      prev.map((s) => (s.slot === slot ? { ...s, url } : s))
    )

    startTransition(() => {
      upsertArticleImage(articleId, slot, url)
    })
  }

  function handleDelete(slot: number) {
    setSlots((prev) => prev.filter((s) => s.slot !== slot))
    startTransition(() => {
      deleteArticleImage(articleId, slot)
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-semibold">本文内画像</Label>
        <Button type="button" variant="outline" size="sm" onClick={addSlot}>
          <Plus className="w-4 h-4 mr-1" />
          画像スロット追加
        </Button>
      </div>

      <p className="text-sm text-gray-500">
        本文中に <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">[image 1]</code> と書くと、スロット1の画像が挿入されます。
      </p>

      {slots.length === 0 && (
        <p className="text-sm text-gray-400">まだ画像スロットがありません。</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {slots.map((s) => (
          <div
            key={s.slot}
            className="border rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-gray-400" />
                [image {s.slot}]
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                onClick={() => handleDelete(s.slot)}
              >
                <Trash2 className="w-3.5 h-3.5 text-red-500" />
              </Button>
            </div>

            {s.url ? (
              <div className="relative aspect-[16/9] rounded overflow-hidden bg-gray-100">
                <Image
                  src={s.url}
                  alt={s.alt || `image ${s.slot}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-[16/9] border-2 border-dashed rounded cursor-pointer hover:border-[#00bfa6] hover:bg-[#e6faf7]/30 transition-colors">
                <Upload className="w-6 h-6 text-gray-300 mb-2" />
                <span className="text-xs text-gray-400">クリックしてアップロード</span>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleUpload(s.slot, file)
                  }}
                  disabled={isPending}
                />
              </label>
            )}

            {s.url && (
              <label className="block">
                <span className="text-xs text-gray-400">差し替え</span>
                <Input
                  type="file"
                  accept="image/*"
                  className="text-xs"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleUpload(s.slot, file)
                  }}
                  disabled={isPending}
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
