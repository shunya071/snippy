"use client"

import { Switch } from "@/components/ui/switch"
import { useTransition } from "react"

type Props = {
  published: boolean
  onToggle: () => Promise<void>
}

export default function PublishedToggle({ published, onToggle }: Props) {
  const [isPending, startTransition] = useTransition()

  return (
    <Switch
      checked={published}
      disabled={isPending}
      onCheckedChange={() => startTransition(() => onToggle())}
    />
  )
}
