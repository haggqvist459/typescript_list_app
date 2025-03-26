
import { Header, Footer, AddItem, VisibilityFilters, List } from "@/components";


function App() {

  return (
    <div className="relative bg-mint-light h-[100dvh] flex flex-col">
    <Header />
    <VisibilityFilters />
    <div className="flex-grow overflow-y-auto">
      <List />
    </div>
    <div className="sticky bottom-5 z-10 pb-[env(safe-area-inset-bottom)]">
      <AddItem />
      <Footer />
    </div>
  </div>
  )
}

export default App
