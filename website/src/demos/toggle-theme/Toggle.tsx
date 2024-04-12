import { Icon } from "@hrc/material-icons";
import { ThemeButton } from "@hrc/toggle-theme";
import "./Toggle.css";

export default function ThemeToggle() {
  return (
    <ThemeButton
      lightElement={<Icon name="light_mode" size="large" />}
      darkElement={<Icon name="dark_mode" size="large" />}
    />
  );
}
