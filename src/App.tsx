
import { useEffect } from "react";
import { Header, Footer, AddItem, VisibilityFilters, List } from "@/components";
import { LOCALSTORAGE_THEME, THEME_MAP } from "@/utils";

const App = () => {

  useEffect(() => {
    
    const savedTheme = localStorage.getItem(LOCALSTORAGE_THEME) as keyof typeof THEME_MAP;
    if (!savedTheme || !THEME_MAP[savedTheme]) return;
  
    const { primary, secondary, tertiary } = THEME_MAP[savedTheme];
    document.documentElement.style.setProperty('--color-primary', primary);
    document.documentElement.style.setProperty('--color-secondary', secondary);
    document.documentElement.style.setProperty('--color-tertiary', tertiary);

  }, []);

  return (
    <div className="relative bg-primary h-[100dvh] flex flex-col">
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
