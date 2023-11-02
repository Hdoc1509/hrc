import "./App.css";
import { Icon } from "../lib/main";
import { useState } from "react";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleError = () => setIsDisabled(!isDisabled);

  return (
    <>
      <button onClick={toggleError}>Toggle disabled</button>
      <div className="icon-container">
        <Icon name="error" variant="outlined" size="large" />
      </div>
      <div className="my-container-with-custom-color">
        <Icon
          name="shopping_cart"
          variant="outlined"
          size="large"
          color="error"
          disabled={isDisabled}
        />
      </div>
      <Icon name="info" color="primary" />
      <Icon name="work" color="secondary" />
      <Icon name="delete" color="error" />
      <Icon name="warning" color="warning" />
      <Icon name="note" color="info" />
      <Icon name="sell" color="success" />
    </>
  );
}

export default App;
