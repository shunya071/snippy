import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { getSupabase } from "@/lib/supabase"

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 })
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Images only" }, { status: 400 })
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Max 5MB" }, { status: 400 })
  }

  const ext = file.name.split(".").pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const filePath = `articles/${fileName}`

  const buffer = Buffer.from(await file.arrayBuffer())

  const supabase = getSupabase()

  const { error } = await supabase.storage
    .from("cms-images")
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const { data: urlData } = supabase.storage
    .from("cms-images")
    .getPublicUrl(filePath)

  return NextResponse.json({ url: urlData.publicUrl })
}
