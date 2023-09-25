import { useState } from "react";
import { Button, ButtonIcon } from "../lib/main";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const styles = { marginBlock: "1rem" };

  const toggleError = () => setError(!error);

  return (
    <>
      <button onClick={toggleError}>toggle error</button>
      {/* TODO: Use grid to display the buttons and its styles */}
      <div style={styles}>
        <Button size="large" disabled={error} text="p" />
      </div>
      <div style={styles}>
        <Button size="large" color="secondary" disabled={error} />
      </div>
      <div style={styles}>
        <Button size="large" color="primary" disabled={error} />
      </div>
      <div style={styles}>
        {/* TODO: Combine color and text variants correctly */}
        <Button size="large" color="danger" disabled={error} variant="outline" />
      </div>
      <ButtonIcon icon="delete" color="danger" />
      <ButtonIcon icon="error" color="primary" size="large" />
    </>
  );
}

export default App;
