# @hdoc/react-input

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc/react-input">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc%2Freact-input">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc%2Freact-input">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc%2Freact-input">
</p>

Simple input components for your React app

![Inputs screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/0e1b1880-8af4-4467-913a-8ee923e7bf97)

## Installation

```bash
npm install @hdoc/react-input
```

## Usage

```js
import { EmailIcon, StarIcon, StarBorderIcon } from "third-party-package";
import { Input, Textarea, Checkbox } from "@hdoc/react-input";

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

The default entry point includes CSS for all of the components. If you are
only using a few components, you can reduce the build size by importing only
the components you need:

```diff
- import { Input, Textarea } from "@hdoc/react-input";
+ import { Input } from "@hdoc/react-input/dist/Input";
+ import { Textarea } from "@hdoc/react-input/dist/Textarea";
```

Or, you can use `babel-plugin-import` to automatically import the components:

```js
// config for babel
{
  ...otherConfig,
  plugins: [
    [
      "import",
      {
        libraryName: "@hdoc/react-input",
        libraryDirectory: "dist",
        camel2DashComponentName: false,
        transformToDefaultImport: false,
      },
    ],
  ]
}
```

Additionally, you will need to import the global CSS in your entry file:

```js
import "@hdoc/react-input/dist/main.css";
```
