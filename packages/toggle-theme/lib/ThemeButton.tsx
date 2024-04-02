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
  fullRounded = false,
}: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(getTheme());

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
    >
      {theme === "light" ? lightElement : darkElement}
    </button>
  );
};
