import { useState } from "react";
import { Button, ButtonIcon } from "../lib/main";
import { ButtonExample } from "./Examples";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const toggleError = () => setError(!error);

  return (
    <div className="App">
      <Button
        className="button-error"
        onClick={toggleError}
        text="Toggle error"
      />
      <div className="button-examples">
        <ButtonExample disabled={error} />
        <ButtonExample disabled={error} color="primary" />
        <ButtonExample disabled={error} color="secondary" />
        <ButtonExample disabled={error} color="danger" />
        <ButtonExample disabled={error} color="info" />
        <ButtonExample disabled={error} color="warning" />
        <div className="last-row">
          <ButtonExample disabled={error} color="success" />
        </div>
      </div>
      <div className="rounded-variants">
        <Button
          text="Top rounded"
          roundedSide="top"
          color="primary"
          size="large"
          disabled={error}
        />
        <Button
          text="Bottom rounded"
          roundedSide="bottom"
          color="info"
          size="large"
          disabled={error}
        />
        <Button
          text="Left rounded"
          roundedSide="left"
          color="warning"
          size="large"
          disabled={error}
        />
        <Button
          text="Right rounded"
          roundedSide="right"
          color="success"
          size="large"
          disabled={error}
        />
      </div>
      <div className="button-icons">
        <ButtonIcon
          icon="check"
          color="primary"
          size="small"
          disabled={error}
        />
        <ButtonIcon icon="delete" color="secondary" disabled={error} />
        <ButtonIcon icon="error" color="danger" size="large" disabled={error} />
        <ButtonIcon icon="map" color="info" size="large" disabled={error} />
        <ButtonIcon icon="settings" color="warning" disabled={error} />
        <ButtonIcon
          icon="search"
          color="success"
          size="small"
          disabled={error}
        />
      </div>
    </div>
  );
}

export default App;
