# @hdoc/react-button

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc/react-button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc%2Freact-button">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc%2Freact-button">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc%2Freact-button">
</p>

A simple button component for your React app

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
import { Button } from "@hdoc/react-button";

function App() {
  return (
    <>
      ...
      <Button size="large" color="primary" />
    </>
  );
}
```

## Props

`startIcon`

The name of the icon to display on the left.

Type: `string`

---

`endIcon`

The name of the icon to display on the right.

Type: `string`

---

`color`

The color of the button.

Type: `'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`

---

`className`

Additional class names for extending styles.

Type: `string`

---

`disabled`

Whether the button is disabled.

Type: `boolean`

---

`size`

Size for the button.

Type: `'small' | 'medium' | 'large'`

---

## CSS classes

`.button--primary`

The primary styles for the button

---

`.button--secondary`

The secondary styles for the button

---

`.button--error`

The error styles for the button

---

`.button--warning`

The warning styles for the button

---

`.button--info`

The info styles for the button

---

`.button--success`

The success styles for the button

---

`.button--small`

The small styles for the button

---

`.button--medium`

The medium styles for the button

---

`.button--large`

The large styles for the button

---

`.button--disabled`

The disabled styles for the button

## Customization

You can customize the color of the button by using the following CSS custom properties:

```css
.any-parent-of-button-component,
.class-that-i-use-for-extending-styles {
  --button-color: black; /* default color */
  --button-color-error: red;
  --button-color-warning: orange;
  --button-color-info: blue;
  --button-color-success: green;
  --button-color-disabled: gray;
}
```
