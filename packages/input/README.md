# @hdoc-react/input

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc-react/input">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc-react%2Finput">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc-react%2Finput">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc-react%2Finput">
</p>

Simple input components for your React app

![Inputs screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/b611760d-755e-4923-ba6c-3c52ceb32b2c)

## Installation

```bash
npm install @hdoc-react/input
```

## Usage

```js
import { EmailIcon, StarIcon, StarBorderIcon } from "third-party-package";
import { Input, Textarea, Checkbox } from "@hdoc-react/input";

function App() {
  return (
    <>
      <Input label="Email" type="email" iconEnd={<EmailIcon />} />
      <Textarea label="Message" />
      <Checkbox
        label="Favorite"
        icon={<StarBorderICon />}
        iconChecked={<StarIcon />}
        color="warning"
      />
    </>
  );
}
```

## API

See documentation below for reference to all of the props, classes and CSS
custom properties available for the following components:

- [`<Input />`](docs/Input.md)
- [`<Textarea />`](docs/Textarea.md)
- [`<Checkbox />`](docs/Checkbox.md)

## General Customization

You can customize the label, placeholder and helper text for any of the
previously mentioned components.

### CSS Custom Properties

```css
/* YOU CAN USE ANY SELECTOR YOU WANT */
:root,
[data-theme="my-custom-theme"],
body.dark,
.any-parent,
.class-to-extend-styles {
  --placeholder-color: #636363;
  --placeholder-disabled: #434343;

  --label-font-family: "Roboto";
  --label-font-size: 14px;
  --label-font-weight: 600;
  --label-text: #828282;
  --label-text-focus: lightblue;

  /* ↓ This should be passed to .label */
  --helper-text-color: #828282;

  /* ERROR VARIANT, for label and helper text */
  --error: #f44336;
}
```

### CSS Classes

`.label`

The styles for the label

---

`.label--error`

The error styles for the label

---

`.label--fullwidth`

The full width styles for the label

---

`.helper-text`

The styles for the helper text

## Reducing Build Size

The default entry point includes CSS for all of the components. You have two
options to reduce the build size:

### Option 1: Use path imports

```diff
- import { Input, Textarea } from "@hdoc-react/input";
+ import { Input } from "@hdoc-react/input/dist/Input";
+ import { Textarea } from "@hdoc-react/input/dist/Textarea";
```

### Option 2: Use `babel-plugin-import`

Install the plugin with `npm install -D babel-plugin-import`

Create a `.babelrc.js` file in your project root with the following content:

```js
import inputConfig from "@hdoc-react/input/config/babel-import.js";

const plugins = [...otherPlugins, inputConfig];

module.exports = { plugins };
```
