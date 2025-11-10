import { useEffect } from "react";
import { Header, Footer, AddItem, VisibilityFilters, List } from "@/components";
import { LOCALSTORAGE_THEME, THEME_MAP, setTheme } from "@/utils";

const App = () => {

  useEffect(() => {
    
    const savedTheme = localStorage.getItem(LOCALSTORAGE_THEME) as keyof typeof THEME_MAP;
    if (!savedTheme || !THEME_MAP[savedTheme]) {
    const defaultTheme: keyof typeof THEME_MAP = "Mint"; // or whatever key you use
    setTheme(defaultTheme);
    localStorage.setItem(LOCALSTORAGE_THEME, defaultTheme);
    return;
  }
    
    setTheme(savedTheme)

  }, []);

  return (
    <div className="relative h-[100dvh] flex flex-col">
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
