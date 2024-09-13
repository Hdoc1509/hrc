import type { Theme } from "./consts";

export const getTheme = (): Theme => {
  const savedTheme = (() => {
    if (typeof localStorage !== "undefined")
      return localStorage.getItem("theme");
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
  window.localStorage.setItem("theme", theme);
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
