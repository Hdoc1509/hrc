import { ThemeButton } from "../lib/ThemeButton";
import { Icon } from "@hdoc/react-material-icons";
import "./App.css";

function App() {
  return (
    <ThemeButton
      lightElement={<Icon name="light_mode" color="warning" />}
      darkElement={<Icon name="dark_mode" className="dark-icon" />}
      fullRounded
    />
  );
}

export default App;
