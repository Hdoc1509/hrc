import { STORAGE_KEY, type Theme } from "./consts";

export const getTheme = (): Theme => {
  const savedTheme = (() => {
    if (typeof localStorage !== "undefined")
      return localStorage.getItem(STORAGE_KEY);
  })();

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

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
