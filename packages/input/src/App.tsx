import { Icon } from "@hrc/material-icons";
import { Checkbox } from "@lib/main";
import { Demo } from "./components/Demo";
import { InputDemo } from "./components/InputDemo";
import { TextareaDemo } from "./components/TextareaDemo";
import { CheckboxDemo } from "./components/CheckboxDemo";
import "./App.css";

const toggleTheme = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
};

function App() {
  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <Demo />
      <InputDemo />
      <TextareaDemo />
      <CheckboxDemo />
      <div className="input-grid">
        <Checkbox
          label="Bigger checkbox"
          labelClassName="my-checkbox-label"
          icon={<Icon name="thumb_up" variant="outlined" />}
          iconChecked={<Icon name="thumb_up" />}
          size="large"
        />
      </div>
    </>
  );
}

export default App;
