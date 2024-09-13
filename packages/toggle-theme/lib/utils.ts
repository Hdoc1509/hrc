import { STORAGE_KEY, THEME, type Theme } from "./consts";

export const getTheme = (): Theme => {
  const savedTheme = (() => {
    if (typeof localStorage !== "undefined")
      return localStorage.getItem(STORAGE_KEY);
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

export const saveTheme = (theme: Theme) => {
  window.localStorage.setItem(STORAGE_KEY, theme);
};

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
};

export const toggleTheme = (): Theme => {
  const newTheme = getTheme() === "light" ? "dark" : "light";

  applyTheme(newTheme);
  saveTheme(newTheme);

  return newTheme;
};

export const loadTheme = () => {
  applyTheme(getTheme());
};
