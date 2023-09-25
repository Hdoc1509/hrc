# @hdoc/react-button

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc/react-button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc%2Freact-button">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc%2Freact-button">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc%2Freact-button">
</p>

Simple button components for your React app

## Installation

```bash
npm install @hdoc/react-button @hdoc/react-material-icons @material-design-icons/font
```

## Usage

Import `@material-design-icons/font` in your entry file (example: src/main.jsx in Vite):

```js
import "@material-design-icons/font";
```

Check [@material-design-icons/font docs](https://www.npmjs.com/package/@material-design-icons/font#usage) for more info.

Then, in your `App.jsx` or another file:

```jsx
import { Button, ButtonIcon } from "@hdoc/react-button";

function App() {
  return (
    <>
      ...
      <Button size="large" color="primary" />
      <ButtonIcon icon="favorite" color="danger" />
    </>
  );
}
```

## API

See documentation below for reference to all of the props and classes available for the following components:

- [`<Button />`](docs/Button.md)
- [`<ButtonIcon />`](docs/ButtonIcon.md)

## Customization

You can customize the color of the button by using the following CSS custom properties:

```css
.any-parent-of-button-component,
.class-that-i-use-for-extending-styles {
  --button-bg: lightgray;
  --button-bg-hover: darkgray;
  --button-bg-disabled: gray;
  --button-color: black;
  --button-color-disabled: white;
  --button-shadow: 0 0 0 1px black;
}
```
