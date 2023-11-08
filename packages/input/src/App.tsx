import { Input, Textarea } from "../lib/main";
import "./App.css";

const toggleTheme = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
};

const focusedProps = {
  className: "input--focused",
  labelClassName: "input-label--focused",
};

const helperText = "Helper text";

function App() {
  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <div className="input-grid">
        <Input label="Small" size="small" helperText={helperText} />
        <Input label="Normal" helperText={helperText} iconStart="people" />
        <Input
          label="Focused"
          helperText={helperText}
          iconEnd="phone"
          {...focusedProps}
        />
        <Input
          label="Disabled"
          disabled
          helperText={helperText}
          iconEnd="phone"
          required
        />
      </div>
      <div className="input-grid">
        <Input size="small" error />
        <Input iconStart="lock" error />
        <Input iconEnd="account_circle" error {...focusedProps} />
        <Input iconEnd="account_circle" error disabled />
      </div>
      <Input label="Full width" iconStart="question_answer" fullWidth />
      <div className="input-grid">
        <Textarea label="Textarea" helperText={helperText} />
        <Textarea label="Textarea focused" {...focusedProps} />
        <Textarea label="Textarea error" helperText={helperText} error />
        <Textarea label="Textarea error focused" error {...focusedProps} />
      </div>
    </>
  );
}

export default App;
