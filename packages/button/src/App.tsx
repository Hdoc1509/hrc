import { useState } from "react";
import { Button, ButtonIcon } from "../lib/main";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const styles = { marginBlock: "1rem" };

  const toggleError = () => setError(!error);

  return (
    <>
      <Button className="button-error" onClick={toggleError} text="Toggle error" />
      <div style={styles}>
        <Button size="large" disabled={error} />
        <Button size="large" disabled={error} variant="outline" />
        <Button size="large" disabled={error} variant="text" />
      </div>
      <div style={styles}>
        <Button size="large" color="primary" disabled={error} />
        <Button
          size="large"
          color="primary"
          disabled={error}
          variant="outline"
        />
        <Button size="large" color="primary" disabled={error} variant="text" />
      </div>
      <div style={styles}>
        <Button size="large" color="secondary" disabled={error} />
        <Button
          size="large"
          color="secondary"
          disabled={error}
          variant="outline"
        />
        <Button
          size="large"
          color="secondary"
          disabled={error}
          variant="text"
        />
      </div>
      <div style={styles}>
        <Button size="large" color="danger" disabled={error} />
        <Button
          size="large"
          color="danger"
          disabled={error}
          variant="outline"
        />
        <Button size="large" color="danger" disabled={error} variant="text" />
      </div>
      <ButtonIcon icon="check" color="secondary" size="small" />
      <ButtonIcon icon="delete" color="danger" />
      <ButtonIcon icon="error" color="primary" size="large" />
    </>
  );
}

export default App;
