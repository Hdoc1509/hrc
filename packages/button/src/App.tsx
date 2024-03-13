import { useState } from "react";
import { Icon } from "@hdoc-react/material-icons";
import { Button } from "@lib/main";
import { ErrorOutlineIcon } from "./components/Icons";
import { Demo } from "./components/Demo";
import { ButtonDemo } from "./components/ButtonDemo";
import { ButtonIconDemo } from "./components/ButtonIconDemo";
import { ButtonGroupDemo } from "./components/ButtonGroupDemo";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const toggleError = () => setError(!error);

  return (
    <div className="App">
      <Button
        className="button-error"
        onClick={toggleError}
        iconEnd={<ErrorOutlineIcon />}
      >
        Toggle error - svg
      </Button>
      <Button
        className="button-error"
        onClick={toggleError}
        iconEnd={<Icon name="error_outline" />}
      >
        Toggle error - @hdoc-react/material-icons
      </Button>
      <Demo />
      <ButtonDemo />
      <ButtonIconDemo />
      <ButtonGroupDemo />
    </div>
  );
}

export default App;
