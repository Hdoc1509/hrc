import { useState } from "react";
import { Button, ButtonIcon } from "../lib/main";
import { ButtonExample } from "./Examples";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const styles = { marginBlock: "1rem" };

  const toggleError = () => setError(!error);

  return (
    <>
      <Button
        className="button-error"
        onClick={toggleError}
        text="Toggle error"
      />
      <div style={styles}>
        <ButtonExample disabled={error} />
        <ButtonExample disabled={error} color="primary" />
      </div>
      <div style={styles}>
        <ButtonExample disabled={error} color="secondary" />
        <ButtonExample disabled={error} color="danger" />
      </div>
      <div style={styles}>
        <ButtonExample disabled={error} color="info" />
        <ButtonExample disabled={error} color="warning" />
      </div>
      <div style={styles}>
        <ButtonExample disabled={error} color="success" />
      </div>
      <div className="rounded-variants">
        <Button
          text="Top rounded"
          roundedSide="top"
          color="primary"
          size="large"
        />
        <Button
          text="Bottom rounded"
          roundedSide="bottom"
          color="info"
          size="large"
        />
        <Button
          text="Left rounded"
          roundedSide="left"
          color="warning"
          size="large"
        />
        <Button
          text="Right rounded"
          roundedSide="right"
          color="success"
          size="large"
        />
      </div>
      <ButtonIcon icon="check" color="primary" size="small" />
      <ButtonIcon icon="delete" color="secondary" />
      <ButtonIcon icon="error" color="danger" size="large" />
      <ButtonIcon icon="map" color="info" size="large" />
      <ButtonIcon icon="settings" color="warning" />
      <ButtonIcon icon="search" color="success" size="small" />
    </>
  );
}

export default App;
