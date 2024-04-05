import { ThemeButton } from "@hrc/toggle-theme";
import { Icon } from "@hrc/material-icons";
import './styles.css';

const Light = () => {
  return (
    <>
      <Icon name="light_mode" size="large" color="warning" />
      <span>Light</span>
    </>
  );
};

const Dark = () => {
  return (
    <>
      <Icon name="dark_mode" size="large" color="info" />
      <span>Dark</span>
    </>
  );
};

export function ThemeButtonDemo() {
  return <ThemeButton lightElement={<Light />} darkElement={<Dark />} />;
}
