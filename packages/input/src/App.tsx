import { Input } from "../lib/main";
import "./App.css";

const toggleTheme = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
};

const focusedProps = {
  className: "input--focused",
  labelClassName: "input-label--focused",
};

function App() {
  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <div className="input-grid">
        <Input label="Small" size="small" />
        <Input label="Normal" />
        <Input label="Focused" {...focusedProps} />
        <Input label="Disabled" disabled />
      </div>
      <div className="input-grid">
        <Input size="small" iconStart="people" />
        <Input iconEnd="people" />
        <Input iconEnd="people" {...focusedProps} />
        <Input iconEnd="people" disabled />
      </div>
      <div className="input-grid">
        <Input size="small" error />
        <Input error />
        <Input error {...focusedProps} />
        <Input error disabled />
      </div>
      <div className="input-grid">
        <Input size="small" helperText="Helper text" />
        <Input helperText="Helper text" />
        <Input helperText="Helper text" {...focusedProps} />
        <Input helperText="Helper text" disabled />
      </div>
      <Input label="Full width" fullWidth />
    </>
  );
}

export default App;
