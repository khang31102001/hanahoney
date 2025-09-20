import { Footer, Header } from "@/components"

interface Props {
  children: React.ReactNode
}


export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
