import Sidebar from './Components/Sidebar'

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="grid grid-cols-[256px,1fr] h-screen">
        <Sidebar />
   
        {children}
      </section>
    )
  }