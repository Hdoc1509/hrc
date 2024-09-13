export const THEME = Object.freeze({
  LIGHT: "light",
  DARK: "dark",
});
export type Theme = (typeof THEME)[keyof typeof THEME];

export const STORAGE_KEY = "theme";
