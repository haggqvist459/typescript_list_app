
import { Header, Footer, AddItem, VisibilityFilters, List } from "@/components";


function App() {

  return (
    <div className="relative bg-mint-light h-[100dvh] flex flex-col">
    <Header />
    <VisibilityFilters />
    <div className="flex-grow overflow-y-auto">
      <List />
    </div>
    <div className="sticky bottom-10 pb-safe z-10">
      <AddItem />
    </div>
    <div className="w-full bg-mint-light absolute top-full">
      <Footer />
    </div>
  </div>
  )
}

export default App
