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
        <Button size="large" disabled={error} text="p" variant="outline" />
        <Button size="large" disabled={error} text="p" variant="text" />
      </div>
      <div style={styles}>
        <Button size="large" color="primary" disabled={error} />
        <Button size="large" color="primary" disabled={error} variant="outline" />
        <Button size="large" color="primary" disabled={error} variant="text" />
      </div>
      <div style={styles}>
        <Button size="large" color="secondary" disabled={error} />
        <Button size="large" color="secondary" disabled={error} variant="outline" />
        <Button size="large" color="secondary" disabled={error} variant="text" />
      </div>
      <div style={styles}>
        {/* TODO: Combine color and text variants correctly */}
        <Button size="large" color="danger" disabled={error} />
        <Button size="large" color="danger" disabled={error} variant="outline" />
        <Button size="large" color="danger" disabled={error} variant="text" />
      </div>
      <ButtonIcon icon="delete" color="danger" />
      <ButtonIcon icon="error" color="primary" size="large" />
    </>
  );
}

export default App;
