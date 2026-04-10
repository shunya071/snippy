import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authConfig = {
  providers: [
    // ミドルウェアではauthorize不要（JWT検証のみ）
    Credentials({
      credentials: {
        username: { label: "ユーザーネーム", type: "text" },
        password: { label: "パスワード", type: "password" },
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
} satisfies NextAuthConfig
