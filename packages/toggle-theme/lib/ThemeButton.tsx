import { useEffect, useState } from "react";
import { applyTheme, getTheme, saveTheme } from "./utils";
import { THEME, type Theme } from "./consts";
import "./ThemeButton.scss";

type Props = {
  lightElement: React.ReactNode;
  darkElement: React.ReactNode;
  fullRounded?: boolean;
  customKey?: string;
};

export const ThemeButton = ({
  darkElement,
  lightElement,
  fullRounded,
  customKey,
}: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(() => getTheme(customKey));

  const handleToggleTheme = () =>
    setTheme((theme) => (theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));

  useEffect(() => {
    applyTheme(theme);
    saveTheme(theme, customKey);
  }, [customKey, theme]);

  return (
    <button
      className={`theme-button${
        fullRounded ? " theme-button--full-rounded" : ""
      }`}
      onClick={handleToggleTheme}
      aria-label={`Switch to ${
        theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
      } mode`}
    >
      {theme === THEME.LIGHT ? lightElement : darkElement}
    </button>
  );
};
