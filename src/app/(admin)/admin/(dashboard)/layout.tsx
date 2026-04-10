import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "@/components/admin/admin-sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) redirect("/admin/login")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-2 border-b px-4 py-3 md:px-6">
            <SidebarTrigger />
          </header>
          <div className="flex-1 p-4 md:p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}
