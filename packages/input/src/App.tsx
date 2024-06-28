import { Icon } from "@hrc/material-icons";
import { Textarea, Checkbox } from "@lib/main";
import { Demo } from "./components/Demo";
import { InputDemo } from "./components/InputDemo";
import { TextareaDemo } from "./components/TextareaDemo";
import "./App.css";

const toggleTheme = () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
};

const focusedProps = {
  className: "focused",
  labelClassName: "focused",
};

const sharedProps = {
  helperText: "Helper text",
  placeholder: "Placeholder",
};

function App() {
  return (
    <>
      <button onClick={toggleTheme}>toggle theme</button>
      <Demo />
      <InputDemo />
      <TextareaDemo />
      <div className="input-grid">
        <Textarea label="Textarea" {...sharedProps} />
        <Textarea
          label="Textarea focused"
          placeholder={sharedProps.placeholder}
          autosize
          {...focusedProps}
        />
        <Textarea label="Textarea error" {...sharedProps} error />
        <Textarea
          label="Textarea error focused"
          placeholder={sharedProps.placeholder}
          error
          {...focusedProps}
        />
      </div>
      <div className="input-grid">
        <Checkbox label="Small checkbox" size="small" />
        <Checkbox
          label="Checkbox checked"
          icon={<Icon name="check_box_outline_blank" />}
          iconChecked={<Icon name="check_box" />}
          defaultChecked
        />
        <Checkbox
          label="Bigger checkbox"
          labelClassName="my-checkbox-label"
          icon={<Icon name="thumb_up" variant="outlined" />}
          iconChecked={<Icon name="thumb_up" />}
          size="large"
        />
        <Checkbox label="Disabled checkbox" disabled />
      </div>
      <div className="input-grid colored-checkboxes">
        <Checkbox label="Primary" color="primary" defaultChecked />
        <Checkbox label="Secondary" color="secondary" defaultChecked />
        <Checkbox label="Error" color="error" defaultChecked />
        <Checkbox label="Info" color="info" defaultChecked />
        <Checkbox label="Warning" color="warning" defaultChecked />
        <Checkbox label="Success" color="success" defaultChecked />
      </div>
    </>
  );
}

export default App;
