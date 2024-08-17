import { Demo } from "./components/Demo";
import { ButtonDemo } from "./components/ButtonDemo";
import { ButtonIconDemo } from "./components/ButtonIconDemo";
import { ButtonGroupDemo } from "./components/ButtonGroupDemo";
import "./App.css";
import "./demos.css";

function App() {
  return (
    <div className="App">
      <Demo />
      <ButtonDemo />
      <ButtonIconDemo />
      <ButtonGroupDemo />
    </div>
  );
}

export default App;
