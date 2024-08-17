import { Demo } from "./components/Demo";
import { InputDemo } from "./components/InputDemo";
import { TextareaDemo } from "./components/TextareaDemo";
import { CheckboxDemo } from "./components/CheckboxDemo";
import { RadioDemo } from "./components/RadioDemo";
import { RadioGroupDemo } from "./components/RadioGroupDemo";
import "./demos.css";

function App() {
  return (
    <>
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
