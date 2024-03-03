import { useState } from "react";
import { Icon } from "@hdoc-react/material-icons";
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
        Toggle error - @hdoc-react/material-icons
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
        <Button color="success" size="large" disabled={error} fullRounded>
          Full rounded
        </Button>
        <Button color="warning" size="large" disabled={error} fullRounded>
          Full rounded
        </Button>
        <Button color="info" size="large" disabled={error} fullRounded>
          Full rounded
        </Button>
        <Button color="primary" size="large" disabled={error} fullRounded>
          Full rounded
        </Button>
      </div>
      <div className="button-icons">
        <ButtonIcon color="primary" size="small" disabled={error}>
          <Icon name="check" />
        </ButtonIcon>
        <ButtonIcon color="secondary" disabled={error}>
          <Icon name="delete" />
        </ButtonIcon>
        <ButtonIcon color="error" size="large" disabled={error}>
          <Icon name="error" />
        </ButtonIcon>
        <ButtonIcon
          color="info"
          size="large"
          disabled={error}
          variant="outline"
        >
          <Icon name="map" />
        </ButtonIcon>
        <ButtonIcon color="warning" disabled={error} variant="outline">
          <Icon name="settings" />
        </ButtonIcon>
        <ButtonIcon
          color="success"
          size="small"
          disabled={error}
          variant="outline"
        >
          <Icon name="search" />
        </ButtonIcon>
        <ButtonIcon
          color="primary"
          disabled={error}
          variant="outline"
          size="small"
          fullRounded
        >
          <Icon name="check" />
        </ButtonIcon>
        <ButtonIcon
          color="secondary"
          disabled={error}
          variant="outline"
          fullRounded
        >
          <Icon name="delete" />
        </ButtonIcon>
        <ButtonIcon
          color="error"
          disabled={error}
          variant="outline"
          size="large"
          fullRounded
        >
          <Icon name="error" />
        </ButtonIcon>
        <ButtonIcon color="info" size="large" disabled={error} fullRounded>
          <Icon name="map" />
        </ButtonIcon>
        <ButtonIcon color="warning" disabled={error} fullRounded>
          <Icon name="settings" />
        </ButtonIcon>
        <ButtonIcon color="success" size="small" disabled={error} fullRounded>
          <Icon name="search" />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default App;
