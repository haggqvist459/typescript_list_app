import { LOCALSTORAGE_THEME, THEME_MAP } from './constants';

const getShadedColor = (cssVarName: string, overlay = 0.2): string => {
  const base = getComputedStyle(document.documentElement)
    .getPropertyValue(cssVarName)
    .trim();

  const hex = base.replace('#', '');
  if (hex.length !== 6) return base;

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  const blend = (c: number) =>
    Math.round((1 - overlay) * c).toString(16).padStart(2, '0');

  return `#${blend(r)}${blend(g)}${blend(b)}`;
};

export const setStatusBarColor = (dimmed: boolean) => {
  const metaTag = document.querySelector('meta[name="theme-color"]');
  if (!metaTag) return;

  const savedTheme = localStorage.getItem(LOCALSTORAGE_THEME) as keyof typeof THEME_MAP;
  const themeVars = THEME_MAP[savedTheme];
  if (!themeVars) return;

  const primaryVar = themeVars.primary.replace('var(', '').replace(')', '');
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue(primaryVar)
    .trim();

  const shaded = getShadedColor(primaryVar);

  metaTag.setAttribute('content', dimmed ? shaded : primaryColor);
};