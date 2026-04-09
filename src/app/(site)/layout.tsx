import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import LineSticky from "@/components/site/line-sticky"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-14 md:pb-0">{children}</main>
      <Footer />
      <LineSticky />
    </>
  )
}
