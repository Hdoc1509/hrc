import { Demo } from "./components/Demo";
import { InputDemo } from "./components/InputDemo";
import { TextareaDemo } from "./components/TextareaDemo";
import { CheckboxDemo } from "./components/CheckboxDemo";
import { RadioDemo } from "./components/RadioDemo";
import { RadioGroupDemo } from "./components/RadioGroupDemo";
import "./App.css";
import "./demos.css";

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
      <RadioDemo />
      <RadioGroupDemo />
    </>
  );
}

export default App;
