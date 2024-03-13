import { useState } from "react";
import { Icon } from "../lib/main";
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
      <Icon name="info" color="primary" />
      <Icon name="work" color="secondary" />
      <Icon name="delete" color="error" />
      <Icon name="warning" color="warning" />
      <Icon name="note" color="info" />
      <br />
      <Icon name="sell" color="success" />
      <Icon name="search" color="info" />
      <Icon name="home" color="success" />
      <Icon name="account_circle" color="error" />
      <Icon name="settings" color="primary" />
      <br />
      <Icon name="favorite" color="error" />
      <Icon name="done" color="success" />
      <Icon name="visibility" color="primary" />
      <Icon name="shopping_cart" color="secondary" />
      <Icon name="check_circle" color="success" />
      <br />
      <Icon name="description" color="warning" />
      <Icon name="lock" color="info" />
      <Icon name="logout" color="error" />
      <Icon name="schedule" color="primary" />
      <Icon name="language" color="secondary" />
      <br />
      <div className="inherit-size">
        <Icon name="people" color="info" size="inherit" />
      </div>
    </>
  );
}

export default App;
