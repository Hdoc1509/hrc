# @hdoc/react-input

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc/react-input">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc%2Freact-input">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc%2Freact-input">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc%2Freact-input">
</p>

Simple input components for your React app

![input-examples](docs/input-examples.png)

## Installation

```bash
npm install @hdoc/react-input @hdoc/react-material-icons @material-design-icons/font
```

## Usage

Import `@material-design-icons/font` in your entry file (example: src/main.jsx in Vite):

```js
import "@material-design-icons/font";
```

:information_source: Check [@material-design-icons/font docs](https://www.npmjs.com/package/@material-design-icons/font#usage) for more info.

Then, in your `App.jsx` or another file:

```js
import { Input, Textarea } from "@hdoc/react-input";

function App() {
  return (
    <>
      ...
      <Input label="Email" type="email" iconEnd="email" />
      <Textarea label="Message" />
    </>
  );
}
```

## API

See documentation below for reference to all of the props and classes available for the following components:

- [`<Input />`](docs/Input.md)
- [`<Textarea />`](docs/Textarea.md)

## Customization

You can customize the input, label and helper text by using the following CSS custom properties:

```css
/* YOU CAN USE ANY SELECTOR YOU WANT */
:root,
[data-theme="my-custom-theme"],
body.dark,
.any-parent-of-input,
.class-to-extend-styles {
  /* NORMAL INPUT */
  --input-bg: #ffffff;
  --input-bg-disabled: #aaa;
  --input-border-color: #888;
  --input-border-color-hover: #444;
  --input-border-color-focus: lightblue;
  --input-border-color-disabled: rgba(0, 0, 0, 0.26);
  --input-font-weight: 600;
  --input-text: #000;
  --input-helper-text: #828282;

  --placeholder-color: #636363;
  --placeholder-disabled: #434343;

  --label-font-family: "Roboto";
  --label-font-weight: 600;
  --label-text: #828282;
  --label-text-hover: #000;
  --label-text-focus: lightblue;

  /* ERROR VARIANT */
  /* auto-used by input, label and helper text */
  --error: #f44336;
}
```
