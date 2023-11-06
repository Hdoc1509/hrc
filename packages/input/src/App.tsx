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

const helperText = "Helper text";

function App() {
  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <div className="input-grid">
        <Input
          label="Small"
          size="small"
          helperText={helperText}
          iconStart="people"
        />
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
        />
      </div>
      <div className="input-grid">
        <Input size="small" iconStart="lock" error />
        <Input iconStart="lock" error />
        <Input iconEnd="account_circle" error {...focusedProps} />
        <Input iconEnd="account_circle" error disabled />
      </div>
      <Input label="Full width" fullWidth />
      <br />
      <br />
      <Input
        label="Full width"
        iconStart="question_answer"
        fullWidth
        {...focusedProps}
      />
    </>
  );
}

export default App;
