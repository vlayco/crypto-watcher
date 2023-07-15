import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Layout(
  {
    children,
  }: {
    children: React.ReactNode
  }
) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </section>
  )
}