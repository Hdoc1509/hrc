import { useState } from "react";
import { Icon } from "@hdoc-react/material-icons";
import { Button } from "../lib/main";
import { ColorExamples } from "./components/Examples";
import { ErrorIcon } from "./components/ErrorIcon";
import { RoundedVariants } from "./components/RoundedVariants";
import { IconExamples } from "./components/IconExamples";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const toggleError = () => setError(!error);

  return (
    <div className="App">
      <Button
        className="button-error"
        onClick={toggleError}
        iconEnd={<ErrorIcon />}
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
      <ColorExamples error={error} />
      <RoundedVariants error={error} />
      <IconExamples error={error} />
    </div>
  );
}

export default App;
