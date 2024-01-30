import { useState } from "react";
import { Icon } from "@hdoc/react-material-icons";
import { Button, ButtonIcon } from "../lib/main";
import { ButtonExample } from "./Examples";
import { ErrorIcon } from "./ErrorIcon";
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
        Toggle error - @hdoc/react-material-icons
      </Button>
      <div className="button-examples">
        <ButtonExample disabled={error} />
        <ButtonExample disabled={error} color="primary" />
        <ButtonExample disabled={error} color="secondary" />
        <ButtonExample disabled={error} color="error" />
        <ButtonExample disabled={error} color="info" />
        <ButtonExample disabled={error} color="warning" />
        <div className="last-row">
          <ButtonExample disabled={error} color="success" />
        </div>
      </div>
      <div className="rounded-variants">
        <Button roundedSide="top" color="primary" size="large" disabled={error}>
          Top rounded
        </Button>
        <Button roundedSide="bottom" color="info" size="large" disabled={error}>
          Bottom rounded
        </Button>
        <Button
          roundedSide="left"
          color="warning"
          size="large"
          disabled={error}
        >
          Left rounded
        </Button>
        <Button
          roundedSide="right"
          color="success"
          size="large"
          disabled={error}
        >
          Right rounded
        </Button>
      </div>
      <div className="button-icons">
        <ButtonIcon color="primary" disabled={error}>
          <Icon name="check" size="small" />
        </ButtonIcon>
        <ButtonIcon color="secondary" disabled={error}>
          <Icon name="delete" />
        </ButtonIcon>
        <ButtonIcon color="error" disabled={error}>
          <Icon name="error" size="large" />
        </ButtonIcon>
        <ButtonIcon color="info" disabled={error}>
          <Icon name="map" size="large" />
        </ButtonIcon>
        <ButtonIcon color="warning" disabled={error}>
          <Icon name="settings" />
        </ButtonIcon>
        <ButtonIcon color="success" disabled={error}>
          <Icon name="search" size="small" />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default App;
