import { useEffect, useState } from "react";
import { applyTheme, getTheme, saveTheme } from "./utils";
import type { Theme } from "./consts";
import "./ThemeButton.scss";

type Props = {
  lightElement: React.ReactNode;
  darkElement: React.ReactNode;
  fullRounded?: boolean;
};

export const ThemeButton = ({
  darkElement,
  lightElement,
  fullRounded,
}: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(getTheme);

  const handleToggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useEffect(() => {
    applyTheme(theme);
    saveTheme(theme);
  }, [theme]);

  return (
    <button
      className={`theme-button${
        fullRounded ? " theme-button--full-rounded" : ""
      }`}
      onClick={handleToggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? lightElement : darkElement}
    </button>
  );
};
