import "./App.css";
import { Button } from "../lib/main";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);

  const styles = { marginBlock: "1rem" };

  const toggleError = () => setError(!error);

  return (
    <>
      <button onClick={toggleError}>toggle error</button>
      <div style={styles}>
        <Button size="large" color="secondary" disabled={error} />
      </div>
      <div style={styles}>
        <Button size="large" color="primary" disabled={error} />
      </div>
      <div style={styles}>
        <Button size="large" color="danger" disabled={error} />
      </div>
    </>
  );
}

export default App;
