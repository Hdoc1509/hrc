import { useState } from "react";
import { Icon } from "../lib/main";
import { Demo } from "./components/Demo";
import { IconDemo } from "./components/IconDemo";
import "./App.css";

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
      <Demo />
      <IconDemo />
      <div className="inherit-size">
        <Icon name="people" color="info" size="inherit" />
      </div>
    </>
  );
}

export default App;
