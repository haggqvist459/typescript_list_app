import { THEME_MAP, LOCALSTORAGE_THEME } from "@/utils";

export function setTheme(themeName: keyof typeof THEME_MAP) {
  const theme = THEME_MAP[themeName];
  if (!theme) return;


  document.documentElement.style.setProperty("--color-primary", theme.primary);
  document.documentElement.style.setProperty("--color-secondary", theme.secondary);
  document.documentElement.style.setProperty("--color-tertiary", theme.tertiary);


  document.documentElement.style.backgroundColor = theme.primary;
  document.body.style.transition = "background-color 0.3s ease";
  document.body.style.backgroundColor = theme.primary;


  let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = theme.primary;

  localStorage.setItem(LOCALSTORAGE_THEME, themeName);
}