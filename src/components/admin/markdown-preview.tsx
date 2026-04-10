"use client"

import { useState } from "react"
import MarkdownRenderer from "@/components/markdown-renderer"

type Props = {
  content: string
}

export default function MarkdownPreview({ content }: Props) {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowPreview(!showPreview)}
        className="text-sm text-[#00bfa6] hover:text-[#009180] font-medium mb-2"
      >
        {showPreview ? "エディターに戻る" : "プレビューを表示"}
      </button>
      {showPreview && (
        <div className="border rounded-lg p-6 bg-white min-h-[200px]">
          {content ? (
            <MarkdownRenderer content={content} />
          ) : (
            <p className="text-gray-400 text-sm">
              本文を入力するとプレビューが表示されます
            </p>
          )}
          <p className="text-xs text-gray-400 mt-4 pt-4 border-t">
            ※ [image N] の画像は保存後に編集画面で確認できます
          </p>
        </div>
      )}
    </div>
  )
}
