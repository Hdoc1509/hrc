import { ThemeButton } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function ThemeButtonDemo() {
  return (
    <ThemeButton
      lightElement={<Icon name="light_mode" color="warning" />}
      darkElement={<Icon name="dark_mode" color="info" />}
      fullRounded
    />
  );
}
