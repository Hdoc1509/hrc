import { Icon } from "@hrc/material-icons";
import { ThemeButton } from "@hrc/toggle-theme";

export function ThemeSelect() {
  return (
    <ThemeButton
      lightElement={<Icon name="light_mode" color="warning" />}
      darkElement={<Icon name="dark_mode" color="info" />}
      fullRounded
    />
  );
}
