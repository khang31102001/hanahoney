import { Footer, Header, SocialSidebar } from "@/components"

interface Props {
  children: React.ReactNode
}


const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <SocialSidebar />
      <Footer />
    </div>
  )
}
export default MainLayout;
