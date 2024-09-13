import { useState } from "react";
import { Theme, getTheme, toggleTheme } from "./utils";
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

  const handleToggleTheme = () => {
    const newTheme = toggleTheme();

    // setTheme(toggleTheme());
    setTheme(newTheme);
  };

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
