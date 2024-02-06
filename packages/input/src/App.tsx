import { Icon } from "@hdoc/react-material-icons";
import { Input, Textarea, Checkbox } from "../lib/main";
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
      <div className="input-grid">
        <Input label="Small" size="small" {...sharedProps} />
        <Input
          label="Normal"
          iconStart={<Icon name="people" />}
          {...sharedProps}
        />
        <Input
          label="Focused"
          iconEnd={<Icon name="phone" />}
          {...sharedProps}
          {...focusedProps}
        />
        <Input
          label="Disabled"
          disabled
          iconEnd={<Icon name="phone" disabled />}
          required
          {...sharedProps}
        />
      </div>
      <div className="input-grid">
        <Input
          label="Error"
          size="small"
          placeholder={sharedProps.placeholder}
          error
        />
        <Input
          label="Error"
          iconStart={<Icon name="lock" />}
          placeholder={sharedProps.placeholder}
          error
        />
        <Input
          label="Error focused"
          iconEnd={<Icon name="account_circle" />}
          placeholder={sharedProps.placeholder}
          {...focusedProps}
          error
        />
        <Input
          label="Error disabled"
          iconEnd={<Icon name="account_circle" disabled />}
          placeholder={sharedProps.placeholder}
          error
          disabled
          required
        />
      </div>
      <Input
        label="Full width"
        iconStart={<Icon name="question_answer" />}
        placeholder={sharedProps.placeholder}
        fullWidth
      />
      <div className="input-grid">
        <Textarea label="Textarea" {...sharedProps} />
        <Textarea
          label="Textarea focused"
          placeholder={sharedProps.placeholder}
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
          className="my-checkbox"
          label="Checkbox checked"
          color="primary"
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
    </>
  );
}

export default App;
