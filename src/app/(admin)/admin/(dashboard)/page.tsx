import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Briefcase, MessageSquare, HelpCircle } from "lucide-react"

export default async function AdminDashboard() {
  const [postCount, articleCount, workCount, testimonialCount, faqCount] = await Promise.all([
    prisma.post.count(),
    prisma.article.count(),
    prisma.work.count(),
    prisma.testimonial.count(),
    prisma.faq.count(),
  ])

  const stats = [
    { label: "お知らせ", count: postCount, icon: FileText, href: "/admin/posts" },
    { label: "ブログ", count: articleCount, icon: BookOpen, href: "/admin/articles" },
    { label: "導入事例", count: workCount, icon: Briefcase, href: "/admin/works" },
    { label: "お客様の声", count: testimonialCount, icon: MessageSquare, href: "/admin/testimonials" },
    { label: "FAQ", count: faqCount, icon: HelpCircle, href: "/admin/faqs" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.label}
                </CardTitle>
                <Icon className="w-4 h-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.count}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
