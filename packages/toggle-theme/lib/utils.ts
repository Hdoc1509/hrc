import { STORAGE_KEY, THEME, type Theme } from "./consts";

export const getTheme = (customKey?: string): Theme => {
  const savedTheme = (() => {
    if (typeof localStorage !== "undefined")
      return localStorage.getItem(customKey ?? STORAGE_KEY);
  })();

  if (savedTheme === THEME.LIGHT || savedTheme === THEME.DARK) {
    return savedTheme;
  }

  const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME.DARK
    : THEME.LIGHT;

  saveTheme(userTheme);
  return userTheme;
};

export const saveTheme = (theme: Theme, customKey?: string) => {
  window.localStorage.setItem(customKey ?? STORAGE_KEY, theme);
};

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
};

export const loadTheme = (customKey?: string) => {
  applyTheme(getTheme(customKey));
};
